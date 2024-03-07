const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

var featured_wrapper = document.querySelector(".featured_wrapper");
var featured_container = document.querySelector(".hero-fixed_featured_container")

featured_wrapper.addEventListener("mouseenter",()=>{
    featured_container.style.display = "block";
  
});

featured_wrapper.addEventListener("mouseleave",()=>{
    featured_container.style.display = "none";
});


class Video {
    constructor(src) {
        this.element = document.createElement("video");
        this.element.src = src;
        this.element.muted = true;
        this.element.loop = true;
        this.element.autoplay = true;
        this.element.style = "width: 100%; height: 100%; object-fit: cover; border-radius: 20px;";
    }
    playRandomTime() {
        this.element.addEventListener("loadedmetadata", () => {
            var randomTime = Math.random() * this.element.duration;
            this.element.currentTime = randomTime;
        });
    }
}

var list_elements = document.querySelectorAll(".list-element");
list_elements.forEach(function (e) {
    e.addEventListener("mouseenter", () => {
        var link = e.getAttribute("data-info");
        featured_container.innerHTML = ""; // Clear previous content
        if (link.endsWith(".mp4")) {
            currentVideo = new Video(link);
            currentVideo.playRandomTime();
            featured_container.appendChild(currentVideo.element);
        } else {
            featured_container.style.backgroundImage = `url(${link})`;
        }
    });
});
