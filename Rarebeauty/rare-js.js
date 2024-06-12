// <------ Self-Validating Form ------>

const form = document.getElementById('form');
const Name = document.getElementById('Name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address')
const city = document.getElementById('city');
const country = document.getElementById('country');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});
 
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function isValidName(Name) {
    return /^[A-Za-z\s]+$/.test(Name);
  }
  
  function isValidPhone(phone) {
    return /^[0-9]+$/.test(phone);
  }

const validateInputs = () => {
    const NameValue = Name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const addressValue = address.value.trim();
    const cityValue = city.value.trim();
    const countryValue = country.value.trim();

    if(NameValue === '') {
        setError(Name, 'Username is required');
    } 
    else if (!isValidName(NameValue)) {
        setError(Name, 'Enter a valid name');
    }
    else {
        setSuccess(Name);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } 
    else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } 
    else {
        setSuccess(email);
    }

    if (phoneValue === '') {
        setError(phone, 'Phone number is required');
    }
    else if (!isValidPhone(phoneValue)) {
        setError(phone, 'Enter a valid phone number');
    }
    else {
        setSuccess(phone);
    }

    if (addressValue === '') {
        setError(address, 'Address is required');
    }
    else {
        setSuccess(address);
    }

    if (cityValue === '') {
        setError(city, 'City is required');
    }
    else {
        setSuccess(city);
    }

    if (countryValue === '') {
        setError(country, 'Country is required')
    }
    else {
        setSuccess(country);
    }
};

// <------ Self-Correcting Quiz ------>

const quizForm = document.getElementById('quizForm');

quizForm.addEventListener('submit', e => {
    e.preventDefault();

    const answers = {
        question1: document.getElementById('question1').value,
        question2: document.getElementById('question2').value,
        question3: document.getElementById('question3').value,
    };

    let correctCount = 0;

    if (answers.question1 === 'skincare') {
        correctCount++;
    }

    if (answers.question2 === 'manicure') {
        correctCount++;
    }

    if (answers.question3 === 'loreal') {
        correctCount++;
    }

    const result = document.getElementById('quizResult');
    result.textContent = `You got ${correctCount} out of 3 questions correct.`;
});