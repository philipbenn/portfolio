function toggleDescription(event, descriptionNumber) {
    event.preventDefault(); 
    var descriptionElement = document.getElementById("description" + descriptionNumber);
    if (descriptionElement.style.display === "none") {
        descriptionElement.style.display = "block";
    } else {
        descriptionElement.style.display = "none";
    }
}