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

// select the sections
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