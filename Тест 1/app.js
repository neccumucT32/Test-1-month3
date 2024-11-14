// task 1

const containsOnlyDigits = (str) => {
  return /^\d+$/.test(str);
};

console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));

// task 2

function start() {
  let counter = 1;
  const interval = setInterval(() => {
    console.log("Прошла секунда " + counter);
    counter++;
  }, 1000);
}

start();

// task 3

const count = () => {
  let i = 1;
  const interval = setInterval(() => {
    console.log(i);
    i++;
    if (i > 10) {
      clearInterval(interval);
    }
  }, 1000);
};

count();

// task 4

const block = document.getElementById("block");

block.addEventListener("click", () => {
  block.classList.forEach("bg-color");
});

// task 5

const xhrConsole = new XMLHttpRequest();
xhrConsole.open("GET", "data.json");

xhrConsole.onload = () => {
  if (xhrConsole.status === 200) {
    const result = JSON.parse(xhrConsole.responseText);
    console.log(result);
  }
};

xhrConsole.send();
