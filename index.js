// 1 subtask
const title = document.createElement("h1");
const headerFunc = () => {
    title.textContent = 'Работа с DOM';
    document.body.prepend(title)
    return document.body
}
// console.log(headerFunc())

// 2 subtask
const main = document.getElementById("main")
const a = document.createElement("a")
const mainFunc = () => {
    a.href = " https://dom.spec.whatwg.org/"
    main.append(a)
    return main
}
// console.log(mainFunc());

// 3 subtask
const colorFunc = (color) => {
    document.body.style.backgroundColor = color;
    return document.body
}
// console.log(colorFunc('yellow'))

// 4 subtask
const list = document.getElementById("list")
const li = document.createElement("li")
const textFunc = (text) => {
    li.textContent = text;
    list.append(li);
    return list
}
// console.log(textFunc("maga"));

// 5 subtask
const removeFunc = () => {
    const copyright = document.getElementById("copyright")
    copyright.remove()
    return copyright
}
console.log(removeFunc());