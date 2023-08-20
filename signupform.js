const pass1 = document.getElementById("user_password1");
const pass2 = document.getElementById("user_password2");



const createbtn = document.querySelector('#createbtn');
createbtn.addEventListener('click', function (e) {
    if (pass1.value != pass2.value)
    {
        pass1.style.border = '2px solid red';
        pass1.style.borderRadius = '2px';
        pass2.style.border = '2px solid red';
        pass2.style.borderRadius = '2px';
    }
    else 
    {
        pass1.style.border = '2px solid green';
        pass2.style.border = '2px solid green';
        pass1.style.borderRadius = '2px';
        pass2.style.borderRadius = '2px';
    }
});