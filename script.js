function loadMobileSidemenu() {
    var sidemenu = document.getElementById("side-menu-mobile");
    var sidemenuButton = document.getElementById("side-menu-button");
    sidemenu.style.display == "none"? (
        sidemenu.style.display = "flex",
        sidemenuButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>'
    ): (
        sidemenu.style.display = "none",
        sidemenuButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>'
    );
}


function loadSideMenu(tab) {
    var menu = document.getElementById("list-menu");
    const menuLists = ["creative", "pdfs", "marketing", "help"];

    if (menu.style.display == "none") {
        for (let i=0; i<menuLists.length; i++) {
            var content = document.getElementById(menuLists[i]);
            if (menuLists[i] != tab) {
                content.style.display = "none";
            } else {
                content.style.display = "flex";
            }
        }
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
}

function loadApps() {
    var section = document.getElementById("apps");
    section.style.display == "none" ? section.style.display = "flex": section.style.display = "none"
}