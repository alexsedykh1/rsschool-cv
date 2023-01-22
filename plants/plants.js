/*console.log("Вёрстка валидная +10\nВёрстка семантическая +20\nВёрстка соответствует макету +48\nТребования к css + 12\nИнтерактивность, реализуемая через css +20")*/
/*(function () {
    const header = document.querySelector(".header");
    window.onscroll = () => {
        if(window.pageYOffset > 50){
            
        }
    }
} ());*/

/* Burger hendler*/

    (function () {
        console.log("function ready")
       
       const burgerItem = document.querySelector(".burger");
       const menu = document.querySelector(".header__nav");
       const menuCloseItem = document.querySelector(".header__nav-close");
       console.log(burgerItem)
       burgerItem.addEventListener("click", () => {
           menu.classList.add("header__nav_active");
       });
       menuCloseItem.addEventListener("click", () => {
        menu.classList.remove("header__nav_active");
       })
   }());
  

