$(document).ready(function () {
    //menu
    var flag = true;
    $('.icon-menu').click(function () {
        if (flag) {
            flag = false;
            $(this).toggleClass("change");
            $('.items-menu').slideToggle(function () {
                flag = true;
            });
        }
    });


// по клику на точки слайдится текст
    $('.list-item-1 .item').on('click', function () {
        var indexItem = $(this).index();

        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        $('.list-item-2 .item').removeClass('fade-in-down');
        $('.list-item-2 .item').eq(indexItem).addClass('fade-in-down');
    });
});

