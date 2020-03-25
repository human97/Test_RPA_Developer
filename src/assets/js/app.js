// №1 функция сортировки числовых значений
const array = [7, 0, 9, 4, 8, 1, 6, 2, 5, 3]

const sortFunction = (arr, mode) => arr.sort((a, b) => mode ? a - b : b - a)

console.log(sortFunction(array, false))

// №3 web-форму для отправки контактных данных
const contactForm = document.getElementById('contact_form')
const inpRule = contactForm.querySelectorAll('input[data-rule]'); // получил все input data-rule
let check; // регулярное выражение
const inputName = contactForm.querySelector('.name')
const inputTel = contactForm.querySelector('.tel')
const comment = contactForm.querySelector('.textarea')
const btnSubmit = contactForm.querySelector('.contact_form--btn')

// проверка
function validation() {
    let rule = this.dataset.rule
    let value = this.value

    switch (rule) {
        case 'name':
            check = /\D/.test(value) // регулярка для имени
            break;
        case 'number':
            check = /^[\+|\-]?\d+$/.test(value) // регулярка для номера
            break;
    }

    contactForm.classList.remove('invalid');
    this.classList.remove('invalid')
    this.classList.remove('valid')

    if (check) {
        this.classList.add('valid')
    } else {
        this.classList.add('invalid')
    }
}


for (let input of inpRule) {
    input.addEventListener('input', validation)
}


btnSubmit.addEventListener('click', function (e) {
    e.preventDefault()
    let name = inputName.value.trim()
    let tel = inputTel.value.trim()
    let text = comment.value.trim()

    if (check && name !== '' && tel !== '') {
        inputName.classList.remove('invalid');
        inputName.classList.remove('valid');
        inputTel.classList.remove('invalid');
        inputTel.classList.remove('valid');
        contactForm.classList.remove('invalid');
        inputName.value = '';
        inputTel.value = '';
    } else {
        contactForm.classList.add('invalid');
    }
})