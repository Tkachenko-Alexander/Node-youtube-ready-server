const os = require('os')

console.log('Операционная система: ', os.platform())

console.log('Архитектура процессора: ', os.arch())

console.log('Информация по процессорам: ', os.cpus())

console.log('Свободная память: ', os.freemem())

console.log('Свободная память: ', os.totalmem())

console.log('Домашняя дирректория: ', os.homedir())

console.log('Включен: ', os.uptime())