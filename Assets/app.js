$(document).ready(function () {

    $(document).on('click', '.more-info', function () {
        event.preventDefault();
        $(this).html('<i class="fas fa-ellipsis-h text-white"></i>').removeClass('more-info').addClass('less-info');
        var card = $(this).attr('data-name')

        var thisCard = $('.project-info').filter(`[data-name = ${card}]`)
        thisCard.removeClass('d-none')

    })

    $(document).on('click', '.less-info', function () {
        event.preventDefault();
        $(this).html('<i class="fas fa-ellipsis-v mt-1 text-white"></i>').removeClass('less-info').addClass('more-info');
        $('.project-info').addClass('d-none')


    })

})