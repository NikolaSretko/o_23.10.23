function passProf() {
    event.preventDefault();
    const input = document.body.querySelector('#inputPass');
    const output = document.body.querySelector('#outputSafe');
    const text = input.value

    const message = text.length >= 8 ? "Welcome back!" : "Password is too short!";
    const classToAdd = text.length >= 8 ? "green" : "red";
    const classToRemove = text.length >= 8 ? "red" : "green";

    output.textContent = message;
    output.classList.add(classToAdd);
    output.classList.remove(classToRemove);
}