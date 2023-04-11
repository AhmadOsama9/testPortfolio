const toggle = document.querySelector('.navbar-toggle');
const nav = document.querySelector('.nav');
const main = document.querySelector('.main');
const nav_links = nav.querySelectorAll('a');
const sections = document.querySelectorAll('section[id]');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  nav.classList.toggle('active');
  main.classList.toggle('active');
});

nav_links.forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('active');
    nav.classList.remove('active');
    main.classList.remove('active');
  });
});

const updateMenu = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    
    sections.forEach((section) => {
      const id = section.getAttribute('id');
      const link = nav.querySelector(`[href="#${id}"]`);
      
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollTop >= sectionTop - windowHeight / 2 && scrollTop < sectionTop + sectionHeight - windowHeight / 2) {
        link.classList.add('active-section');
      } else {
        link.classList.remove('active-section');
      }
    });
  }

document.addEventListener('scroll', () => {
    updateMenu();
});
