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