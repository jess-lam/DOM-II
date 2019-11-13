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
    element.addEventListener("mouseenter", () => {
        element.style.transform = "scale(1.2)";
        element.style.transition = "all 0.3s";
    });
        element.addEventListener("dragstart", () => {
            element.style.opacity = 0.5;
    });
        element.addEventListener("dragend", () => {
            element.style.opacity = 1;
        })
});


const bodyBackground = document.querySelector("body");
window.addEventListener("resize", () => {
    bodyBackground.style.backgroundColor = "teal";
});
bodyBackground.addEventListener("keydown", event => {
    if (event.keyCode === 65) {
        return "Ouch!";
    }
});

window.addEventListener("scroll", (event) => {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      alert('At the bottom!');
    }
})

window.onload = (event) => {
    alert('Page is fully loaded');
}

const navigation = document.querySelectorAll(".nav-link");
navigation.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.style.color = "purple";
    })
    element.addEventListener("click", (event) => {
        console.log("Clicked!");
        event.preventDefault();
    })
})

const logo = document.querySelector(".logo-heading");
logo.addEventListener("click", () => {
    logo.textContent = "Hey There!";
})

