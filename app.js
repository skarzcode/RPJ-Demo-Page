const images = document.querySelectorAll(".Gallery-images");
const modal = document.getElementsByClassName("modal")[0];
const modalImg = document.getElementsByClassName("modalImg")[0];
const modalTxt = document.getElementsByClassName("modalTxt")[0];
const close = document.getElementById("close");
const boxImg = document.querySelectorAll(".box-img");
var galleryImg = ["galleryImg1.jpeg", "galleryImg2.jpeg", "galleryImg3.jpeg","galleryImg1.jpeg", "galleryImg2.jpeg", "galleryImg3.jpeg","galleryImg1.jpeg", "galleryImg2.jpeg","galleryImg2.jpeg", "galleryImg3.jpeg","galleryImg1.jpeg", "galleryImg2.jpeg"];
var Content = document.getElementsByClassName("container__content")[0];
const items = document.querySelectorAll('.accordion button');
let contentH1 = document.getElementsByClassName("dynamicH1")[0];
let contentH3 = document.getElementsByClassName("dynamicH3")[0];
let contentP = document.getElementsByClassName("dynamicP")[0];
let contentImg = document.getElementsByClassName("dynamicImg")
let detailH2 = document.getElementsByClassName("dynamicH2")[0];
let detailLi = document.querySelectorAll('.dynamicLi');
let detailP = document.getElementsByClassName("dynamicP2")[0];
const propertyBtn = document.querySelectorAll('.anchor-button');
radiobtn = document.getElementById("r1");




const one = {
    propertyImg: ["galleryImg1.jpeg","galleryImg2.jpeg","galleryImg3.jpeg","galleryImg2.jpeg"], 
    h1:"106 BroadWay",
    h3:"London",
    p:"1-Bed, 2-Bed from £485,950"
    };

    const two = {
        propertyImg: ["hunter2.jpeg","hunter3.jpeg","hunter5.jpeg","hunter7.jpeg"], 
        h1:"Pavilion",
        h3:"London",
        p:"3-Bed House from 550,675"
        };

        const three = {
            propertyImg: ["sidekix-media-g51F6-WYzyU-unsplash.jpg","francesca-tosolini-hCU4fimRW-c-unsplash.jpg","sidekix-media-0sDzRgrN_pI-unsplash.jpg", "sidekix-media-oCw5_evbWyI-unsplash.jpg"], 
            h1:"St Martin's Close",
            h3:"Birmingham",
            p:"2-Bed from £235,000 "
            };

            const four = {
                propertyImg: ["sidekix-media-t294_ZZP2pg-unsplash.jpg","zac-gudakov-lk-APuu-T5A-unsplash.jpg","spacejoy-8wDnylxemkk-unsplash.jpg", "steven-ungermann-1AF5hP6F4tI-unsplash.jpg"], 
                h1:"The Grand Exchange",
                h3:"London",
                p:"1-Bed Apartment, 2-Bed Apartment "
                };

                const five = {
                    propertyImg: ["sidekix-media-1vMz2_MclrM-unsplash.jpg","ralph-ravi-kayden-JDBVXignFdA-unsplash.jpg","sidekix-media-8qNuR1lIv_k-unsplash.jpg", "francesca-tosolini-FX1EbT-jKBQ-unsplash.jpg"], 
                    h1:"Queen's Court",
                    h3:"London",
                    p:"1-Bed Apartment, 2-Bed Apartment "
                    };






       

    propertyBtn.forEach((btn) => btn.addEventListener('click', function(){
        radiobtn.checked = true;
        if (btn.id == "one"){
            contentH1.innerHTML= one.h1;
            contentH3.innerHTML= one.h3;
            contentP.innerHTML= one.p;
            for (let i =0; i<contentImg.length; i++){
                contentImg[i].src = one.propertyImg[i];
            } 
    } else if (btn.id == "two"){
        contentH1.innerHTML= two.h1;
        contentH3.innerHTML= two.h3;
        contentP.innerHTML= two.p;
        for (let i =0; i<contentImg.length; i++){
            contentImg[i].src = two.propertyImg[i];
}
} else if (btn.id == "three"){
    contentH1.innerHTML= three.h1;
    contentH3.innerHTML= three.h3;
    contentP.innerHTML= three.p;
    for (let i =0; i<contentImg.length; i++){
        contentImg[i].src = three.propertyImg[i];
}

}
else if (btn.id == "four"){
    contentH1.innerHTML= four.h1;
    contentH3.innerHTML= four.h3;
    contentP.innerHTML= four.p;
    for (let i =0; i<contentImg.length; i++){
        contentImg[i].src = four.propertyImg[i];
}

}

else if (btn.id == "five"){
    contentH1.innerHTML= five.h1;
    contentH3.innerHTML= five.h3;
    contentP.innerHTML= five.p;
    for (let i =0; i<contentImg.length; i++){
        contentImg[i].src = five.propertyImg[i];
}

}

}));






function toggleAccordion(){
    const itemToggle = this.getAttribute('aria-expanded');

    for (let i=0; i <items.length; i++){
        items[i].setAttribute('aria-expanded', 'false')
    }

    if(itemToggle == 'false'){
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion))





window.addEventListener("scroll", reveal);
window.addEventListener("scroll", reveal2);
function reveal(){
    var reveals = document.querySelectorAll(".reveal")
for (var i=0; i< reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTOP = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if(revealTOP < windowHeight - revealPoint){
        reveals[i].classList.add("active");
    }
    else{
        reveals[i].classList.remove("active");
    }
}
}

function reveal2(){
    var reveals2 = document.querySelectorAll(".reveal2")
for (var i=0; i< reveals2.length; i++){
    var windowHeight = window.innerHeight;
    var revealTOP = reveals2[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if(revealTOP < windowHeight - revealPoint){
        reveals2[i].classList.add("active2");

    }
    else{
        reveals2[i].classList.remove("active2");
    }
}
};






images.forEach((image) => {
            image.addEventListener("click", () => {
                modalImg.src = image.src;
                modal.classList.add("appear");
                close.addEventListener("click", () =>{
                    modal.classList.remove("appear");
                    
                } );
                for (let i= 0; i<galleryImg.length; i++){
                    boxImg[i].src = galleryImg[i];
                };
            });

            
});

boxImg.forEach((img) => {
    img.addEventListener("click", () => {
        const modalSrc = modalImg.src;
        const boxSrc = img.src
        modalImg.src = boxSrc;
        img.src = modalSrc;
    });
});


document.addEventListener("click", function(event){
    if(event.target.id == "Gallery_images"){
       
    };
});





