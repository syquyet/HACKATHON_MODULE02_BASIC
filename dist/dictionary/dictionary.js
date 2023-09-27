"use strict";
const dictionaryData = {
    dog: "chó",
    cat: "mèo",
    pig: "heo",
    chiken: "gà",
    tiger: "hổ",
    elephants: "voi",
    fish: "cá",
};
if (!localStorage.getItem("dictionary")) {
    localStorage.setItem("dictionary", JSON.stringify(dictionaryData));
}
