"use strict";
function handleTranslate() {
    const getData = localStorage.getItem("dictionary");
    const dictionary = getData ? JSON.parse(getData) : {};
    const inputElement = document.querySelector("#translate input");
    let translateElement = document.querySelector("#translate-content textarea");
    const valueInput = inputElement.value.toLowerCase().trim();
    for (const key in dictionary) {
        if (valueInput === "") {
            translateElement.value = "nhập từ cần dịch";
            break;
        }
        if (valueInput === key) {
            translateElement.value = dictionary[key];
            break;
        }
        else {
            if (valueInput !== key) {
                translateElement.value = "chưa có bản dịch";
            }
        }
    }
}
function handleDelete() {
    const getData = localStorage.getItem("dictionary");
    const dictionary = getData ? JSON.parse(getData) : {};
    const inputElement = document.querySelector("#translate input");
    const valueInput = inputElement.value.toLowerCase().trim();
    for (const key in dictionary) {
        if (valueInput === key) {
            delete dictionary[key];
            localStorage.setItem("dictionary", JSON.stringify(dictionary));
        }
    }
}
function handleAdd() {
    const getData = localStorage.getItem("dictionary");
    const dictionary = getData ? JSON.parse(getData) : {};
    const inputElement = document.querySelector("#translate input");
    let translateElement = document.querySelector("#translate-content textarea");
    const valueInput = inputElement.value.toLowerCase().trim();
    const valueTranslate = translateElement.value.toLowerCase().trim();
    for (const key in dictionary) {
        if (valueInput !== key) {
            dictionary[valueInput] = valueTranslate;
            localStorage.setItem("dictionary", JSON.stringify(dictionary));
        }
    }
}
