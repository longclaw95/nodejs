var fs = require('fs')
var path = require('path')
var getFiles = require('./mymodule')
var dir = process.argv[2]
var filterStr = process.argv[3]



getFiles(dir, filterStr, function (err, list) {
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function (file) {
    console.log(file)
  })
})