// the moving cursor
let cursorDot = document.querySelector("#cursor-dot");

document.addEventListener("mousemove", function (dets) {
  cursorDot.style.left = dets.x - 6 + "px";
  cursorDot.style.top = dets.y - 4 + "px";
});

let cursorBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  cursorBlur.style.left = dets.x - 50 + "px";
  cursorBlur.style.top = dets.y - 50 + "px";
});
// toggle icon nav bar in mobile
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
  // it will convert the menu icon into a cross icon in mobiles
};

// updating the navbar's current postiton

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
      });

      // Select the appropriate navigation link using the concatenated id
      document
        .querySelector('header nav a[href="#' + id + '"]')
        .classList.add("active");
    }
  });
  let header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 100);
  });

  // remove toggle icon and nav bar when clicked in mobile
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal

// Initialize ScrollReveal with options
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: "2000",
  delay: "200",
});

// Apply scroll animations to specific elements
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img , .services-container,services-box, .project-box , .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content, h1 , .about-img ", { origin: "left" });
ScrollReveal().reveal(".home-content p , .about-content  ", {
  origin: "right",
});

// typed js
const typed = new Typed(".multiple-text", {
  strings: ["Meta | Google Certified "," Front  End Developer",  "Skilled in React JS","Git/GitHub ","Advancing in MERN "],
  typeSpeed: 10,
  backSpeed: 10,
  typeDelay: 2050,
  loop: true,
});

// socialmedia icons

// let facebook1= document.querySelector('.facebook')
// facebook1.addEventListener('click',()=>{

//     window.open=('https://www.facebook.com/raofahad.gul' , '_blank')
//     // console.log("fb triggered")
// })

let github = document.querySelector(".github");
github.addEventListener("click", () => {
  window.open("https://github.com/dev-rfgul", "_blank");
  console.log("fb triggered");
});
let instagram = document.querySelector(".instagram");
instagram.addEventListener("click", () => {
  window.open("https://www.instagram.com/real_rf_gul/", "_blank");
  console.log("fb triggered");
});
let twitter = document.querySelector(".twitter");
twitter.addEventListener("click", () => {
  window.open("https://twitter.com/rfgul785", "_blank");
  console.log("fb triggered");
});
let linkedin = document.querySelector(".linkedin");
linkedin.addEventListener("click", () => {
  window.open(
    "https://www.linkedin.com/in/muhammadfahad785/",
    "_blank"
  );
  console.log("fb triggered");
});
// let developer = document.querySelector(".developer");
// developer.addEventListener("click", () => {
//   window.open("https://rfgul785.netlify.app/", "_blank");
//   console.log("developer site triggered");
// });
document.addEventListener("DOMContentLoaded", () => {
    let developer = document.querySelector(".developer");
    developer.addEventListener("click", () => {
      window.open("#", "_blank");
      console.log("developer site triggered");
    });
  });
  let sign=document.querySelector('.sign')
  sign.addEventListener('click',()=>{
    window.open("#", "_blank");
    console.log("developer site triggered");

  })