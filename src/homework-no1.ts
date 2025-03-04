import './homework-no1.css'

//TODO Домашка 1. 
//* Задание 1.
document.getElementById('submit1')?.addEventListener('click', () => {
    const name = (document.getElementById('task1-input') as HTMLInputElement).value

    if (name) {
        alert(`Привет, ${name}!`)
    } else {
        alert('Пожалуйста, введите ваше имя.')
    }
})

//* Задание 2.
document.getElementById('submit2')?.addEventListener('click', () => {
    const task1Input = (document.getElementById('task2-input') as HTMLInputElement).value
    const number = parseFloat(task1Input)
    const date = 2025

    if (!isNaN(number) && task1Input.length === 4) {
        const result = date - number
        alert(`Ваш возраст ${result}`)
    } else {
        alert('Пожалуйста, введите корректное число.')
    }
})

//* Задание 3.
document.getElementById('submit3')?.addEventListener('click', () => {
    const task1Input = (document.getElementById('task3-input') as HTMLInputElement).value
    const number = parseFloat(task1Input)

    if (!isNaN(number)) {
        const result = number + number + number + number
        alert(`Площадь квадрата равна: ${result}`)
    } else {
        alert('Пожалуйста, введите корректное число.')
    }
})

//* Задание 6.
document.getElementById('submit6')?.addEventListener('click', () => {
    const task1Input = (document.getElementById('task6-input') as HTMLInputElement).value
    const  dollar = parseFloat(task1Input)
    const DOLLAR_IN_EURO = 0.93

    if (!isNaN(dollar)) {
        const result = DOLLAR_IN_EURO * dollar
        alert(`Столько евро получилось: ${result}`)
    } else {
        alert('Пожалуйста, введите корректное число.')
    }
})
