const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true,
    lerp: 0.05
});

class Video {
    constructor(src) {
        this.element = document.createElement("video");
        this.element.src = src;
        this.element.muted = true;
        this.element.loop = true;
        this.element.autoplay = true;
        this.element.style.width = "100%";
        this.element.style.height = "100%";
        this.element.style.objectFit = "cover";
        this.element.style.borderRadius = "20px";
    }

    playRandomTime() {
        this.element.addEventListener("loadedmetadata", () => {
            const randomTime = Math.random() * this.element.duration;
            this.element.currentTime = randomTime;
        });
    }
}

function handleFeaturedHover() {
    const featuredWrapper = document.querySelector(".featured_wrapper");
    const featuredContainer = document.querySelector(".hero-fixed_featured_container");

    featuredWrapper.addEventListener("mouseenter", () => {
        featuredContainer.style.display = "block";
    });

    featuredWrapper.addEventListener("mouseleave", () => {
        featuredContainer.style.display = "none";
    });
}

function handleListElementHover() {
    const listElements = document.querySelectorAll(".list-element");
    const featuredContainer = document.querySelector(".hero-fixed_featured_container");

    listElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            const link = element.getAttribute("data-info");
            featuredContainer.innerHTML = ""; // Clear previous content

            if (link.endsWith(".mp4")) {
                const currentVideo = new Video(link);
                currentVideo.playRandomTime();
                featuredContainer.appendChild(currentVideo.element);
            } else {
                featuredContainer.style.backgroundImage = `url(${link})`;
            }
        });
    });
}

function initializeSwiper() {
    new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}

function handlePage5Hover() {
    const page5 = document.querySelector("#page-5");
    const footer = document.querySelector("#footer");

    page5.addEventListener("mouseenter", () => {
        footer.style.zIndex = "11";
    });

    page5.addEventListener("mouseleave", () => {
        footer.style.zIndex = "9";
    });
    //Do hotZone appproch Later
}


let lastClickedHeading = null;

function service(element) {
    if (lastClickedHeading !== null) {
        lastClickedHeading.style.color = "";
        lastClickedHeading.style.borderLeft = "";
    }

    const para = element.getAttribute('data-para');
    const paraContainer = document.querySelector("#para_container");
    const serviceImageWrapper = document.querySelector(".service_image_wrapper");
    const imgLink = element.getAttribute('data-img');

    serviceImageWrapper.style.backgroundImage = `url(${imgLink})`;
    element.style.color = "white";
    element.style.borderLeft = "4px solid #ff4500";
    paraContainer.innerHTML = para;

    lastClickedHeading = element;
}

// Initialize functions
handleFeaturedHover();
handleListElementHover();
initializeSwiper();
handlePage5Hover();
