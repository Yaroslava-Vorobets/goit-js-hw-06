
const formRef = document.querySelector('.login-form');
console.log(formRef);

const subhandler = (event) => {
    event.preventDefault(); 
    //console.log(event.currentTarget.elements.name.value);

    const {
    elements: {email, password }
    } = event.currentTarget;    
   
    if (email.value === '' || password.value === ''){
    alert('Заповніть всі поля!');
    return;
  } 
  const object = { 
    email: email.value,
    password: password.value,
  }
  console.log(object);
  formRef.reset();
  }
    


formRef.addEventListener('submit', subhandler); 


 