
// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому! -DONE


//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content" - DONE
let first = document.getElementById('content')
console.log(first.innerText)
// -- отримує текст з блоку з id "rules" - DONE
let second = document.getElementById('rules')
console.log(second.innerText)
// -- замініть текст параграфа з id 'content' на будь-який інший - DONE
let third = document.getElementById('content')
    third.innerText = ' Some text here'
console.log(third)
// -- замініть текст параграфа з id 'rules' на будь-який інший - DONE
let fourth  = document.getElementById('rules')
fourth.innerText = ' New text here'
console.log(fourth)
// -- змініть кожному елементу колір фону на червоний - DONE
   let five = document.body.children
   for (let rebild of five){
       rebild.style.background = 'red';
   }
// -- змініть кожному елементу колір тексту на синій
let sixth = document.body.children
       for (let sixth_ of sixth){
           sixth_.style.color='blue'
       }
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(second.classList)
// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
let preLast = document.getElementsByClassName('fc_rules')
for (let pre_last of preLast){
    pre_last.onclick = function (){
        console.log(pre_last.innerText)
        console.log('New text')
    }
}
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
 for (let last of preLast){
     last.style.color = 'lime'
 }