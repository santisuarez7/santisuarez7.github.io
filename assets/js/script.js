'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}



/**
 * cerrar navbar al hacer clic en un link
 */
const navLinks = document.querySelectorAll(".navbar-link");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // quitamos las clases "active" para cerrar el menú
    navToggleBtn.classList.remove("active");
    navbar.classList.remove("active");
    document.body.classList.remove("active");
  });
});


/**
 * Contact form submission
 */
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xanrdzqb", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      status.textContent = "¡Mensaje enviado con éxito!";
      status.className = "form-status success";
      form.reset();

      // borrar status después de 4 segundos
      setTimeout(() => {
        status.textContent = "";
        status.className = "form-status";
      }, 4000);
    } else {
      status.textContent = "Hubo un error al enviar el mensaje.";
      status.className = "form-status error";
    }
  } catch (error) {
    status.textContent = "Error de conexión.";
    status.className = "form-status error";
  }
});



const translations = {
  es: {
    home: "Inicio.",
    about: "Sobre mí.",
    skills: "Skills.",
    portfolio: "Portafolio.",
    contact: "Contacto.",
    formSuccess: "¡Mensaje enviado con éxito!",
    heroTitle: "Santiago Suárez — Analista de Datos Junior / Programador",
    contactMe: "Contactame",
    statGraduado: "Graduado UTN - Técnico en Programación",
    statCertificacion: "Certificación Google - Análisis de Datos",
    statIngles: "Inglés Intermedio",
    aboutSubtitle: "Sobre mí",
    aboutTitle: "Programador recién graduado, iniciando mi carrera en análisis de datos",
    aboutText: "Me recibí como Técnico en Programación en la UTN en 2025 y completé la certificación de Google en Análisis de Datos. Estoy dando mis primeros pasos profesionales, con el objetivo de crecer en el área de data analytics y combinar mis conocimientos de programación con el análisis de información.",
    viewProjects: "Ver proyectos",
    downloadCV: "Descargar CV",
    skillsSubtitle: "Mis skills",
    skillsTitle: "Skills y herramientas",
    skillsText: "Estas son las tecnologías y herramientas que manejo y estoy aprendiendo.",
    skillsBtn: "Skills",
    toolsBtn: "Tools",
    projectsSubtitle: "Mis proyectos",
    projectsTitle: "Algunos de mis trabajos",
    projectsText: "Estos son proyectos académicos y personales que reflejan mi aprendizaje en programación y análisis de datos. Podés ver el código en GitHub y los notebooks en Kaggle.",
    projectRestaurant: "Restauran't",
    projectRestaurantDate: "Noviembre 2025",
    projectClinica: "Clínica Online",
    projectClinicaDate: "Noviembre 2024",
    projectBootcamp: "Bootcamp Data Analytics",
    projectBootcampDate: "Febrero 2025",
    projectCyclistic: "Estudio de Caso: Cyclistic",
    projectCyclisticDate: "Diciembre 2025",
    projectBellabeat: "Estudio de Caso: Bellabeat",
    projectBellabeatDate: "Enero 2026",
    contactSubtitle: "Contacto",
    contactTitle: "¿Querés ponerte en contacto conmigo?",
    contactText: "Si tenés una propuesta podés completar el formulario o usar los medios de contacto que figuran abajo.",
    contactPhones: "Teléfonos:",
    formNameLabel: "Nombre",
    formNamePlaceholder: "ej. Juan Gómez",
    formEmailLabel: "Email",
    formEmailPlaceholder: "ej. juangomez@mail.com",
    formPhoneLabel: "Teléfono",
    formPhonePlaceholder: "Número telefónico",
    formMessageLabel: "Mensaje",
    formSubmit: "Enviar",
    formSuccess: "¡Mensaje enviado con éxito!",
    formError: "Hubo un error al enviar el mensaje.",
    formConnectionError: "Error de conexión."
  },
  en: {
    home: "Home.",
    about: "About me.",
    skills: "Skills.",
    portfolio: "Portfolio.",
    contact: "Contact.",
    formSuccess: "Message sent successfully!",
    heroTitle: "Santiago Suárez — Junior Data Analyst / Programmer",
    contactMe: "Contact me",
    statGraduado: "UTN Graduate - Programming Technician",
    statCertificacion: "Google Certification - Data Analysis",
    statIngles: "English Intermediate",
    aboutSubtitle: "About me",
    aboutTitle: "Recently graduated programmer, starting my career in data analysis",
    aboutText: "I graduated as a Programming Technician at UTN in 2025 and completed the Google Data Analytics certification. I am taking my first professional steps, aiming to grow in the field of data analytics and combine my programming knowledge with information analysis.",
    viewProjects: "View projects",
    downloadCV: "Download CV",
    skillsSubtitle: "My skills",
    skillsTitle: "Skills and tools",
    skillsText: "These are the technologies and tools I use and am learning.",
    skillsBtn: "Skills",
    toolsBtn: "Tools",
    projectsSubtitle: "My projects",
    projectsTitle: "Some of my work",
    projectsText: "These are academic and personal projects that reflect my learning in programming and data analysis. You can see the code on GitHub and the notebooks on Kaggle.",
    projectRestaurant: "Restauran't",
    projectRestaurantDate: "November 2025",
    projectClinica: "Online Clinic",
    projectClinicaDate: "November 2024",
    projectBootcamp: "Data Analytics Bootcamp",
    projectBootcampDate: "February 2025",
    projectCyclistic: "Case Study: Cyclistic",
    projectCyclisticDate: "December 2025",
    projectBellabeat: "Case Study: Bellabeat",
    projectBellabeatDate: "January 2026",
    contactSubtitle: "Contact",
    contactTitle: "Do you want to get in touch with me?",
    contactText: "If you have a proposal you can fill out the form or use the contact details below.",
    contactPhones: "Phones:",
    formNameLabel: "Name",
    formNamePlaceholder: "e.g. John Smith",
    formEmailLabel: "Email",
    formEmailPlaceholder: "e.g. johnsmith@mail.com",
    formPhoneLabel: "Phone",
    formPhonePlaceholder: "Phone number",
    formMessageLabel: "Message",
    formSubmit: "Send",
    formSuccess: "Message sent successfully!",
    formError: "There was an error sending the message.",
    formConnectionError: "Connection error."
  }
};



/** * Language selector
 */
const langSelector = document.getElementById("lang");

langSelector.addEventListener("change", () => {
  const selectedLang = langSelector.value;
  const elements = document.querySelectorAll("[data-key]");

  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    const translation = translations[selectedLang][key];

    //input placeholder
    if (el.tagName === "INPUT") {
      el.placeholder = translation;
    } else {
      el.textContent = translation;
    }
  });
});


// Apply translations on initial load
window.addEventListener("DOMContentLoaded", () => {
  const selectedLang = langSelector.value;
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[selectedLang][key];
  });
});
