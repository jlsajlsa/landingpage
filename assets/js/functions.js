// Cambia el texto del titulo en base al nombre de la seccion actual
function changeTitleText(){
    var currentSection = document.getElementsByClassName('nav-item active');
    var sectionTitle = document.getElementById('section-title');

    if (currentSection.length > 0) {
        var text = currentSection[0].textContent;
        sectionTitle.textContent = text;
    }
}

// Funcion que hace que el titulo principal haga clic en el boton de bootstrap
function clickMainTitle(){
    var boton = document.getElementById("section-title");
    var mainNavbar = document.getElementById("main-navbar-toggler");

    if (boton && mainNavbar) {
            boton.onclick = function() {
                mainNavbar.click();
            };
    }
}