var slideIndex = {}; // Create an object to store slide indexes for multiple project sections

// Initialize slide indexes for each project section
slideIndex["blombiler"] = 1;
slideIndex["bilabonnement"] = 1;
slideIndex["kinoxp"] = 1;

// Show the slides for the specified project section
showSlides("blombiler");
showSlides("bilabonnement");
showSlides("kinoxp");

// Next/previous controls for a specific project section
function plusSlides(n, projectSection) {
    showSlides(projectSection, slideIndex[projectSection] += n);
}

// Thumbnail image controls for a specific project section
function currentSlide(n, projectSection) {
    showSlides(projectSection, slideIndex[projectSection] = n);
}

// Show the slides for a specific project section
function showSlides(projectSection, n) {
    var i;
    var slides = document.querySelectorAll("." + projectSection + " .project-slide");
    if (n > slides.length) {
        slideIndex[projectSection] = 1;
    }
    if (n < 1) {
        slideIndex[projectSection] = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex[projectSection] - 1].style.display = "block";
}
