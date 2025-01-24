const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'data.txt')
const upperFilePath = path.join(__dirname, 'output-uppercase.txt')
const defText = "This is default text"

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) creatingFile(defText)
    else processFile(data)
})

function processFile(data) {
    const upperData = data.toUpperCase()

    fs.writeFile(upperFilePath, upperData, err => {
        if (err) return console.log("I can't create this file", err)
        console.log('File created successfully!!', upperFilePath)
    })
}

function creatingFile(defText) {
    console.log(`File ${filePath} not found. Creating it with default content.`);
    fs.writeFile(filePath, defText, err => {
        if (err) return console.log("I can't create this file", err)
        
        console.log('File created successfully!!', filePath)
        processFile(defText)
    })
}