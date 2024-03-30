// gsap.registerPlugin(Scroll Trigger);
// Define the initial timeline
var tl = gsap.timeline();

// Add animations to the timeline
tl.from("#strt>h1,#part2,#round", {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 1
});

gsap.utils.toArray("#p2 a").forEach((element, index) => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: "top 74%",
            once: true // Animation plays only once
        },
        opacity: 0,
        y: 100,
        duration: 1,
        // delay: index * 0.1 // Delay each image animation slightly
    });
});

// Create a timeline for animations
// var tl = gsap.timeline();

// // Add animations to the timeline
// tl.from("#strt>h1,#part2,#round", {
//     opacity: 0,
//     y: 100,
//     duration: 1,
//     // delay: 1,
//     stagger: 1, 
    
// });
// tl.from("#p2",{
//     // y:100,
//     scrollTrigger: {
//         trigger: "#p2",
//         start: "top 10%", // Adjust as needed
//         scrub: true, // Smooth scrubbing effect
//         delay: 10 ,// Set delay value as needed
//         markers:true,
//         scroller:"body",
//         y:100
//       }
// })
// Define animations for images within #p2
// tl.from("#p1 ", {
//     opacity: 0,
//     y: 100,
//     duration: 1,
    
//     // delay: 15,
//     // stagger: 1,
//     // scrollTrigger:{
//     //     trigger:"#p2 img ",
//     //     scroller:"#p1", 
//     //     markers:true
//     // } 
// });

// Set up ScrollTrigger for the timeline



// var tl = gsap.timeline();

// tl.from("#strt>h1,#part2,#round", {
//     opacity: 0,
//     y: 100,
//     duration: 1,
//     delay: 1,
//     stagger: 1
// });
// tl.from("#p2",{
//     opacity: 0,
//     y: 100,
//     duration: 1,
//     delay: 1,
//     stagger: 1,
//     scrollTrigger:"#p2 img"
// })
// window.addEventListener('scroll', function() {
//     var part2 = document.getElementById('part2');
//     var distanceFromTop = part2.getBoundingClientRect().top;

//     if (distanceFromTop <= 0) {
//         part2.classList.add('fixed');
//     } else {
//         part2.classList.remove('fixed');
//     }
// });


document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("#part2 a");
    const imagesContainer = document.getElementById("p2");
    const images = document.querySelectorAll("#p2 img");
    let originalImageOrder = {}; // Store the original order of images by category

    // Store the original order of images by category
    links.forEach(link => {
        const category = link.innerText.toLowerCase();
        originalImageOrder[category] = [];
        images.forEach(image => {
            if (image.classList.contains(category)) {
                originalImageOrder[category].push(image.cloneNode(true));
            }
        });
    });

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetClass = event.target.innerText.toLowerCase();

            // Show images for the clicked category, hide others
            images.forEach(image => {
                if (image.classList.contains(targetClass)) {
                    image.style.display = "block";
                } else {
                    image.style.display = "none";
                }
            });

            // Move images to the beginning based on their class
            images.forEach(image => {
                if (image.classList.contains(targetClass)) {
                    imagesContainer.prepend(image);
                }
            });

            // Apply size styling based on index
            images.forEach((image, index) => {
                if (image.classList.contains(targetClass)) {
                    if (index % 2 === 0) {
                        image.style.height = "30vh";
                        image.style.width = "100%";
                    } else {
                        image.style.height = "40vh";
                        image.style.width = "100%";
                    }
                }
            });
        });
    });
});
window.addEventListener('resize', function() {
    var windowWidth = window.innerWidth;
    var maxWidth = 760; // Maximum width for resizing
    var minHeight = 50; // Minimum height for the image
    var maxHeight = 500; // Maximum height for the image
    
    // Select all images inside #p2
    var images = document.querySelectorAll('#p2 img');
    
    // Loop through each image
    images.forEach(function(img) {
        // Calculate the new height based on the window width
        var newHeight;
        if (windowWidth <= maxWidth) {
            // Decrease the height gradually as the window width decreases
            newHeight = minHeight + (maxHeight - minHeight) * (windowWidth / maxWidth);
        } else {
            // Stop resizing once window width exceeds 760 pixels
            newHeight = img.naturalHeight;
        }
        
        // Set the new height
        img.style.height = newHeight + 'px';
    });
});






