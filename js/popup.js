document.addEventListener('DOMContentLoaded', function () {
    showHome();

    const popup = document.getElementById("popup");
    const closeButton = document.getElementById("close-popup");

    popup.style.display = "block";

    closeButton.onclick = function() {
        popup.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    };
});
