function toggleMenu(id) {
    const menu = document.getElementById(id);

    // close all submenus
    document.querySelectorAll(".submenu").forEach(sub => {
        if (sub !== menu) {
            sub.classList.remove("show");
        }
    });

    // toggle clicked one
    menu.classList.toggle("show");
}