const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const imageContainer = document.getElementById("image-container");

const images = [
  "us.png",
  "sleepy.png",
  "swing.png"
];

noBtn.addEventListener("click", () => {
  const randomImg = images[Math.floor(Math.random() * images.length)];
  imageContainer.innerHTML = `<img src="${randomImg}" alt="Sad image">`;
});

yesBtn.addEventListener("mouseover", () => {
  yesBtn.style.position = "absolute";
  yesBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
  yesBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";

  const randomImg = images[Math.floor(Math.random() * images.length)];
  imageContainer.innerHTML = `<img src="${randomImg}" alt="Happy image">`;
});
