function checkAge() {
    event.preventDefault();
    const input = document.body.querySelector('#alterInput');
    const output = document.body.querySelector('#alterOutput');

    const message = input.value >= 18 ? output.textContent = `Du bist Volljährig` : 
    output.textContent = `Du bist Minderjährig`;

    const classToAdd = input.value >= 18 ? "green" : "red";
    const classToRemove = input.value >= 18 ? "red" : "green";

    output.textContent = message;
    output.classList.add(classToAdd);
    output.classList.remove(classToRemove);
}