window.onload = function setupPage() {
    console.log("                                                      \n" +
        " _____   ______    ____  ____                 ______  \n" +
        "|\\    \\ |\\     \\  |    ||    |            ___|\\     \\ \n" +
        " \\\\    \\| \\     \\ |    ||    |           |    |\\     \\\n" +
        "  \\|    \\  \\     ||    ||    |           |    |/____/|\n" +
        "   |     \\  |    ||    ||    |  ____  ___|    \\|   | |\n" +
        "   |      \\ |    ||    ||    | |    ||    \\    \\___|/ \n" +
        "   |    |\\ \\|    ||    ||    | |    ||    |\\     \\    \n" +
        "   |____||\\_____/||____||____|/____/||\\ ___\\|_____|   \n" +
        "   |    |/ \\|   |||    ||    |     ||| |    |     |   \n" +
        "   |____|   |___|/|____||____|_____|/ \\|____|_____|   \n" +
        "     \\(       )/    \\(    \\(    )/       \\(    )/     \n" +
        "      '       '      '     '    '         '    '      ");

    // Register Button Listeners
    document.getElementById("menu-button").addEventListener("click", toggleBurgerMenu);
}

function toggleBurgerMenu() {
    const menuButton = document.getElementById("menu-button");
    const container = document.getElementById("mobile-nav-container");

    if (menuButton.innerHTML === '<i class="fa-solid fa-bars"></i>') {
        menuButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';

        const menuList = document.createElement('ul');
        menuList.id = "menu-list";
        menuList.className = "list-none flex flex-col w-full mobile-nav-list";

        const menuItems = {
            "Home": "/",
            "Fähigkeiten": "/skills.html",
            "Portfolio": "/portfolio.html",
            "Kontakt": "/contact.html"
        };

        for (const [displayName, href] of Object.entries(menuItems)) {
            const link = document.createElement('a');
            link.className = "nav-link";
            link.textContent = displayName;
            link.href = href;
            menuList.appendChild(link);
        }


        container.appendChild(menuList);

        requestAnimationFrame(() => {
            menuList.classList.add('open');
        });
    } else {
        const menuList = document.getElementById("menu-list");
        if (menuList) {
            menuList.classList.remove('open');
            menuList.classList.add('closing');

            menuList.addEventListener('transitionend', () => {
                if (menuList.parentNode) {
                    menuList.parentNode.removeChild(menuList);
                }
            }, {once: true});
        }
        menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
}
