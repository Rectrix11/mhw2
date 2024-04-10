function onscaricaClick()
{
    const scompare1 = document.querySelector(".foto-container");
    const scompare2 = document.querySelector(".info-1");
    const scompare3 = document.querySelector(".info-2");
    scompare1.classList.add("hidden");
    scompare2.classList.add("hidden");
    scompare3.classList.add("hidden");
}
const scarica = document.querySelector("#ScaricaApp")
scarica.addEventListener("click", onscaricaClick);

function ontrendingClick()
{
    const scompare4 = document.querySelector(".home-page-container");
    scompare4.classList.add("hidden");
}
const trending = document.querySelector("#Trending")
trending.addEventListener("click", ontrendingClick);

function cambiaimmagine () {
    const image = document.querySelector("#classifica1")
    const image2 = document.querySelector("#classifica2")
    image.classList.add("hidden");
    image2.classList.remove("hidden");
}
const img1 = document.querySelector("#classifica1");
img1.addEventListener("mouseover", cambiaimmagine);

function ripristinaimmagine () {
    const image = document.querySelector("#classifica1")
    const image2 = document.querySelector("#classifica2")
    image.classList.remove("hidden");
    image2.classList.add("hidden");
}
const img2 = document.querySelector("#classifica2");
img2.addEventListener("mouseout", ripristinaimmagine);


