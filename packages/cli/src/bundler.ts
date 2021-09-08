export const bundler = async (inFile:string, outFile:string) => {
  const esbuild = await import('esbuild')

  esbuild.buildSync({
    entryPoints: [inFile],
    bundle: true,
    outfile: outFile,
    minify: true,
    sourcemap: true,
    target: ['chrome58', 'firefox57', 'safari11']
  })
}
