// ===============================
// PAGE LOAD
// ===============================
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// ===============================
// HEADER SHADOW
// ===============================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.style.boxShadow = window.scrollY > 20
        ? "0 2px 15px rgba(0,0,0,0.08)"
        : "none";
});

// ===============================
// ACTIVE LINK
// ===============================
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// ===============================
// POPUP NOTIFICATION SYSTEM
// ===============================
function showPopup(message) {
    const popup = document.createElement("div");

    popup.textContent = message;
    
    popup.style.position = "fixed";
    popup.style.bottom = "30px";
    popup.style.left = "50%";
    popup.style.transform = "translateX(-50%)";
    popup.style.background = "#38bdf8";
    popup.style.color = "white";
    popup.style.padding = "15px 25px";
    popup.style.borderRadius = "10px";
    popup.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
    popup.style.zIndex = "9999";
    popup.style.fontWeight = "bold";

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 2500);
}

// ===============================
// BOOKING FORM
// ===============================
const bookingForm = document.querySelector(".booking-container form");

if (bookingForm) {
    bookingForm.addEventListener("submit", e => {
        e.preventDefault();
        showPopup("Booking submitted successfully ✔");
        bookingForm.reset();
    });
}

// ===============================
// CONTACT FORM
// ===============================
const contactForm = document.querySelector(".contact-form form");

if (contactForm) {
    contactForm.addEventListener("submit", e => {
        e.preventDefault();
        showPopup("Message sent successfully ✔");
        contactForm.reset();
    });
}