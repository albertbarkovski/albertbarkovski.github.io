const buttons = document.querySelectorAll(".nav-link");
const contents = document.querySelectorAll(".tab");
const btnContainer = document.querySelector(".nav-container");

// console.log(contents);
// console.log(buttons);
// console.log(btnContainer);

btnContainer.addEventListener("click", (event) => {
  const clickedButtonId = event.target.dataset.id;

  // remove active class for all buttons (reset)
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // remove active class for all contents (reset)
  contents.forEach((content) => {
    content.classList.remove("active");
  });

  // add active class to the clicked button
  event.target.classList.add("active");

  // add active class to content
  const content = document.getElementById(clickedButtonId);
  content.classList.add("active");
});
