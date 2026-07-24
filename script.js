alert("JS Loaded");
console.log('Pharma Excel Solution');
function openPreview(image){

document.getElementById("lightbox").style.display="flex";

document.getElementById("previewImage").src=image;

}

function closePreview(){

document.getElementById("lightbox").style.display="none";

}
/* ===========================
   FAQ Accordion
=========================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {
            if (faq !== item) {
                faq.classList.remove("active");
            }
        });

        item.classList.toggle("active");
    });
});
// Counter Animation

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = Math.ceil(target / 120);

        if (count < target) {

            counter.innerText = count + increment;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target.toLocaleString() + "+";

        }

    };

    updateCounter();

});
const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{
    glow.style.left=e.clientX+"px";
    glow.style.top=e.clientY+"px";
});
/* ==========================
   DEMO VIDEO POPUP
========================== */

const openVideo = document.getElementById("openVideo");
const videoPopup = document.getElementById("videoPopup");
const youtubeVideo = document.getElementById("youtubeVideo");
const closeVideo = document.querySelector(".close-video");


openVideo.addEventListener("click", function () {

    videoPopup.style.display = "flex";

    youtubeVideo.src = "https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1";

});


closeVideo.addEventListener("click", function () {

    videoPopup.style.display = "none";

    youtubeVideo.src = "";

});


videoPopup.addEventListener("click", function(e){

    if(e.target === videoPopup){

        videoPopup.style.display = "none";

        youtubeVideo.src = "";

    }

});


document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        videoPopup.style.display = "none";

        youtubeVideo.src = "";

    }

});
/*==========================================
 SOFTWARE GALLERY LIGHTBOX
==========================================*/
const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.querySelector(".gallery-lightbox");

console.log(
    document.querySelectorAll(".gallery-img").length,
    document.querySelector(".gallery-lightbox"),
    document.querySelector(".lightbox-image"),
    document.querySelector(".close-gallery")
);

document.addEventListener("DOMContentLoaded", function(){

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.querySelector(".gallery-lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const closeGallery = document.querySelector(".close-gallery");


if(!lightbox || !lightboxImage || !closeGallery){
    return;
}


galleryImages.forEach(img => {

    img.addEventListener("click", function(){

        lightbox.classList.add("active");

        lightboxImage.src = this.src;

        lightboxImage.alt = this.alt;

        document.body.style.overflow = "hidden";

    });

});


closeGallery.addEventListener("click", function(){

    lightbox.classList.remove("active");

    document.body.style.overflow = "auto";

});


lightbox.addEventListener("click", function(e){

    if(e.target === lightbox){

        lightbox.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});


document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        lightbox.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});


});