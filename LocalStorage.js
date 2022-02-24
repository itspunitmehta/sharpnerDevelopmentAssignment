const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all the details!!'

        setTimeout(() => msg.remove(), 3000);
    }else{
        const myObj = {
            name: nameInput.value,
            email: emailInput.value
        };
        
        const jsonMyObj = JSON.stringify(myObj);
        
        localStorage.setItem(myObj.email,jsonMyObj);
        const NotJsonMyobj = JSON.parse(localStorage.getItem(myObj.email));
        console.log(NotJsonMyobj);


        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${myObj.name} :
        ${myObj.email}`))
        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
}
