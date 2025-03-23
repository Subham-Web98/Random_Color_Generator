const button = document.querySelector(".btn");
const colorValue = document.querySelector(".color_value");

const getRandomColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  console.log(randomNumber);
  const randomColor = `#${randomNumber.toString(16)}`;
  console.log(randomColor);
  return randomColor;
};
button.addEventListener("click", () => {
    const color = getRandomColor();
  colorValue.textContent = color;
  document.body.style.backgroundColor = color;
  navigator.clipboard.writeText(color);
});

// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }