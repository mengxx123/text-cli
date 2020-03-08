#! /usr/bin/env node

// console.log('demo-cli', process.cwd())

const USER_HOME = process.env.HOME || process.env.USERPROFILE

// console.log('hello cmd')
// console.log(USER_HOME)

let text = process.argv[2] || ''
// console.log(text)
process.stdout.write(text)

// const path = require('path')
// const fs = require('fs')

// console.log('process.argv', process.argv)
// let filePath = path.resolve(process.cwd(), '123.txt')
// fs.writeFile(filePath, process.argv[1], function(err) {
//     // console.log("callback");
//     if(err) {
//         return console.log('创建文件失败')
//     }
//     console.log("创建文件成功");
// })
