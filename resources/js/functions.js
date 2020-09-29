function activeMenu() {
    let el = document.getElementById("header-id");
    let wrapper = document.getElementById("main-wrapper");
    if (el.classList.contains("active")) {
        el.classList.remove("active");
        wrapper.classList.remove("menu-fixed");
    }
    else {
        el.classList.add("active");
        wrapper.classList.add("menu-fixed");
    }
};

function openSection(section) {
    document.querySelectorAll('.active').forEach(e => e.classList.remove("active"));
    document.getElementById(section).classList.add("active");
    if(section !== 'hero-id') {
        document.getElementById('right-section-id').classList.add("active");
    }
    document.getElementById("main-wrapper").classList.remove("menu-fixed");
};