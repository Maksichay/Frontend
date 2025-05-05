$(document).ready(function () {
    $(".accordion .question .title").click(function() {
        $(".accordion .question .title").not($(this)).removeClass("active");
        $(".accordion .question .text").not($(this).next()).slideUp(300);
        $(this).toggleClass("active").next().slideToggle(300);
    })

    $("#warning-popup").on("click", function(event) {
        if ($(event.target).hasClass($(this).attr("class").split(' ')[0])) {
            $(this).addClass("hidden");
        }
    });

    $(".button-vote").on("click", function(event) {
        $("#warning-popup").removeClass("hidden");
    });

    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has("voted") && urlParams.get("voted") === "true") {
        $("#done-popup").removeClass("hidden");
    }

    $("#done-popup").on("click", function(event) {
        if ($(event.target).hasClass($(this).attr("class").split(' ')[0])) {
            $(this).addClass("hidden");
        }
    });
});