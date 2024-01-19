
// Main.js
import React, { useEffect } from 'react';

const Main = () => {
  useEffect(() => {
    // Resize Navbar on Scroll
    const navbar = document.querySelector(".navbar");
    window.onscroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      if (scrollPosition > 20) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };

    // Nav Toggler
    const navMenu = document.querySelector(".menu");
    const navToggle = document.querySelector(".menu-btn");
    if (navToggle) {
      navToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        
        navMenu.classList.add("active");
      
      });

      document.addEventListener("click", function (event) {
     
      
    
        if (!navMenu.contains(event.target) && event.target !== navToggle) {
          navMenu.classList.remove("active");
        }
      });
    }


    

  
   
    
    // Closing menu when link is clicked
    const navLink = document.querySelectorAll(".nav-link");
    function linkAction() {
      const navMenu = document.querySelector(".menu");
      navMenu.classList.remove("active");
    }
    navLink.forEach(n => n.addEventListener("click", linkAction));

    // Scroll Section Active Link
    const Section = document.querySelectorAll('section[id]')
    function scrollActive() {
      const scrollY = window.pageYOffset
      Section.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector('.links a[href*=' + sectionId + ']').classList.add('active')
        } else {
          document.querySelector('.links a[href*=' + sectionId + ']').classList.remove('active')
        }
      })
    }
    window.addEventListener('scroll', scrollActive);

    // Skills Animation
    const skills_wrap = document.querySelector(".about-skills"),
      skills_bar = document.querySelectorAll(".progress-line");
    window.addEventListener("scroll", () => {
      skillsEffect();
    });

    function checkScroll(el) {
      if (el) {
        let rect = el.getBoundingClientRect();
        if (rect) {
          if (window.innerHeight >= rect.top + el.offsetHeight) {
            return true;
          }
        }
      }
      return false;
    }

    function skillsEffect() {
      if (!checkScroll(skills_wrap)) return;
      skills_bar.forEach((skill) => (skill.style.width = skill.dataset.progress));
    }

    // Portfolio Item Filter
    const FilterContainer = document.querySelector(".portfolio-filter"),
      filterBtns = FilterContainer.children;
    const totalFilterBtn = filterBtns.length;
    const PortfolioItems = document.querySelectorAll(".portfolio-item"),
      totalportfolioItem = PortfolioItems.length;

    for (let i = 0; i < totalFilterBtn; i++) {
      filterBtns[i].addEventListener("click", function () {
        FilterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");
        const filterValue = this.getAttribute("data-filter")
        for (let k = 0; k < totalportfolioItem; k++) {
          if (filterValue === PortfolioItems[k].getAttribute("data-category")) {
            PortfolioItems[k].classList.remove("hide");
            PortfolioItems[k].classList.add("show");
          } else {
            PortfolioItems[k].classList.remove("show");
            PortfolioItems[k].classList.add("hide");
          }
          if (filterValue === "all") {
            PortfolioItems[k].classList.remove("hide");
            PortfolioItems[k].classList.add("show");
          }
        }
      })
    }

    
  }, []);

  return <></>; // Composant vide pour le moment
};

export default Main;
