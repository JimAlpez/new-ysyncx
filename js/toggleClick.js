$(document).ready(function() {
    $(".block-toggle").on("click", function() {
        const targetId = $(this).data("target");
        const targetElement = $(targetId);
        const chevronIcon = $(this).find("i");

        targetElement.slideToggle(function() {
        if (targetElement.is(":visible")) {
            chevronIcon.removeClass("bx-chevron-down").addClass("bx-chevron-up");
            chevronIcon.removeClass("leading-4").addClass("leading-5");
        } else {
            chevronIcon.removeClass("bx-chevron-up").addClass("bx-chevron-down");
            chevronIcon.removeClass("leading-5").addClass("leading-4");
        }
        });
    });
});