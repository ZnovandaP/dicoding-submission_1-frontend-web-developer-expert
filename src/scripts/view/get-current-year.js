const yearText = document.querySelectorAll('.year')
const date = new Date();
const getCurrentYear = date.getFullYear()

yearText.forEach(text => {
  text.textContent = getCurrentYear;
})