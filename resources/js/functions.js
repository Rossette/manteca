function activeMenu () {
    let el = document.getElementById("header-id");
    if (el.classList.contains("active")) {
        el.classList.remove("active");
    }
    else {
        el.classList.add("active");
    }
};