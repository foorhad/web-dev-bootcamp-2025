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
    const likeCountstr = likeCount.innerText;
    let likeCountInrement = parseInt(likeCountstr);
    likeCountInrement++;

    likeCount.innerText = likeCountInrement;
    // console.log(likeCountInrement);
    // likeButton.setAttribute("disabled", true);
  });
const contentSectionMar = document.getElementById("txt-box");
contentSectionMar.style.marginBottom = "10px";
document.getElementById("cmnt-btn").addEventListener("click", function () {
  // pick parent
  const parentSection = document.getElementById("cmnt-box");

  // pick content
  const contentSection = document.getElementById("txt-box");
  const conTent = contentSection.value;

  // create tag when keep the comment
  const pTag = document.createElement("p");
  pTag.innerText = conTent;

  pTag.addEventListener("click", function () {
    pTag.remove();
  });

  parentSection.append(pTag);
  // console.log(contentSection);

  // add style to the tag
  pTag.style.backgroundColor = "green";
  pTag.style.color = "white";
  pTag.style.border = "2px";
  pTag.style.borderRadius = "5px";
  pTag.style.padding = "10px";
  pTag.style.marginBottom = "5px";

  // clean comment box after comment
  contentSection.value = "";
});

const shareSection = document.getElementById("share-btn");
shareSection.addEventListener("click", function () {
  console.log("Share button");
});
const parentsSection = document.getElementById("parent-sec");
shareSection.addEventListener("click", function () {
  console.log("Parent section");
});
const bodySection = document.getElementById("body-section");
shareSection.addEventListener("click", function () {
  console.log("body section");
});
