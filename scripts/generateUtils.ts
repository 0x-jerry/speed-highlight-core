import fs from 'fs/promises'

main()

const convertName = (s: string) => s.replaceAll('-', '_')

async function main() {
  const files = await fs.readdir('src/languages')

  const out = files.map(
    (file) =>
      `import ${convertName(
        file.replace('.js', '')
      )} from './languages/${file}'`
  )

  const lines = [
    ...out,
    `export const langs = {${files
      .map((file) => convertName(file.replace('.js', '')))
      .join(',')}}`
  ]

  await fs.writeFile('src/langs.js', lines.join('\n'))
}
