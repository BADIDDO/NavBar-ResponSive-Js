const show = () => {
    let btn = document.querySelector(".icon");
    let nav = document.querySelector(".links");

    btn.addEventListener("click" , () => {
        
        nav.classList.toggle("show");
    })
}
 
show();


