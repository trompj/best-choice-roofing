
//
// let currentImageContainer = document.getElementById("imageContainer3");
//
// let carouselTimer = window.setInterval(carousel, 7000);
//
// $(window).on('resize', function() {
// });
//
// $(window).on('load', function() {
//     let val = 5;
// });
//
//
//
// // $( window ).resize(function() {
// //     let container_width = $('#flex-container-main').width();
// //     $('#flex-container-main').html('<div class="fb-page" data-href="https://www.facebook.com/facebook" data-width="' + container_width + '" data-height="250" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/facebook"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div></div>');
// //     FB.XFBML.parse();
// // });
// // (function($){
// //     let a = null;
// //     $(window).resize(function(){
// //         if(a != null) {
// //             clearTimeout(a);
// //         }
// //
// //         a = setTimeout(function(){
// //             FB.XFBML.parse();
// //         },1000)
// //     })
// // })(jQuery);
//
//
// //Loops through photo set until program ends.
// function carousel() {
//      currentImageContainer.style.display = "none";
//
//     if (currentImageContainer.id === "imageContainer1") {
//         currentImageContainer = document.getElementById("imageContainer2");
//     }
//     else if (currentImageContainer.id === "imageContainer2") {
//         currentImageContainer = document.getElementById("imageContainer3");
//     }
//     else {
//         currentImageContainer = document.getElementById("imageContainer1");
//     }
//
//     currentImageContainer.style.display = "inline";
// }
//
// function cycleImageNext() {
//     currentImageContainer.style.display = "none";
//
//     if (currentImageContainer.id === "imageContainer1") {
//         currentImageContainer = document.getElementById("imageContainer2");
//     }
//     else if (currentImageContainer.id === "imageContainer2") {
//         currentImageContainer = document.getElementById("imageContainer3");
//     }
//     else {
//         currentImageContainer = document.getElementById("imageContainer1");
//     }
//
//     currentImageContainer.style.display = "inline";
//
//     clearInterval(carouselTimer);
//     carouselTimer = setInterval(carousel, 7000);
// }
//
// function cycleImagePrev() {
//     currentImageContainer.style.display = "none";
//
//     if (currentImageContainer.id === "imageContainer1") {
//         currentImageContainer = document.getElementById("imageContainer3");
//     }
//     else if (currentImageContainer.id === "imageContainer2") {
//         currentImageContainer = document.getElementById("imageContainer1");
//     }
//     else {
//         currentImageContainer = document.getElementById("imageContainer2");
//     }
//
//     currentImageContainer.style.display = "inline";
//
//     clearInterval(carouselTimer);
//     carouselTimer = setInterval(carousel, 7000);
// }