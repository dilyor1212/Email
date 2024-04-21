// const  form = document.querySelector('form')
// const name = document.querySelector('.name')
// const number = document.querySelector('.number')

const button = document.querySelector('button');
const nameInput = document.querySelector('.name');
const numberInput = document.querySelector('.number');
const userList = document.getElementById('userList');

const regExName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g







const regExNumber = /^[0-9]{9,9}$/

// form.addEventListener('submit',(e)=> {
//   e.preventDefault()

//   if(regExName.test(name.value) && regExNumber.test(number.value)){
//     box.innerHTML = '<h3>Все Прошло Успешно</h3>'
//     box.style.padding = '20px'

//   } else {


//   }
// })


numberInput.addEventListener('keydown', () => {
  if (regExName.test(numberInput.value)) {
    numberInput.style.borderColor = ' 3px green'
  } else {
    numberInput.style.borderColor = 'red'
  }
})


nameInput.addEventListener('keydown', () => {
  if (regExName.test(nameInput.value)) {
    nameInput.style.borderColor = 'green'
  } else {
    nameInput.style.borderColor = 'red'
  }
})


button.addEventListener('click', function (e) {
  e.preventDefault();

  const name = nameInput.value;
  const number = numberInput.value;

  if (name !== '' && number !== '') {
    const list = document.createElement('li');
    list.textContent = ' Name: ' + name + ', ' + ' Number: ' + number;
 
    userList.style.backgroundColor = 'orangered'
    userList.appendChild(list);

    nameInput.value = '';
    numberInput.value = '';
  } else {
    alert('Пожалуйста, введите ваше имя и номер телефона.');
  }
});

