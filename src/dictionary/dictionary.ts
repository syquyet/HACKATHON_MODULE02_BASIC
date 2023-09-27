type Dictionary = { [key: string]: string };
const dictionaryData: Dictionary = {
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
