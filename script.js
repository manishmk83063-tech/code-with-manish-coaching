
const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav-links");
if(menuBtn) menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));

document.querySelectorAll(".dropdown .dropbtn").forEach(btn=>{
  btn.addEventListener("click",e=>{
    if(window.innerWidth<=850){
      e.preventDefault();
      const m=btn.parentElement.querySelector(".dropdown-menu");
      m.style.display=m.style.display==="block"?"none":"block";
    }
  });
});
document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());

