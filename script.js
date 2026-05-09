// Gallery data (new1.jpg - new8.jpg)
const galleryImages = [
    { src: "pictures/new1.jpg", title: "Geometric Silence", price: "R450" },
    { src: "pictures/new2.jpg", title: "Floral Interruption", price: "R550" },
    { src: "pictures/new3.jpg", title: "Urban Fracture", price: "R480" },
    { src: "pictures/new4.jpg", title: "Portrait of Memory", price: "R620" },
    { src: "pictures/new5.jpg", title: "Silence", price: "R700" },
    { src: "pictures/new6.jpg", title: "Thekiso's Gaze", price: "R520" },
    { src: "pictures/new7.jpg", title: "Abstract Truth", price: "R390" },
    { src: "pictures/new8.jpg", title: "Last Light", price: "R475" }
];

// AtWork data (atwork1.jpg - atwork6.jpg)
const atworkImages = [
    { src: "pictures/atwork1.jpg", title: "Lines of Dissent I", year: "2024" },
    { src: "pictures/atwork2.jpg", title: "Lines of Dissent II", year: "2024" },
    { src: "pictures/atwork3.jpg", title: "Geometric Interruptions", year: "2023" },
    { src: "pictures/atwork4.jpg", title: "Ballpoint Archive", year: "2025" },
    { src: "pictures/atwork5.jpg", title: "Portrait of a City", year: "2024" },
    { src: "pictures/atwork6.jpg", title: "Thekiso's Studio", year: "2025" }
];

// Populate gallery grid
const galleryGrid = document.getElementById("gallery-grid");
if (galleryGrid) {
    galleryImages.forEach(img => {
        const col = document.createElement("div");
        col.className = "col-md-4 col-sm-6";
        col.innerHTML = `
            <div class="gallery-item">
                <img src="${img.src}" alt="${img.title}" class="gallery-img-click">
                <div class="gallery-overlay">
                    <span class="price">${img.price}</span>
                    <select class="select-size">
                        <option>A4</option><option>A3</option><option>A2</option>
                    </select>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
        `;
        galleryGrid.appendChild(col);
    });
}

// Populate AtWork grid
const atworkGrid = document.getElementById("atwork-grid");
if (atworkGrid) {
    atworkImages.forEach(img => {
        const col = document.createElement("div");
        col.className = "col-md-4 col-sm-6";
        col.innerHTML = `
            <div class="atwork-card">
                <img src="${img.src}" alt="${img.title}" class="atwork-img-click">
                <div class="atwork-info">
                    <h3>${img.title}</h3>
                    <p>${img.year} · Ballpoint on paper</p>
                </div>
            </div>
        `;
        atworkGrid.appendChild(col);
    });
}

// Lightbox Modal (shared for both pages)
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeSpan = document.querySelector(".modal-close");

function openModal(imgSrc) {
    if (modal && modalImg) {
        modal.style.display = "block";
        modalImg.src = imgSrc;
    }
}

// Attach click listeners dynamically (after content loads)
setTimeout(() => {
    document.querySelectorAll(".gallery-img-click, .atwork-img-click").forEach(img => {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            openModal(img.src);
        });
    });
}, 100);

if (closeSpan) {
    closeSpan.onclick = () => modal.style.display = "none";
}
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };

// Add to Cart alerts (professional placeholder)
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
        alert("Demo: This artwork would be added to your cart.");
    }
});
