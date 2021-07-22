// - створити функцію яка обчислює та повертає площу прямокутника висотою
function sum (a,b){
    return (a+b)*2
}
console.log(sum(20, 30));
// - створити функцію яка обчислює та повертає площу кола
function summ (p,r){
    return 2*p*r
}
console.log(summ(3.14, 10));
// - створити функцію яка обчислює та повертає площу циліндру
function sum_next (p,r,h){
    return 2*p*r*h
}
console.log(sum_next(3.14, 10,12));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function max_and_min(){
    let max = arguments[0]
    let min = arguments[0]
for (let i=0;i < arguments.length;i++) {
    if (arguments[i] > max) {
        max = arguments[i]
    }
    if (arguments[i] < min) {
        min = arguments[i]
    }
}
    return max
}

console.log(max_and_min(12, 234, 432, 21, 1, 43, 2));
// - створити функцію яка  створює блок з текстом. Текст задати через аргумент
function generate_text(text){
    document.write(`<div>${text}</div>`)

}
generate_text('Some text')
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function generate(text){
    document.write(`<ul>`)
    document.write(`<li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
`)

    document.write(`</ul>`)
}
generate('same text')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function generate_next(text){
    document.write(`<ul>`)
    for (let i=0; i<3; i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
generate_next('new text')

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let empty = [ 12,'gere',123,'wgf,op,',true,2423]
function get(){
    for(let emptys of empty){
        document.write(`<li>${emptys}</li>`)
    }
}
get()