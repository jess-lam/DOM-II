// Your code goes here
const bodyHeader = document.querySelectorAll("h2");

bodyHeader.forEach((element) => {
    element.addEventListener("dblclick", (event) => {
        element.style.backgroundColor = "pink";
        console.log("start");
        event.stopPropagation();
    });
});

const bodyText = document.querySelectorAll(".text-content");

bodyText.forEach((element) => {
    element.addEventListener("dblclick", () => {
        element.style.backgroundColor = "skyblue";
        console.log("middle");
    })
});

const images = document.querySelectorAll("img");

images.forEach((element) => {
    element.addEventListener("mouseleave", () => {
        element.style.transform = "scale(1)";
        element.style.transition = "all 0.3s";
    });
});

images.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        element.style.transform = "scale(1.2)";
        element.style.transition = "all 0.3s";
    });
});

const bodyBackground = document.querySelector("body");
window.addEventListener("resize", () => {
    bodyBackground.style.backgroundColor = "teal";
});


    bodyBackground.addEventListener("scroll", (event) => {
        element.style.transform = "rotate("+scrollY / 180+"deg)";
        event.stopPropagation();
    });

