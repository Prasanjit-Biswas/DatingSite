let menu_btn = document.querySelector('.menu-icon');
let menu = document.querySelector('.menu');

// function myFunction() {


//     menu_btn.onClick = menu.classList.add("active");
//     if(menu_btn == active){
//         menu_btn.onClick = menu.classList.remove("active");
//     }
   
// }
$(document).ready(function () {
    $(menu_btn).click(function () {
        $(menu).toggleClass('active')
    });
});

$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
           $('.itemBox').show('1000');

        }else{
            $('.itemBox').not('.'+value).hide('1000');
            $('.itemBox').filter('.'+value).show('1000');

        }
    })
})