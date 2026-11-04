

// menu js

let button = document.querySelectorAll('.filter button')
let bread = document.querySelectorAll('.bread');
let pastry = document.querySelectorAll('.pastry');
let cake = document.querySelectorAll('.cake');
let div = document.querySelectorAll('.products div');


button.forEach(el => {
    if (el.innerText == 'Bread') {
        el.onclick = function () {
            bread.forEach(el => {
                el.style.display = 'block';
            });

            pastry.forEach(el => {
                el.style.display = 'none';
            });

            cake.forEach(el => {
                el.style.display = 'none';
            });

        }
    } else if (el.innerText == 'Cake') {
        el.onclick = function () {
            cake.forEach(el => {
                el.style.display = 'block';
            });

            pastry.forEach(el => {
                el.style.display = 'none';
            });

            bread.forEach(el => {
                el.style.display = 'none';
            });

        }

    }

    else if (el.innerText == 'pastry') {
        el.onclick = function () {
            pastry.forEach(el => {
                el.style.display = 'block';
            });

            bread.forEach(el => {
                el.style.display = 'none';
            });

            cake.forEach(el => {
                el.style.display = 'none';
            });

        }

    }
    else if (el.innerText == 'All') {
        el.onclick = function () {
            pastry.forEach(el => {
                el.style.display = 'block';
            });

            bread.forEach(el => {
                el.style.display = 'block';
            });

            cake.forEach(el => {
                el.style.display = 'block';
            });

        }
    }

});




// read more btn(about us)

let spantext = document.querySelector('#read-more');
let readMoreBtn = document.querySelector('#read-more-btn');
if (readMoreBtn && spantext)
    readMoreBtn.onclick = function () {
        if (spantext.style.display == 'inline') {
            spantext.style.display = 'none';
            readMoreBtn.innerHTML = "Read more..";
        } else {
            spantext.style.display = 'inline';
            readMoreBtn.innerHTML = "Read less..";

        }

    }



// top button

let topbtn = document.querySelector('#top');
if (topbtn) {
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 100) {
            topbtn.style.display = 'block';
        }
        else {
            topbtn.style.display = "none";
        }
    }
    topbtn.onclick = function () {
        window.scrollTo(0, 0)
    }
}

// dark mood - home

let dark = document.querySelector('#dark-mood')
let text1 = document.querySelectorAll('h1,h2,p,nav a');
if (dark) {
    dark.onclick = function () {
        if (dark.innerHTML === "Dark") {
            document.body.style.backgroundColor = 'black'
            document.body.style.color = 'white';
            text1.forEach(el => {
                el.style.color = "white";

            });
            dark.innerHTML = "Light";
        } else {
            document.body.style.backgroundColor = '#F9F5F0'
            dark.innerHTML = "Dark";
            document.body.style.color = '#2D2D2D';
            text1.forEach(el => {
                el.style.color = "#4A2C1D";

            });
        }
    }
}



//contact

const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        validateInputs();
    });
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}


   
const validateInputs = () => {
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const subjectValue = subjectInput.value;
    const messageValue = messageInput.value;

    if (nameValue === '') {
        setError(nameInput, 'Name is required');
    } else if (nameValue.length < 3) {
        setError(nameInput, 'Name must be at least 3 characters');
    } else {
        setSuccess(nameInput);
    }


    if (emailValue === '') {
        setError(emailInput, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(emailInput, 'Provide a valid email');
    } else {
        setSuccess(emailInput);
    }


    if (subjectValue === '') {
        setError(subjectInput, 'Subject is required');
    } else if (subjectValue.length < 3) {
        setError(subjectInput, 'Subject must be at least 3 characters');
    } else {
        setSuccess(subjectInput);
    }


    if (messageValue === '') {
        setError(messageInput, 'Message is required');
    } else if (messageValue.length < 10) {
        setError(messageInput, 'Message must be at least 10 characters');
    } else {
        setSuccess(messageInput);
    }

    if (nameValue && isValidEmail(emailValue) && subjectValue.length >= 3 && messageValue.length >= 10) {
        alert('Message sent successfully!');
        form.reset();

        const inputs = [nameInput, emailInput, subjectInput, messageInput];
        inputs.forEach(input => input.parentElement.classList.remove('success'));
    }
};









