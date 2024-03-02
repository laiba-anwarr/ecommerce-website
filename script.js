const bar=document.getElementById("bar");
const navbar= document.getElementById("nav-bar");
const cancel=document.getElementById("cancel");
if(bar){
bar.addEventListener("click", () => {
navbar.classList.add('active');
})
}
if(cancel){
   cancel.addEventListener("click", () => {
    navbar.classList.remove('active');
    })
}

// ============== contact.html =============


