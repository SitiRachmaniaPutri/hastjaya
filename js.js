//Navigation
function toggleMenu(sectionId) {
    const targetElement = document.querySelector(sectionId);

    // Scroll ke elemen tersebut
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // Jika menggunakan toggleMenu(), tambahkan logika untuk menutup menu di sini jika diperlukan
        toggleMenu(); 
    }
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}
//Navigation End

//Dark and Light Mode
function lightDark() {
    const lightDark = document.querySelector(".lightDark");
    lightDark.classList.toggle("active");
    var element = document.body;
    element.classList.toggle("dark-mode");
}
//Dark and Light Mode End