// hiển thị bản dịch

function handleTranslate() {
  const getData = localStorage.getItem("dictionary");
  const dictionary = getData ? JSON.parse(getData) : {};
  const inputElement = document.querySelector(
    "#translate input"
  ) as HTMLInputElement;
  let translateElement = document.querySelector(
    "#translate-content textarea"
  ) as HTMLTextAreaElement;
  const valueInput = inputElement.value.toLowerCase().trim();
  for (const key in dictionary) {
    if (valueInput === "") {
      translateElement.value = "nhập từ cần dịch";
      break;
    }
    if (valueInput === key) {
      translateElement.value = dictionary[key];
      break;
    } else {
      if (valueInput !== key) {
        translateElement.value = "chưa có bản dịch";
      }
    }
  }
}
// xóa dữ liệu trong từ điển
function handleDelete() {
  const getData = localStorage.getItem("dictionary");
  const dictionary = getData ? JSON.parse(getData) : {};
  const inputElement = document.querySelector(
    "#translate input"
  ) as HTMLInputElement;
  const valueInput = inputElement.value.toLowerCase().trim();
  for (const key in dictionary) {
    if (valueInput === key) {
      delete dictionary[key];
      localStorage.setItem("dictionary", JSON.stringify(dictionary));
    }
  }
}
// thêm từ điển
function handleAdd() {
  const getData = localStorage.getItem("dictionary");
  const dictionary = getData ? JSON.parse(getData) : {};
  const inputElement = document.querySelector(
    "#translate input"
  ) as HTMLInputElement;
  let translateElement = document.querySelector(
    "#translate-content textarea"
  ) as HTMLTextAreaElement;
  const valueInput = inputElement.value.toLowerCase().trim();
  const valueTranslate = translateElement.value.toLowerCase().trim();
  for (const key in dictionary) {
    if (valueInput !== key) {
      dictionary[valueInput] = valueTranslate;
      localStorage.setItem("dictionary", JSON.stringify(dictionary));
    }
  }
}
// sửa từ điển 
