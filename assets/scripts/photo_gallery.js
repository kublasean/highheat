function thumbnail_click(thumb_element) {
    console.log(thumb_element)
    
    var gallery = document.getElementById("gallery");
    
    if (gallery == null) {
        console.log("No gallery ID on page");
        return;
    }
    gallery.style.display = '';
    
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("body-with-overlay");
    
    var placeholder = document.getElementById("gallery-photo");
    if (placeholder == null) {
        conole.log("No element with 'gallery-photo' id");
        return;
    }
    
    var newImage = new Image();
    newImage.onload = function() {
        placeholder.src = this.src;
    };
    newImage.src = thumb_element.dataset.path;
    
    console.log(thumb_element.dataset.path);
}

function close_gallery() {
    var gallery = document.getElementById("gallery");
    gallery.style.display = "none";
    
    if (gallery == null) {
        console.log("No element with 'gallery' id");
        return;
    }
    
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("body-with-overlay");
    
    var placeholder = document.getElementById("gallery-photo");
    if (placeholder == null) {
        conole.log("No element with 'gallery-photo' id");
        return;
    }
    
    placeholder.src = "/assets/img/clear.gif";
}

document.querySelectorAll(".thumbnail-section img").forEach((element, index) => {
    console.log(element);
    element.onclick = () => { thumbnail_click(element); }
});

console.log("Hello world");