import { writeFile } from 'node:fs'

import pkg from 'sass'
const { compile } = pkg

function compileSCSS(){
  console.clear()
  const result = compile('./style.scss')
  // console.log(result.css)

  let content = result.css
  console.log(content)
  writeFile('dist/style.css', content, err => {
    if (err) {
      console.log('An error occured during saving!')
    }
  })
}

compileSCSS()