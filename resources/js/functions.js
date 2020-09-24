function activeMenu() {
    let el = document.getElementById("header-id");
    if (el.classList.contains("active")) {
        el.classList.remove("active");
    }
    else {
        el.classList.add("active");
    }
};

function openSection(section) {
    document.querySelectorAll('.active').forEach(e => e.classList.remove("active"));
    document.getElementById(section).classList.add("active");
    if(section !== 'hero-id') {
        document.getElementById('right-section-id').classList.add("active");
    } 
}