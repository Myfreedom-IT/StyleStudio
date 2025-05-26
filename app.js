const btn = document.querySelector(".mob-menu")
const modal = document.querySelector(".showcase")

btn.addEventListener("click", () => {
    modal.style.display = "block"
})
document.addEventListener("click", (event) => {
    if (!event.target.closest(".showcase") && !event.target.closest(".mob-menu")) {
        modal.style.display = "none";
    }
})

const tabs = document.querySelectorAll(".tab");
 const style = document.querySelectorAll(".style");

  tabs.forEach(tab => { tab.addEventListener("click", () => { tabs.forEach(t => t.classList.remove("active"));

     style.forEach(c => c.classList.remove("active")); tab.classList.add("active");
     
     document.getElementById(tab.dataset.category).classList.add("active"); }); })