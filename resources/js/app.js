import "./bootstrap";
import "flowbite";

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var navbar = document.getElementById("navigation_bar");
        if (window.scrollY > 50) {
            navbar.classList.add("fixed");
        } else {
            navbar.classList.remove("fixed");
        }
    });
});

$(function () {
    const $freeService = $("#free_service");
    const $premiumService = $("#premium_service");
    const $servicePrice = $("#service_price");
    const $premiumList = $("#premium_list");
    const $freeList = $("#free_list");

    $premiumService.on("click", function () {
        $freeService.removeClass("bg-sp-orange text-white");
        $premiumService.addClass("bg-sp-orange text-white");
        $premiumService.removeClass("bg-gray-200");
        $servicePrice.text(80);
        $premiumList.show();
        $freeList.hide();
    });

    $freeService.on("click", function () {
        $premiumService.removeClass("bg-sp-orange text-white");
        $premiumService.addClass("bg-gray-200");
        $freeService.addClass("bg-sp-orange text-white");
        $servicePrice.text(0);
        $premiumList.hide();
        $freeList.show();
    });
});

$(function () {
    $("#cookie_close").on("click", function () {
        $("#cookies-with-stacked-buttons").addClass("hidden");
    });
});
