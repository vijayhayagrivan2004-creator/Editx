const links = document.querySelectorAll("nav a");
const pages = document.querySelectorAll(".page");

links.forEach(link=>{
  link.addEventListener("click", e=>{
    e.preventDefault();

    const target = link.getAttribute("href");

    pages.forEach(p=>p.classList.remove("active"));

    document.querySelector(target).classList.add("active");
  });
});