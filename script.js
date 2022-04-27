const Name = document.getElementById("name");
const email = document.getElementById("email");
const pHno = document.getElementById("PhoneNumber");
let validName = false;
let validEmail = false;
let validPh = false;


Name.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]([\s0-9a-zA-Z]){0,20}$/;
    let str = Name.value;

    if (regex.test(str)) {
        Name.classList.remove('is-invalid');
        validName = true;

    }
    else {
        Name.classList.add('is-invalid');
        validName = false;
    }

})
email.addEventListener('blur', () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-1a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;

    if (regex.test(str)) {
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        email.classList.add('is-invalid');
        validEmail = false;
    }


})
pHno.addEventListener('blur', () => {
    let regex = /^([0-9]){10}$/;
    let str = pHno.value;

    if (regex.test(str)) {
        pHno.classList.remove('is-invalid');
        validPh = true;
    }
    else {
        pHno.classList.add('is-invalid');
        validPh = false;

    }

})

let submit = document.getElementById("submit");
submit.addEventListener('click', (e) => {
    e.preventDefault();
    let faliure = document.getElementById("faliure");

    if (validName && validEmail && validPh) {

        let success = document.getElementById("success");

        success.classList.add('show');
        success.style.display = 'block'
        setInterval(() => {
            success.style.display = 'none'
        }, 4000);


    } else {
        let faliure = document.getElementById("faliure");
        faliure.classList.add('show');
        faliure.style.display = 'block';
        setInterval(() => {
            faliure.style.display = 'none'
        }, 4000);

    }
})