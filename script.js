"use strict";

import projects from "./projects.js";

// Create the hovering effect on the navlinks
const navContainerEl = document.querySelector(".nav-container");
let underline;

navContainerEl.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("nav-btn")) {
        underline = RoughNotation.annotate(e.target, { type: 'underline', color: '#FB2576' });
        underline.show();
    }
})

navContainerEl.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("nav-btn")) {
        underline.remove();
    }
})

// Links scrolling and the active key
navContainerEl.addEventListener("click", (e) => {
  if (e.target.textContent === "Experience") {
    document.querySelector(".work-experience").scrollIntoView({behavior:"smooth"});
  } else if (e.target.textContent === "Skills") {
    document.querySelector(".skills").scrollIntoView({behavior:"smooth"});
  } else if (e.target.textContent === "Projects") {
    document.querySelector(".projects").scrollIntoView({behavior:"smooth"});
  } else if (e.target.textContent === "Contact") {
    document.querySelector(".contact").scrollIntoView({behavior:"smooth"});
  }
})

// sidebar navigation
$(document).ready(function(){
  $('.sidenav').sidenav();
});

// sidebar navigation
document.querySelector("#mobile-demo").addEventListener("click", (e) => {
  if (e.target.textContent === "Experience") {
    document.querySelector(".work-experience").scrollIntoView({behavior:"smooth"});
  } else if (e.target.textContent === "Skills") {
    document.querySelector(".skills").scrollIntoView({behavior:"smooth"});
  } else if (e.target.textContent === "Projects") {
    document.querySelector(".projects").scrollIntoView({behavior:"smooth"});
  } else if (e.target.textContent === "Contact") {
    document.querySelector(".contact").scrollIntoView({behavior:"smooth"});
  }
})

// sticky navigation
const nav = document.querySelector("nav");
///////////////////////////////////////
// Sticky navigation: Intersection Observer API

const hero = document.querySelector('.hero');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('--sticky');
    nav.classList.add("fixed-top");
  }
  else {
    nav.classList.remove('--sticky');
    nav.classList.remove("fixed-top");
}
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(hero);






// animate landing page
gsap.from('.hero-p', {opacity: 0, duration: 1, y:-50, stagger: 0.6});

// the about us buttons
document.querySelector(".view-work").addEventListener("click", (e) => {
  document.querySelector(".projects").scrollIntoView({behavior:"smooth"});
})

// initialize animate on scroll
AOS.init();

// underline headings
const headings = document.querySelectorAll('.headings');
headings.forEach(heading =>{
    const annotation = RoughNotation.annotate(heading, { type: 'underline', color: '#FB2576' });
    annotation.show();
})



const projectContainer = document.querySelector(".project-container");
// add projects to screen
projects.forEach(project => {

  let languages = "";
  project.languages.forEach(lang => {
    languages += `<img src="images/${lang}" />`;
  })

  const output = `
  <div class="col s12 m4 l3" style="margin-top:2rem" data-aos="flip-up" data-aos-duration="1500">
    <div class="project" >
        <div class="project-img">
          <img src="${'images' + '/' + project.img }" alt="${project.name}" >
          <div class="project-links">
              <button class="view" data-id="${project.id}"><i class="fa-solid fa-eye"></i></button>
              <a href="${project.github}" class="view-github" title='view on github'><i class="fa-brands fa-github"></i></a>
          </div>
          <div class="img-overlay"></div>
        </div>
        <h6 class="project-name">
          ${project.name}
        </h6>
        <div class="languages">
          ${languages}
        </div>
    </div>
  </div>
`
projectContainer.insertAdjacentHTML("beforeend", output);

})

// projects sections
const projectImg = document.querySelectorAll(".project-img");

// hovering of the img
projectImg.forEach(img => {
  img.addEventListener("mouseover", (e) => {
    e.currentTarget.querySelector(".img-overlay").classList.add("visible");
    e.currentTarget.querySelector(".project-links").classList.add("visible");
  })
})

projectImg.forEach(img => {
  img.addEventListener("mouseout", (e) => {
    e.currentTarget.querySelector(".img-overlay").classList.remove("visible");
    e.currentTarget.querySelector(".project-links").classList.remove("visible");
  })
})

// open appropriate modal
const projectLinks = document.querySelectorAll(".view");
const modal = document.querySelector(".--modal");
const modalOverlay = document.querySelector(".--modal-overlay");

projectLinks.forEach(view => {
  view.addEventListener("click", () => {
    const which = view.dataset.id;

    const project = projects.find(project => project.id === Number(which));
    modal.innerHTML = "";

    const output = `
      <div class="--modal-header">
        <h3>${project.name}</h3>
        <div class="--close">
            <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div class="--modal-content">
        <div class="row">
          <div class="col s12 m6 ">
            <div class = "--modal-left">
              ${project.details}          
              <a href="${project.github}" class="goto-gh"><i class="fa-brands fa-github"></i> Github</a>
            </div>
          </div>
          <div class="col s12 m6 ">
            <div class="--modal-img">
              <img src="images/${project.img}" alt="${project.name}">
            </div>
                        
          </div>
        </div>
      </div>
    `;
    modal.insertAdjacentHTML("beforeend", output);
    modalOverlay.classList.add("visible");
    modal.classList.add("visible");


  })
})

// close the modal
modalOverlay.addEventListener("click", ()=> {
  modal.classList.remove("visible");
  modalOverlay.classList.remove("visible");
})

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("--close") || e.target.classList.contains("fa-solid")) {
    modal.classList.remove("visible");
    modalOverlay.classList.remove("visible");
  }
})




// Typewriter in the contact us page
let typed = new Typed('.message-label', {
  strings: [ "Type message here", "Get in touch",  "Lets Collaborate"],
  typeSpeed: 100,
  loop: true,
  backSpeed: 100,
});

// form elements
const emailEl = document.getElementById("email");
const subjectEl = document.querySelector("#subject");
const messageEL = document.querySelector("#message")
const sendBtn = document.querySelector('.send-message');

// email validation
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

emailEl.addEventListener("blur", ()=> {
  if (!validateEmail(emailEl.value)) {
    emailEl.classList.add("error-input");
  }
})

