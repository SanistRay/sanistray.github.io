$(document).ready(function() {
    // Добавить плавную прокрутку до всех ссылок
    $("a").on('click', function(event) {

        // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
        if (this.hash !== "") {
            // Запретить поведение щелчка якоря по умолчанию
            event.preventDefault();

            // Хранить хэш
            var hash = this.hash;

            // Использование метода animate() jQuery для добавления плавной прокрутки страницы
            // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
                window.location.hash = hash;
            });
        } // Конец, если
    });
});
$(document).ready(function() {
    $('.burger-toogle').click(function() { //при клике на класс
        $('#menu-hide').toggle(400); //скрываем элемент в течении 0.3с
    });
});
$(document).ready(function() {
    var cardW = $('body').width(); //присваиваем сначение ширины экрана переменной
    if (cardW < 769) { //условие
        $('.jobs-cards').removeClass('row'); //удаляем класс
        $('.contacts-cards').removeClass('row');

    } else {
        $('.jobs-cards').addClass('row'); //добавляем класс
        $('.contacts-cards').addClass('row');
    }
    $(window).resize(function() { //проверка на изменение размера элемента, в нашем случае window (для работы при динамическом изменении окна)
        var cardW = $('body').width(); //присваиваем сначение ширины экрана переменной
        if (cardW < 769) { //условие
            $('.jobs-cards').removeClass('row'); //удаляем класс
            $('.contacts-cards').removeClass('row');

        } else {
            $('.jobs-cards').addClass('row'); //добавляем класс
            $('.contacts-cards').addClass('row');
        }
    });
});
$(document).ready(function() {
    $('#developbutton').click(function() {
        $('.develop').show();
        $('.design').hide(500);
    });
    $('#allbutton').click(function() {
        $('.design').show();
        $('.develop').show();
    });
    $('#designbutton').click(function() {
        $('.design').show();
        $('.develop').hide(500);
    });
});