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
    console.log("Toggling Burger Menu List");
    document.getElementById("menu-list").classList.toggle("sm:hidden");
    if (document.getElementById("menu-button").innerHTML === '<i class="fa-solid fa-bars"></i>') {
        document.getElementById("menu-button").innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        document.getElementById("menu-button").innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
}
