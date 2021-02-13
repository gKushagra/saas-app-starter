document.getElementById("footer-note").innerHTML = `${new Date().getFullYear()} OddFellow.com`;

// change theme dark/light
var darkMode = false;
document.getElementById("theme-switch").addEventListener("change", () => {
    if (darkMode) {
        // body
        document.body.style.color = "#212121";
        document.body.style.background = "#FAFAFA";

        // menu icon
        if (menuOpen) { 
            menuEl.style.backgroundImage = "url('./../assets/menu_open-24px.svg')";
        } else { 
            drawerIconBtn1.style.backgroundImage = "url('./../assets/folder-black-18dp.svg')";
            drawerIconBtn2.style.backgroundImage = "url('./../assets/folder-black-18dp.svg')";
            menuEl.style.backgroundImage = "url('./../assets/menu-24px.svg')"; 
        }

        darkMode = false;
    } else {
        // body
        document.body.style.color = "#FAFAFA";
        document.body.style.background = "#212121";

        // menu icon
        if (menuOpen) menuEl.style.backgroundImage = "url('./../assets/menu_open-white-18dp.svg')";
        else { 
            drawerIconBtn1.style.backgroundImage = "url('./../assets/folder-white-18dp.svg')";
            drawerIconBtn2.style.backgroundImage = "url('./../assets/folder-white-18dp.svg')";
            menuEl.style.backgroundImage = "url('./../assets/menu-white-18dp.svg')"; 
        }

        darkMode = true;
    }
});

// menu and drawer change on menu btn click
var menuOpen = true;
const menuEl = document.getElementById('btn-menu');
const drawerEl = document.getElementById('drawer');
const drawerContentEl = document.getElementById('drawer-content');
const drawerIconViewEl = document.getElementById('drawer-icon_view');
const drawerIconBtn1 = document.getElementById('iconLinkBtn1');
const drawerIconBtn2 = document.getElementById('iconLinkBtn2');
const drawerListViewEl = document.getElementById("drawer-list_view");
drawerIconViewEl.classList.add("drawer-icon_view--collapsed"); // menu is open initially

menuEl.addEventListener("click", () => {
    if (darkMode) {
        if (menuOpen) {
            menuEl.style.backgroundImage = "url('./../assets/menu-white-18dp.svg')";
            drawerEl.classList.add("drawer-collapsed");
            drawerContentEl.classList.add("drawer-content-expanded");
            drawerIconBtn1.style.backgroundImage = "url('./../assets/folder-white-18dp.svg')";
            drawerIconBtn2.style.backgroundImage = "url('./../assets/folder-white-18dp.svg')";
            setTimeout(() => { drawerIconViewEl.classList.remove("drawer-icon_view--collapsed"); }, 800);
            // if(!drawerListViewEl.classList.contains("drawer-list_view--collapsed")) drawerListViewEl.classList.add("drawer-list_view--collapsed");
            drawerListViewEl.classList.add("drawer-list_view--collapsed");
            menuOpen = false;
        } else {
            menuEl.style.backgroundImage = "url('./../assets/menu_open-white-18dp.svg')";
            drawerEl.classList.remove("drawer-collapsed");
            drawerContentEl.classList.remove("drawer-content-expanded");
            drawerIconViewEl.classList.add("drawer-icon_view--collapsed");
            // if(drawerListViewEl.classList.contains("drawer-list_view--collapsed")) drawerListViewEl.classList.remove("drawer-list_view--collapsed");
            drawerListViewEl.classList.remove("drawer-list_view--collapsed");
            menuOpen = true;
        }
    } else {
        if (menuOpen) {
            menuEl.style.backgroundImage = "url('./../assets/menu-24px.svg')";
            drawerEl.classList.add("drawer-collapsed");
            drawerContentEl.classList.add("drawer-content-expanded");
            drawerIconBtn1.style.backgroundImage = "url('./../assets/folder-black-18dp.svg')";
            drawerIconBtn2.style.backgroundImage = "url('./../assets/folder-black-18dp.svg')";
            setTimeout(() => { drawerIconViewEl.classList.remove("drawer-icon_view--collapsed"); }, 800);
            // if(!drawerListViewEl.classList.contains("drawer-list_view--collapsed")) drawerListViewEl.classList.add("drawer-list_view--collapsed");
            drawerListViewEl.classList.add("drawer-list_view--collapsed");
            menuOpen = false;
        } else {
            menuEl.style.backgroundImage = "url('./../assets/menu_open-24px.svg')";
            drawerEl.classList.remove("drawer-collapsed");
            drawerContentEl.classList.remove("drawer-content-expanded");
            drawerIconViewEl.classList.add("drawer-icon_view--collapsed");
            // if(drawerListViewEl.classList.contains("drawer-list_view--collapsed")) drawerListViewEl.classList.remove("drawer-list_view--collapsed");
            drawerListViewEl.classList.remove("drawer-list_view--collapsed");
            menuOpen = true;
        }
    }
});

// theme switch tooltip
const themeSwitchTooltip = document.getElementById("switch-tooltip");
themeSwitchTooltip.style.display = "none";
document.getElementById("theme-switch").addEventListener("mouseover", () => {
    themeSwitchTooltip.style.display = "block";
    if (darkMode) themeSwitchTooltip.innerHTML = "day";
    else themeSwitchTooltip.innerHTML = "night";
    themeSwitchTooltip.classList.add("switch-tooltip");
});
document.getElementById("theme-switch").addEventListener("mouseout", () => {
    themeSwitchTooltip.style.display = "block";
    themeSwitchTooltip.innerHTML = "";
    themeSwitchTooltip.classList.remove("switch-tooltip");
});

// redirect to different pages
function routerLink(page) {
    window.location.href = "https://oddfellow.in/saas-template/page" + page + "/index.html";
}   
