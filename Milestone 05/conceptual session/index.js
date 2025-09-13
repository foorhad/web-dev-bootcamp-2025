console.log("console connected");

// const bTn = document.getElementsByClassName("btn");
// console.log(bTn);

// const bTn2 = document.querySelectorAll(".btn");
// console.log(bTn2[1]);

const boxSection = document.querySelector(".box");
const colorsButton = boxSection.querySelectorAll("button");
const colorsh1 = boxSection.querySelector("h1");
// boxSection.style.backgroundColor = "brown";
// colorButton.style.background = "pink";
// colorsButton.classList.add("text-red-600 bg-slate-500");

// colorsButton.style.backgroundColor = "green";
// colorsButton.style.color = "white";

// colorsButton.classList.add("bg-slate-500");
// colorsButton.classList.add("text-yellow-300");

colorsh1.classList.add("text-green-400");

const animalImg = document.getElementById("animals");
animalImg.setAttribute("src", "images/animal.jpg");
animalImg.setAttribute("id", "new-animal-img");
// console.log(findAnimal);

const likeButton = document
  .getElementById("like-button")
  .addEventListener("click", function () {
    const likeCount = document.getElementById("like-cnt");
    console.log(likeCount);
    // const likeCountstr = likeCount.innerText;
    // let likeCountInrement = parseInt(likeCountstr);
    // likeCountInrement++;

    // likeCount.innerText = likeCountInrement;
    // console.log(likeCountInrement);
    // likeButton.setAttribute("disabled", true);
  });
