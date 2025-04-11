const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const imageContainer = document.getElementById("image-container");

const images = [
  "us.png",
  "sleepy.png",
  "plushie.png"
];

yesBtn.addEventListener("click", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  // Move "Yes" button
  yesBtn.style.position = "absolute";
  yesBtn.style.left = `${x}px`;
  yesBtn.style.top = `${y}px`;

  // Move "No" button to follow "Yes"
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x + 120}px`;
  noBtn.style.top = `${y}px`;

  // Show new image near buttons
  const randomImg = images[Math.floor(Math.random() * images.length)];
  imageContainer.innerHTML = `<img src="${randomImg}" alt="Fun image">`;
  imageContainer.style.position = "absolute";
  imageContainer.style.left = `${x}px`;
  imageContainer.style.top = `${y + 80}px`;
});
