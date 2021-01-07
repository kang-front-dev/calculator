
var a = prompt('Введите первое число')
var b = prompt('Введите второе число')
var z = prompt('Что будем делать?')

a = Number(a)
b = Number(b)

if{
    if(isNaN(a) && isNaN(b)) {
        alert('Ты не ввел НИ ЕДИННОГО ЧИСЛА')
        location.reload()
    }else if(isNaN(a)){
        alert('Введи число в первое окно')
    }else{
        alert('Введи число во второе окно')
    }
}
if(z == '+'){
    alert(a + b)
}else if(z == '-'){
    alert(a - b)
}else if(z == '*'){
    alert(a * b)
}else if(a / b){
    alert(a / b)
}