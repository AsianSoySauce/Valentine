const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const imageContainer = document.getElementById("image-container");

const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg"
];

yesBtn.addEventListener("click", () => {
  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 150);

  // Move "Yes" button
  yesBtn.style.left = `${x}px`;
  yesBtn.style.top = `${y}px`;

  // Move "No" button to follow
  noBtn.style.left = `${x + 120}px`;
  noBtn.style.top = `${y}px`;

  // Show image nearby
  const randomImg = images[Math.floor(Math.random() * images.length)];
  imageContainer.innerHTML = `<img src="${randomImg}" alt="Image">`;
  imageContainer.style.left = `${x}px`;
  imageContainer.style.top = `${y + 80}px`;
});
