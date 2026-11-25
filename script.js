function increment() {
    const counter = document.querySelector("#counter");
    const count = Number(counter.textContent.split(": ")[1]);
    counter.textContent = `Click below to increase the counter: ${count + 1}`;
}