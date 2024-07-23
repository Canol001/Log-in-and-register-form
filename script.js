$(document).ready(function () {
    $('#show-register').click(function (e) {
        e.preventDefault();
        $('#form-container').css('transform', 'rotateY(180deg)');
    });
    $('#show-login').click(function (e) {
        e.preventDefault();
        $('#form-container').css('transform', 'rotateY(0deg)');
    });
});