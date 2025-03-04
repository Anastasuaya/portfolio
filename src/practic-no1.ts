import './practic-no1.css'

//TODO Практика 1. 
//* Задание 1.
document.getElementById('submit1')?.addEventListener('click',() => {
    const task1Input = (document.getElementById('task1-input') as HTMLInputElement).value
    const number = parseFloat(task1Input)
  
    if (!isNaN(number)) {
        const result = number ** 2
        alert(`Ваше число, возведенное во 2 степень: ${result}`)
    } else {
        alert('Пожалуйста, введите корректное число.')
    }
  })
  //!----------------------------------------------------------------------------------------
  //* Задание 2.
  document.getElementById('submit2')?.addEventListener('click', () => {
    const firstNumberInput = (document.getElementById('task2-input1') as HTMLInputElement).value
    const secondNumberInput = (document.getElementById('task2-input2') as HTMLInputElement).value
  
    const firstNumber = parseFloat(firstNumberInput)
    const secondNumber = parseFloat(secondNumberInput)
  
    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        const average = (firstNumber + secondNumber) / 2
        alert(`Среднее арифметическое ваших чисел: ${average}`)
    } else {
        alert('Пожалуйста, введите корректные числа.')
    }
  })
  //!----------------------------------------------------------------------------------------
  //* Задание 3.
  document.getElementById('submit3')?.addEventListener('click',() => {
    const task3Input = (document.getElementById('task3-input') as HTMLInputElement).value
    const number = parseFloat(task3Input)
  
    if(!isNaN(number)) {
      const result = number * number
      alert(`Площадь вашего квадрата равна: ${result}`)
    } else {
      alert('Пожалуйста, введите корректное число.')
    }
  })
  //!----------------------------------------------------------------------------------------
  //* Задание 4.
  document.getElementById('submit4')?.addEventListener('click',() => {
    const task4Input = (document.getElementById('task4-input') as HTMLInputElement).value
    const number = parseFloat(task4Input)
    const KM_IN_MILE = 0.621371
  
    if(!isNaN(number)) {
      const result = KM_IN_MILE * number
      alert(`Километры в мили: ${result}`)
    } else {
      alert('Введите корректное число, пожалуйста.')
    }
  })
  //!----------------------------------------------------------------------------------------
  //* Задание 5.
  document.getElementById('submit5')?.addEventListener('click',() => {
    const firstInput = (document.getElementById('task5-input1') as HTMLInputElement).value
    const secondInput = (document.getElementById('task5-input2') as HTMLInputElement).value
  
    const firstNumber = parseFloat(firstInput)
    const secondNumber = parseFloat(secondInput)
  
    if(!isNaN(firstNumber) && !isNaN(secondNumber)) {
      const result = firstNumber + secondNumber
      alert(`${result}`)
    } else{
      alert('Введите числа правильно!')
    }
  })
  document.getElementById('submit5_1')?.addEventListener('click',() => {
    const firstInput = (document.getElementById('task5-input1') as HTMLInputElement).value
    const secondInput = (document.getElementById('task5-input2') as HTMLInputElement).value
  
    const firstNumber = parseFloat(firstInput)
    const secondNumber = parseFloat(secondInput)
  
    if(!isNaN(firstNumber) && !isNaN(secondNumber)) {
      const result = firstNumber - secondNumber
      alert(`${result}`)
    } else{
      alert('Введите числа правильно!')
    }
  })
  document.getElementById('submit5_2')?.addEventListener('click',() => {
    const firstInput = (document.getElementById('task5-input1') as HTMLInputElement).value
    const secondInput = (document.getElementById('task5-input2') as HTMLInputElement).value
  
    const firstNumber = parseFloat(firstInput)
    const secondNumber = parseFloat(secondInput)
  
    if(!isNaN(firstNumber) && !isNaN(secondNumber)) {
      const result = firstNumber / secondNumber
      alert(`${result}`)
    } else{
      alert('Введите числа правильно!')
    }
  })
  document.getElementById('submit5_3')?.addEventListener('click',() => {
    const firstInput = (document.getElementById('task5-input1') as HTMLInputElement).value
    const secondInput = (document.getElementById('task5-input2') as HTMLInputElement).value
  
    const firstNumber = parseFloat(firstInput)
    const secondNumber = parseFloat(secondInput)
  
    if(!isNaN(firstNumber) && !isNaN(secondNumber)) {
      const result = firstNumber * secondNumber
      alert(`${result}`)
    } else{
      alert('Введите числа правильно!')
    }
  })
  document.getElementById('submit5_')?.addEventListener('click',() => {
    const firstInput = (document.getElementById('task5-input1') as HTMLInputElement).value
    const secondInput = (document.getElementById('task5-input2') as HTMLInputElement).value
  
    const firstNumber = parseFloat(firstInput)
    const secondNumber = parseFloat(secondInput)
  
    if(!isNaN(firstNumber) && !isNaN(secondNumber)) {
      const result = firstNumber ** secondNumber
      alert(`${result}`)
    } else{
      alert('Введите числа правильно!')
    }
  })
  //!----------------------------------------------------------------------------------------
  //* Задание 6.
  
  document.getElementById('submit6')?.addEventListener('click',() => {
    const firstInput = (document.getElementById('task6-input1') as HTMLInputElement).value
    const secondInput = (document.getElementById('task6-input2') as HTMLInputElement).value
  
    const a = parseFloat(firstInput)
    const b = parseFloat(secondInput)
  
    if(!isNaN(a) && !isNaN(b)) {
      const result = b / a
      alert(`X равен: ${result}`)
    } else{
      alert('Введите числа правильно!')
    }
  })
  //!----------------------------------------------------------------------------------------
  //* Задание 7.
  
  document.getElementById('submit7')?.addEventListener('click',() => {
    const firstInput = (document.getElementById('task7-input1') as HTMLInputElement).value
    const secondInput = (document.getElementById('task7-input2') as HTMLInputElement).value
  
    const firstNumber = 24 - parseFloat(firstInput) 
    const secondNumber = 60 - parseFloat(secondInput)
  
    if(!isNaN(firstNumber) && !isNaN(secondNumber)) {
      alert(`До следующего дня осталось: ${firstNumber} часов и ${secondNumber} минут`)
    } else{
      alert('Введите числа правильно!')
    }
  })
  //!----------------------------------------------------------------------------------------
  //* Задание 8.
  
  document.getElementById('submit8')?.addEventListener('click',() => {
    const task1Input = (document.getElementById('task8-input') as HTMLInputElement).value
    const number = parseFloat(task1Input)
  
    if (!isNaN(number) && task1Input.length === 3) {
        const result =  Math.floor((number % 100) / 10)
        alert(`Вторая цифра вашего числа: ${result}`)
    } else {
        alert('Пожалуйста, введите корректное число.')
    }
  })
  //!----------------------------------------------------------------------------------------
  //* Задание 9.
  
  document.getElementById('submit9')?.addEventListener('click',() => {
    const task1Input = (document.getElementById('task9-input') as HTMLInputElement).value
    const number = parseFloat(task1Input)
  
    if (!isNaN(number) && task1Input.length === 5) {
         const lastDigit = number % 10
         const remainingNumber = Math.floor(number / 10)
         const result= lastDigit * 10000 + remainingNumber
        alert(`Перевернутое число: ${result}`)
    } else {
        alert('Пожалуйста, введите корректное число.')
    }
  })
  //!----------------------------------------------------------------------------------------
  //* Задание 10.
  
  document.getElementById('submit10')?.addEventListener('click',() => {
    const task1Input = (document.getElementById('task10-input') as HTMLInputElement).value
    const TotalSum = parseFloat(task1Input)
    const SALARY = 250
    const PERCENT = 0.1
  
    if (!isNaN(TotalSum)) {
        const result =  SALARY + (TotalSum * PERCENT)
        alert(`Ваша зп: ${result}`)
    } else {
        alert('Пожалуйста, введите корректное число.')
    }
  })