
document.getElementById("menu-icon").addEventListener("click", ()=>{
  document.getElementById("menu-list").classList.toggle("mena")
  document.querySelectorAll("#menu-list li").forEach(item => {
    item.addEventListener("click", () => {
      document.getElementById("menu-list").classList.remove("mena");
    });
  });
});



