const myObj = {
    name: 'Punit',
    age: 25,
    email: 'itzpunitmehta@gmail.com'
};

const jsonMyObj = JSON.stringify(myObj);

localStorage.setItem('userDetails',jsonMyObj);
const NotJsonMyobj = JSON.parse(localStorage.getItem('userDetails'));
console.log(NotJsonMyobj);