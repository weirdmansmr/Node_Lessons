const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'data.txt')
const uniqueFilePath = path.join(__dirname, 'unique.json')
const defText = 
`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.`

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) creatingFile(defText)
    else processFile(data)
})

function processFile(data) {
    const arr = data.toLowerCase().replace(/[.,!?]/g, '').split(/\s+/).filter(word => word)
    
    const arrOfUnique = [...new Set(arr)].sort()
    
    fs.writeFile(uniqueFilePath, JSON.stringify(arrOfUnique, null, 2), err => {
        if (err) return console.log("I can't create this file", err)
        console.log('File created successfully!!', uniqueFilePath)
        console.log('Statistics: ', arrOfUnique)
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