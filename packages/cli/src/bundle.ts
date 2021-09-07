export const bundler = async (inFile, outFile) => {
  const esbuild = await import('esbuild')

  esbuild.buildSync({
    entryPoints: [inFile],
    bundle: true,
    outfile: outFile
  })
}
