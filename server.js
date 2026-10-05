import { createReadStream, existsSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, normalize, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createGzip } from 'node:zlib'

const appRoot = fileURLToPath(new URL('.', import.meta.url))
const root = join(appRoot, 'dist')
const port = Number(process.env.PORT) || 3000

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
}

const compressible = new Set(['.html', '.js', '.mjs', '.css', '.json', '.webmanifest', '.txt', '.xml', '.svg'])

async function ensureBuild() {
  if (existsSync(join(root, 'index.html'))) return
  console.log('dist/ not found, running production build...')
  const { build } = await import('vite')
  await build({ root: appRoot, logLevel: 'warn' })
}

function resolvePath(urlPath) {
  let decoded
  try {
    decoded = decodeURIComponent(urlPath.split('?')[0])
  } catch {
    return null
  }

  const requested = normalize(join(root, decoded))
  if (requested !== root && !requested.startsWith(root + sep)) return null

  if (existsSync(requested) && statSync(requested).isFile()) return requested
  if (extname(decoded)) return null
  return join(root, 'index.html')
}

function cacheControl(file) {
  if (extname(file) === '.html') return 'no-cache'
  if (file.startsWith(join(root, 'assets') + sep)) return 'public, max-age=31536000, immutable'
  return 'public, max-age=86400'
}

const server = createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { Allow: 'GET, HEAD' })
    res.end()
    return
  }

  if (req.url === '/healthz') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' })
    res.end('ok')
    return
  }

  const file = resolvePath(req.url ?? '/')
  if (!file || !existsSync(file)) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Not found')
    return
  }

  const ext = extname(file)
  const gzip = compressible.has(ext) && /\bgzip\b/.test(req.headers['accept-encoding'] ?? '')
  const headers = {
    'Content-Type': types[ext] ?? 'application/octet-stream',
    'Cache-Control': cacheControl(file),
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    Vary: 'Accept-Encoding',
  }
  if (gzip) headers['Content-Encoding'] = 'gzip'
  else headers['Content-Length'] = statSync(file).size

  res.writeHead(200, headers)
  if (req.method === 'HEAD') {
    res.end()
    return
  }

  const stream = createReadStream(file)
  stream.on('error', () => res.destroy())
  ;(gzip ? stream.pipe(createGzip()) : stream).pipe(res)
})

await ensureBuild()

server.listen(port, '0.0.0.0', () => {
  console.log(`Calipers listening on 0.0.0.0:${port}`)
})

for (const signal of ['SIGTERM', 'SIGINT']) {
  process.on(signal, () => server.close(() => process.exit(0)))
}
