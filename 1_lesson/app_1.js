const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'data.txt')
const createFilePath = path.join(__dirname, 'output.txt')

console.log('Current directory:', __dirname);
console.log('Current file:', __filename);

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) return console.log("I can't read this file", err)
    console.log('Text: ', data)
})

fs.writeFile(createFilePath, "well.. that's an another text", err => {
    if (err) return console.log("I can't create this file", err)
    console.log('File created successfully!!', createFilePath)
})