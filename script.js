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
/* ==============================
   SOFTWARE GALLERY LIGHTBOX
============================== */

const galleryImages = document.querySelectorAll(".gallery-popup");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".lightbox-close");

galleryImages.forEach((image) => {
    image.addEventListener("click", function (e) {
        e.preventDefault();
        lightbox.style.display = "flex";
        lightboxImg.src = this.href;
    });
});

closeLightbox.addEventListener("click", function () {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        lightbox.style.display = "none";
    }
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