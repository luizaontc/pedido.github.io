$(document).ready(function () {
    $('#nao').mouseover(function () {
        var screenWidth = $(window).width();
        var screenHeight = $(window).height();

        var randomX = Math.random() * (screenWidth - 100);
        var randomY = Math.random() * (screenHeight - 50);

        $('#nao').css({
            'position': 'absolute',
            'left': randomX + 'px',
            'top': randomY + 'px'
        });
    });

    $('#nao').click(function (e) {
        e.preventDefault();
        return false;
    });
});

$("#sim").click(function () {
    $("#euemeuamor").removeAttr("hidden");
    $("#txt1, #txt2, #sim, #nao").attr("hidden", "hidden"); // Oculta os elementos com o atributo hidden
    $("#txt1").text("Te amo!!!").css("color", "red");
    $("#txt1").removeAttr("hidden");
});