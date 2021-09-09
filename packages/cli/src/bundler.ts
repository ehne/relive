import path from 'path'

export const esBuildBundler = async (inFile:string, outDir:string) => {
  const esbuild = await import('esbuild')
  // const ESBuildNodePolyfillsPlugin = await import('esbuild-plugin-node-polyfills')

  await esbuild.build({
    entryPoints: [inFile],
    bundle: true,
    outfile: path.join(outDir, 'bundle.js'),
    minify: true,
    sourcemap: true,
    target: ['chrome58', 'firefox57', 'safari11']
  }).catch(() => process.exit(1))
}
