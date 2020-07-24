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
        $('.logotype').toggleClass('logo-hide');
    });
});
$(document).ready(function() {
    var cardW = $('body').width(); //присваиваем сначение ширины экрана переменной
    if (cardW < 769) { //условие
        $('.jobs-cards').removeClass('row'); //удаляем класс
        $('.contacts-cards').removeClass('row');
        $('.skills-cards').removeClass('d-flex');


    } else {
        $('.jobs-cards').addClass('row'); //добавляем класс
        $('.contacts-cards').addClass('row');
        $('.skills-cards').addClass('d-flex');
    }
    $(window).resize(function() { //проверка на изменение размера элемента, в нашем случае window (для работы при динамическом изменении окна)
        var cardW = $('body').width(); //присваиваем сначение ширины экрана переменной
        if (cardW < 769) { //условие
            $('.jobs-cards').removeClass('row'); //удаляем класс
            $('.contacts-cards').removeClass('row');
            $('.skills-cards').removeClass('d-flex');

        } else {
            $('.jobs-cards').addClass('row'); //добавляем класс
            $('.contacts-cards').addClass('row');
            $('.skills-cards').addClass('d-flex');
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
var LANGUAGE;

$.redrawLanguage = function(lang) {
    $.ajax({
        url: 'languages/' + lang + '.json', //тянем файл с языком
        dataType: 'json',
        success: function(response) {
            LANGUAGE = response; //записываем в глобальную переменную, а вдруг пригодиться
            $('body').find("[lng]").each(function() //ищем все элементы с атрибутом
                {
                    var lng = LANGUAGE[$(this).attr('lng')]; //берем нужное значение по атрибуту lng
                    var tag = $(this)[0].tagName.toLowerCase();
                    switch (tag) //узнаем название тега
                    {
                        case "input":
                            $(this).val(lng);
                            break;
                        default:
                            $(this).html(lng);
                            break;
                    }
                });
        }
    });
}
$.getLanguage = function(key) {
    if (typeof(LANGUAGE[key]) != 'undefined') //если есть переменная
    {
        return LANGUAGE[key]; //возвращаем значение
    }
    return key; //если нет, тогда ключ
}