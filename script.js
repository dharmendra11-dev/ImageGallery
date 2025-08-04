
const images = Array.from(document.querySelectorAll(".image-box img")).map(img => img.src);
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  document.getElementById("lightbox-img").src = images[currentIndex];
  document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  document.getElementById("lightbox-img").src = images[currentIndex];
}

function filterImages(category) {
  const boxes = document.querySelectorAll(".image-box");
  boxes.forEach((box) => {
    if (category === "all" || box.classList.contains(category)) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
}

// Add event listeners to open lightbox on click
document.querySelectorAll(".image-box img").forEach((img, index) => {
  img.addEventListener("click", () => openLightbox(index));
});

// Event listeners for lightbox controls
document.getElementById("closeBtn").addEventListener("click", closeLightbox);
document.getElementById("prevBtn").addEventListener("click", () => changeImage(-1));
document.getElementById("nextBtn").addEventListener("click", () => changeImage(1));

// Optional: close lightbox on background click
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") closeLightbox();
});
