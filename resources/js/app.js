import "./bootstrap";
import "flowbite";

/** Navigation Bar Settings **/
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

/** Home Page */

$(document).ready(function () {
    const $freeService = $("#free_service");
    const $premiumService = $("#premium_service");
    const $servicePrice = $("#service_price");
    const $featuresList = $("#features-list");

    $premiumService.on("click", function () {
        updateServiceSelection($freeService, $premiumService, 80);
    });

    $freeService.on("click", function () {
        updateServiceSelection($premiumService, $freeService, 0);
    });

    function updateServiceSelection($toRemove, $toAdd, price) {
        $toRemove.removeClass("bg-sp-orange text-white");
        $toAdd.addClass("bg-sp-orange text-white").removeClass("bg-gray-200");
        const data = get_value_free_and_premium(price);
        $servicePrice.text(data.service_price);
        updateFeatureList(data.features);
    }

    function get_value_free_and_premium(value) {
        const features_80 = [
            "Free Storage 90 Days",
            "Detail Images for Packages Unlimited",
            "Free Consolidation",
            "$3 or 3.00% Assisted Purchase",
            "Extra Pictures",
            "Extra Packing",
            "Shipment Return",
            "Prepaid Labels",
        ];

        const features_0 = [
            "Free Storage 90 Days",
            "Detail Images for Packages Unlimited",
            "Free Consolidation",
            "$3 or 3.00% Assisted Purchase",
            "Extra Pictures",
            "Extra Packing",
            "Shipment Return",
            "Prepaid Labels",
        ];

        const selected_features = value === 80 ? features_80 : features_0;

        return {
            service_price: value,
            features: selected_features,
        };
    }

    function updateFeatureList(features) {
        $featuresList.empty();
        features.forEach(function (feature) {
            const $li = $("<li>").addClass("space-x-2");
            const $checkSpan = $("<span>")
                .addClass("text-sp-orange font-semibold")
                .html("&check;");
            const $textSpan = $("<span>").text(feature);
            $li.append($checkSpan).append($textSpan);
            $featuresList.append($li);
        });
    }
});
