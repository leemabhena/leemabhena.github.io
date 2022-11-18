"strict";

const nav = document.querySelector("nav");
///////////////////////////////////////
// Sticky navigation: Intersection Observer API

const header = document.querySelector('#header');
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

headerObserver.observe(header);

///////////////////////////////////////
// Hovering effects
const handleHover = function (e) {
    if (e.target.classList.contains('nav-link')) {
      const link = e.target;

      const siblings = link.closest('nav').querySelectorAll('.nav-link');
      const logo = link.closest('nav').querySelector('img');
      
      siblings.forEach(el => {
        if (el !== link) el.style.opacity = this;
      });
      logo.style.opacity = this;
    }
  };
  
  // Passing "argument" into handler
  nav.addEventListener('mouseover', handleHover.bind(0.5));
  nav.addEventListener('mouseout', handleHover.bind(1));
  
///////////////////////////////////////
// Show elements on scroll : Intersection Observer API

const sectionRevealer = function(entries, observer) {
  // grab the entry
  const [entry] = entries;
  // if not being intersected dont reveal
  if (!entry.isIntersecting) return;
  // make the sections visible and unobserve them
  entry.target.classList.remove("--section-hidden");
  observer.unobserve(entry.target);
}


sectionObserver = new IntersectionObserver(sectionRevealer, {
  root: null,
  threshold: 0.15,
})

// // select the sections
sections = document.querySelectorAll("section");

// make sections invisible, a
sections.forEach(section => {
  // observe the section and hide
  sectionObserver.observe(section);
  section.classList.add('--section-hidden');
})


// reach out button
btnReachOut = document.querySelector(".--reach-out");
footer = document.querySelector("footer");
btnReachOut.addEventListener("click", e => {
  footer.scrollIntoView({behavior:"smooth"});
})


///////////////////////////////////////
// Projects section
const imageHoverEls = document.querySelectorAll(".img-hover");

// Create the hover effect
imageHoverEls.forEach((el) => {
  const which = el.dataset.which;
  hoverEffect(el,which);

})


function hoverEffect(element, which) {
  const imgOverlay = document.querySelector(`[data-which*='${which}'] .img-overlay`);
  const viewEl = document.querySelector(`[data-which*='${which}'] .view`);
  // add classes listener on mouse enter
  element.addEventListener("mouseover", ()=> {
  imgOverlay.classList.add("visible");
  viewEl.classList.add("visible");
  // add click event to preview
  const previewEl = element.querySelector(".see");
  const projectInfo = document.querySelector(`.project-${which}`);
  previewEl.addEventListener("click", () => {
    projectInfo.classList.add("visible");
  })
  // close 
  const closeEl = projectInfo.querySelector(".close");
  // Hide the modal
  closeEl.addEventListener("click", ()=> {
    projectInfo.classList.remove("visible");
  })
})
// remove classes on mouse leave
  element.addEventListener("mouseout", ()=> {
  imgOverlay.classList.remove("visible");
  viewEl.classList.remove("visible");
})
}

