// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
});

// ── Mobile Menu Toggle ────────────────────────────────────────────
var menuBtn = document.querySelector("nav h3");
var overlay = document.getElementById("mobile-menu-overlay");
var closeBtn = document.getElementById("mobile-menu-close");

menuBtn.addEventListener("click", function () {
  overlay.style.display = "flex";
  // Force reflow so transition fires
  overlay.getBoundingClientRect();
  overlay.classList.add("open");
});

closeBtn.addEventListener("click", function () {
  overlay.classList.remove("open");
  // Hide after transition ends
  overlay.addEventListener(
    "transitionend",
    function () {
      if (!overlay.classList.contains("open")) {
        overlay.style.display = "none";
      }
    },
    { once: true }
  );
});

// Close overlay when a nav link is clicked
overlay.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    closeBtn.click();
  });
});

// ── Download Video Button ─────────────────────────────────────────
function downloadVideo(event) {
  event.stopPropagation();

  const video = document.querySelector("video");
  const videoSrc = video.querySelector("source").src;

  const link = document.createElement("a");
  link.href = videoSrc;
  link.download = "video.mp4";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ── Hover Image (desktop only) ────────────────────────────────────
var elemC = document.querySelector(".elems-container");
var fixed = document.querySelector("#fixed-image");

elemC.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
});
elemC.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});

var elems = document.querySelectorAll(".elems-container .elem");
elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var imgSrc = e.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${imgSrc})`;
  });
});

// ── Swiper ────────────────────────────────────────────────────────
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});