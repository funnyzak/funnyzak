const https = require('https')
const fs = require('fs')

const url =
  'https://raw.githubusercontent.com/rockbenben/ChatGPT-Shortcut/main/src/data/prompt.json'
const destination = './data/chatgpt/prompts.json'

https
  .get(url, (res) => {
    const fileStream = fs.createWriteStream(destination)
    res.pipe(fileStream)

    fileStream.on('finish', () => {
      console.log('File downloaded successfully.')
    })
  })
  .on('error', (err) => {
    console.error(`Error downloading file: ${err.message}`)
  })
