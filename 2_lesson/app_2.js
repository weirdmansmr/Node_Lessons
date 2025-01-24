const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'data.txt')
const upperFilePath = path.join(__dirname, 'output-uppercase.txt')

fs.readFile(filePath, 'utf-8', (err, data) => {
    const defText = "This is default text"

    if (err) {
        fs.writeFile(filePath, defText, err => {
            if (err) return console.log("I can't create this file", err)
            
            console.log('File created successfully!!', filePath)
            processFile(defText)
        })
    } else {
        processFile(data)
    }
    
})

function processFile(data) {
    const upperData = data.toUpperCase()

    fs.writeFile(upperFilePath, upperData, err => {
        if (err) return console.log("I can't create this file", err)
        console.log('File created successfully!!', upperFilePath)
    })
}А 