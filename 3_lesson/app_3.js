const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'data.txt')
const statsFilePath = path.join(__dirname, 'stats.json')
const defText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) creatingFile(defText)
    else processFile(data)
})

function processFile(data) {
    const arr = data.replace(/[.,!?]/g, '').split(/\s+/)
    
    const longestWord = arr.reduce((longest, word) =>
        word.length > longest.length ? word : longest, '');

    const result = {
        wordCount: arr.length,
        longestWord
    }

    fs.writeFile(statsFilePath, JSON.stringify(result, null, 2), err => {
        if (err) return console.log("I can't create this file", err)
        console.log('File created successfully!!', statsFilePath)
        console.log('Statistics: ', result)
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