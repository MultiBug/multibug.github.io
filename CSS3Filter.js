
function filtering() {
    var pan1 = $('#blur').val();
    var pan2 = $('#brightness').val();
    var pan3 = $('#contrast').val();
    var pan4_1 = $('#x-shadow').val();
    var pan4_2 = $('#y-shadow').val();
    var pan4_3 = $('#spread').val();
    var pan4_4 = $('#color').val();
    var pan5 = $('#grayscale').val();
    var pan6 = $('#hue').val();
    var pan7 = $('#invert').val();
    var pan8 = $('#opacity').val();
    var pan9 = $('#saturate').val();
    var pan0 = $('#sepia').val();

    var img = $("#img");

    img.css({
        WebkitFilter: 'blur(' + pan1 + 'px) brightness(' + pan2 + '%) contrast(' + pan3 + '%) drop-shadow(' + pan4_1 + 'px ' + pan4_2 + 'px ' + pan4_3 + 'px ' + pan4_4 + ') grayscale(' + pan5 + '%) hue-rotate(' + pan6 + 'deg) invert(' + pan7 + '%) opacity(' + pan8 + '%) saturate(' + pan9 + '%) sepia(' + pan0 + '%)',

        MozFilter: 'blur(' + pan1 + 'px) brightness(' + pan2 + '%) contrast(' + pan3 + '%) drop-shadow(' + pan4_1 + 'px ' + pan4_2 + 'px ' + pan4_3 + 'px ' + pan4_4 + ') grayscale(' + pan5 + '%) hue-rotate(' + pan6 + 'deg) invert(' + pan7 + '%) opacity(' + pan8 + '%) saturate(' + pan9 + '%) sepia(' + pan0 + '%)',

        filter: 'blur(' + pan1 + 'px) brightness(' + pan2 + '%) contrast(' + pan3 + '%) drop-shadow(' + pan4_1 + 'px ' + pan4_2 + 'px ' + pan4_3 + 'px ' + pan4_4 + ') grayscale(' + pan5 + '%) hue-rotate(' + pan6 + 'deg) invert(' + pan7 + '%) opacity(' + pan8 + '%) saturate(' + pan9 + '%) sepia(' + pan0 + '%)'
    });

    $('#percent1').html(pan1 + 'px');
    $('#percent2').html(pan2 + '%');
    $('#percent3').html(pan3 + '%');
    $('#percent4-1').html(pan4_1 + 'px');
    $('#percent4-2').html(pan4_2 + 'px');
    $('#percent4-3').html(pan4_3 + 'px');
    $('#percent4-4').html(pan4_4);
    $('#percent5').html(pan5 + '%');
    $('#percent6').html(pan6 + 'deg');
    $('#percent7').html(pan7 + '%');
    $('#percent8').html(pan8 + '%');
    $('#percent9').html(pan9 + '%')
    $('#percent0').html(pan0 + '%')
}