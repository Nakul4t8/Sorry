// Reveal Apology Message One by One
document.addEventListener("DOMContentLoaded", () => {
    const messages = document.querySelectorAll(".message p");
    messages.forEach((msg, index) => {
        setTimeout(() => {
            msg.classList.add("revealed");
        }, index * 1500);
    });
});

// Show Secret Message on Button Click
document.getElementById("forgiveBtn").addEventListener("click", () => {
    document.getElementById("secretMessage").style.opacity = 1;
});

// Floating Hearts Animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.getElementById("hearts-container").appendChild(heart);

    let left = Math.random() * window.innerWidth;
    let size = Math.random() * 20 + 10;
    let duration = Math.random() * 3 + 2;

    heart.style.left = `${left}px`;
    heart.style.fontSize = `${size}px`;
    heart.style.animationDuration = `${duration}s`;

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 300);

