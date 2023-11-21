 // JavaScript untuk manipulasi langsung pada alpha warna saat di-scroll
 document.addEventListener("scroll", function () {
    var header = document.getElementById("main-header");
    var alpha = window.scrollY / 200; // Sesuaikan angka ini untuk mengontrol kecepatan perubahan alpha
    header.style.backgroundColor = "rgba(143, 174, 144, " + alpha + ")";
});