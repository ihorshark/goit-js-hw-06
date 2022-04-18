const loginFormRef = document.querySelector('.login-form');

loginFormRef.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const {
    elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all fields!");
    }

    console.log(`Login: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}
