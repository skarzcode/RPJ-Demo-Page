const images = document.querySelectorAll(".Gallery-images");
const modal = document.getElementsByClassName("modal")[0];
const modalImg = document.getElementsByClassName("modalImg")[0];
const modalTxt = document.getElementsByClassName("modalTxt")[0];
const close = document.getElementById("close");
const boxImg = document.querySelectorAll(".box-img");
var galleryImg = ["galleryImg1.jpeg", "galleryImg2.jpeg", "galleryImg3.jpeg", "galleryImg1.jpeg", "galleryImg2.jpeg", "galleryImg3.jpeg", "galleryImg1.jpeg", "galleryImg2.jpeg", "galleryImg2.jpeg", "galleryImg3.jpeg", "galleryImg1.jpeg", "galleryImg2.jpeg"];
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
const radiobtn = document.getElementById("r1");
let aboutContainer = document.getElementsByClassName("about-content-info")[0];
let aboutH2 = document.getElementsByClassName("DH2")[0];
let aboutP = document.getElementsByClassName("DP")[0];
let aboutP2 = document.getElementsByClassName("DP2")[0];
let aboutP3 = document.getElementsByClassName("DP3")[0];
const aboutNav = document.querySelectorAll('.nav-toggle2');
const navHighlight = document.getElementsByClassName("navHighlight")[0];
let gridImagses = document.querySelectorAll(".grid-img");
let mobileProperties = document.querySelectorAll(".property");






const one = {
    propertyImg: ["galleryImg1.jpeg", "galleryImg2.jpeg", "galleryImg3.jpeg", "galleryImg2.jpeg"],
    h1: "105 BroadWay",
    h3: "London",
    p: "1-Bed, 2-Bed from £485,950"
};

const two = {
    propertyImg: ["hunter2.jpeg", "hunter3.jpeg", "hunter5.jpeg", "hunter7.jpeg"],
    h1: "Pavilion",
    h3: "London",
    p: "3-Bed House from 550,675"
};

const three = {
    propertyImg: ["sidekix-media-g51F6-WYzyU-unsplash.jpg", "francesca-tosolini-hCU4fimRW-c-unsplash.jpg", "sidekix-media-0sDzRgrN_pI-unsplash.jpg", "sidekix-media-oCw5_evbWyI-unsplash.jpg"],
    h1: "St Martin's Close",
    h3: "Birmingham",
    p: "2-Bed from £235,000 "
};

const four = {
    propertyImg: ["sidekix-media-t294_ZZP2pg-unsplash.jpg", "zac-gudakov-lk-APuu-T5A-unsplash.jpg", "spacejoy-8wDnylxemkk-unsplash.jpg", "steven-ungermann-1AF5hP6F4tI-unsplash.jpg"],
    h1: "The Grand Exchange",
    h3: "London",
    p: "1-Bed Apartment, 2-Bed Apartment "
};

const five = {
    propertyImg: ["sidekix-media-1vMz2_MclrM-unsplash.jpg", "ralph-ravi-kayden-JDBVXignFdA-unsplash.jpg", "sidekix-media-8qNuR1lIv_k-unsplash.jpg", "francesca-tosolini-FX1EbT-jKBQ-unsplash.jpg"],
    h1: "Queen's Court",
    h3: "London",
    p: "1-Bed Apartment, 2-Bed Apartment "
};

const aboutOne = {
    h2: "WHO WE ARE",
    p: "Regal London is one of London's leading privately owned mixed-use real estate developers. We specialise in residential-led mixed-use developments and have delivered successful projects across London, from Kensington to Tower Hamlets and from Barnet to Shoreditch.",
    p2: "We focus on residential for sale and build to rent schemes, combined with mixed-use opportunities including hotels, flexible workspaces, retail and logistics, seeking out value and maximising opportunities for our partners from the most unexpected places.",
    p3: "in our approach, we are united by our passion for transforming this great city."
};

const aboutTwo = {
    h2: "WHAT WE DO",
    p: "We specialise in residential-led mixed-use developments and have delivered successful projects across London, from Kensington to Tower Hamlets and from Barnet to Shoreditch. Bespoke design and exceptional quality characterise our developments which are built to unlock value, enhance the local environment and respect local communities.",
    p2: "Regal London is a fully integrated business operating across the entire lifecycle of the asset, which means that we put the customer at the centre of everything we do, ensuring the delivery of outstanding quality and service at every stage of the pre and post development process. This includes land assembly, land use & planning strategy, stakeholder engagement, sales & marketing, construction, customer care and asset management.",
    p3: "Our integrated approach means design and delivery is fundamental through the development lifecycle: we believe in creating some of London’s most aesthetic places in which to live, work and play."
};

const aboutThree = {
    h2: "Integrated approach",
    p: "We operate across the entire lifecycle of the asset, with land acquisition, planning, stakeholder engagement, sales & marketing, delivery, customer care and commercial strategy all in-house by our exceptional industry professionals.",
    p2: "Our integrated business model has supported our continued growth for over 20 years while targeting high quality investments and prioritising sustainable value creation.",
    p3: "Our highly experienced construction team has a strong and proven track record of delivering major projects from inception through to completion."
};

const aboutFour = {
    propertyImg: ["sidekix-media-t294_ZZP2pg-unsplash.jpg", "zac-gudakov-lk-APuu-T5A-unsplash.jpg", "spacejoy-8wDnylxemkk-unsplash.jpg", "steven-ungermann-1AF5hP6F4tI-unsplash.jpg"],
    h1: "The Grand Exchange",
    h3: "London",
    p: "1-Bed Apartment, 2-Bed Apartment "
};

const aboutFive = {
    propertyImg: ["sidekix-media-1vMz2_MclrM-unsplash.jpg", "ralph-ravi-kayden-JDBVXignFdA-unsplash.jpg", "sidekix-media-8qNuR1lIv_k-unsplash.jpg", "francesca-tosolini-FX1EbT-jKBQ-unsplash.jpg"],
    h1: "Queen's Court",
    h3: "London",
    p: "1-Bed Apartment, 2-Bed Apartment "
};








propertyBtn.forEach((btn) => btn.addEventListener('click', function () {
    radiobtn.checked = true;
    if (btn.id == "one") {
        contentH1.innerHTML = one.h1;
        contentH3.innerHTML = one.h3;
        contentP.innerHTML = one.p;
        for (let i = 0; i < contentImg.length; i++) {
            contentImg[i].src = one.propertyImg[i];
        }
    } else if (btn.id == "two") {
        contentH1.innerHTML = two.h1;
        contentH3.innerHTML = two.h3;
        contentP.innerHTML = two.p;
        for (let i = 0; i < contentImg.length; i++) {
            contentImg[i].src = two.propertyImg[i];
        }
    } else if (btn.id == "three") {
        contentH1.innerHTML = three.h1;
        contentH3.innerHTML = three.h3;
        contentP.innerHTML = three.p;
        for (let i = 0; i < contentImg.length; i++) {
            contentImg[i].src = three.propertyImg[i];
        }

    } else if (btn.id == "four") {
        contentH1.innerHTML = four.h1;
        contentH3.innerHTML = four.h3;
        contentP.innerHTML = four.p;
        for (let i = 0; i < contentImg.length; i++) {
            contentImg[i].src = four.propertyImg[i];
        }

    } else if (btn.id == "five") {
        contentH1.innerHTML = five.h1;
        contentH3.innerHTML = five.h3;
        contentP.innerHTML = five.p;
        for (let i = 0; i < contentImg.length; i++) {
            contentImg[i].src = five.propertyImg[i];
        }

    }

}));



aboutNav.forEach((nav) => nav.addEventListener('click', function (e) {
    e.preventDefault;
    aboutContainer.classList.remove("containerAnimation");
    void aboutContainer.offsetWidth;
    aboutContainer.classList.add("containerAnimation");
    if (nav.id == "aboutOne") {
        aboutContent(aboutOne)
    } else if (nav.id == "aboutTwo") {
        aboutContent(aboutTwo)
    } else if (nav.id == "aboutThree") {
        aboutContent(aboutThree)
    } else if (nav.id == "aboutFour") {
        aboutContent(aboutFour)
    } else if (nav.id == "aboutFive") {
        aboutContent(aboutFive)
    };

    if (nav.id == "aboutOne") {
        colorSwitcher(aboutNav, nav)
    } else if (nav.id == "aboutTwo") {
        colorSwitcher(aboutNav, nav)
    } else if (nav.id == "aboutThree") {
        colorSwitcher(aboutNav, nav)
    } else if (nav.id == "aboutFour") {
        colorSwitcher(aboutNav, nav)
    } else if (nav.id == "aboutFive") {
        colorSwitcher(aboutNav, nav)
    }

    function colorSwitcher(el, elHolder) {
        for (let C = 0; C < 5; C++) {
            el[C].style.color = "white"
        }
        elHolder.style.color = "Yellow";
    }

    function aboutContent(el) {
        aboutH2.innerHTML = el.h2;
        aboutP.innerHTML = el.p;
        aboutP2.innerHTML = el.p2;
        aboutP3.innerHTML = el.p3;
    }
}, false));


aboutNav.forEach((nav) => nav.addEventListener('click', function (e) {
    e.preventDefault;
    nav.classList.add("navClicked");
    void nav.offsetWidth;


    nav.classList.remove("navClicked");

}, false));


gridImagses.forEach((link) => link.addEventListener('click', function () {

    if (link.id == "Property1") {
        window.open("Developments.html", "_self")
    } else if (link.id == "Property2") {
        window.open("Developments2.html", "_self")
    } else if (link.id == "Property3") {
        window.open("Developments3.html", "_self")
    } else if (link.id == "Property4") {
        window.open("Developments4.html", "_self")
    } else if (link.id == "Property5") {
        window.open("Developments5.html", "_self")
    }   
}));


mobileProperties.forEach((link) => link.addEventListener('click', function () {

    if (link.id == "mobile1") {
        window.open("Developments.html", "_self")
    } else if (link.id == "mobile2") {
        window.open("Developments2.html", "_self")
    } else if (link.id == "mobile3") {
        window.open("Developments3.html", "_self")
    }
}));








function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (let i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false')
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion))


window.addEventListener("scroll", reveal);
window.addEventListener("scroll", reveal2);

function reveal() {
    var reveals = document.querySelectorAll(".reveal")
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTOP = reveals[i].getBoundingClientRect().top;
        var revealPoint = 0;

        if (revealTOP < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function reveal2() {
    var reveals2 = document.querySelectorAll(".reveal2")
    for (var i = 0; i < reveals2.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTOP = reveals2[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTOP < windowHeight - revealPoint) {
            reveals2[i].classList.add("active2");

        } else {
            reveals2[i].classList.remove("active2");
        }
    }
};






images.forEach((image) => {
    image.addEventListener("click", () => {
        modalImg.src = image.src;
        modal.classList.add("appear");
        close.addEventListener("click", () => {
            modal.classList.remove("appear");

        });
        for (let i = 0; i < galleryImg.length; i++) {
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


document.addEventListener("click", function (event) {
    if (event.target.id == "Gallery_images") {

    };
});





