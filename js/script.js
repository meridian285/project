new WOW({
    animateClass: 'animate__animated',
}).init();

$(document).ready(function() {
    $('.image-link').magnificPopup({type:'image'});
});

$('.image-popup').magnificPopup({
    type: 'image'
});

$(document).ready(() => {

    // slider
    $('.single-item').slick();

// accordoin
    $(function () {
        $("#accordion").accordion({
            icons: false,
            heightStyle: "content",
            collapsible: true,
            active: false
        });
    });

    let indexInput = $('#index');
// ограничение ввода в поле index (только цифры)
    indexInput.on('input', function () {
        $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
    });

// проверки что поля не пустые
    function checkInputs() {
        if (!$('#name').val()) {
            alert('Поле Имя является обязательным для заполнения')
            return;
        }
        if (!$('#lastName').val()) {
            alert('Поле Фамилия является обязательным для заполнения')
            return;
        }
        if (!$('#phone').val()) {
            alert('Поле Телефон является обязательным для заполнения')
            return;
        }
        if (!$('#country').val()) {
            alert('Поле Страна является обязательным для заполнения')
            return;
        }
        if (!indexInput.val()) {
            alert('Поле Индекс является обязательным для заполнения')
            return;
        } else if ($('#index').val().toString().length !== 6) {
            alert('В поле должно быть введено 6 цифр')
            return;
        }
        if (!$('#address').val()) {
            alert('Поле Адрес является обязательным для заполнения')
            return;
        }

        $('.form-section').css('display', 'none')
        $('.message').css('display', 'block')
    }

// событие клика по кнопке Отправить
// $('#button').click(checkInputs)


// валидация формы через плагин jquery validation, нужно поменять тип кнопки на submit
    $('#form').validate({
        rules: {
            name: {
                required: true,
            },
            lastName: {
                required: true,
            },
            phone: {
                required: true,
            },
            country: {
                required: true,
            },
            index: {
                required: true,
                minlength: 6,
            },
            address: {
                required: true,
            },
        },
        messages: {
            name: 'Это поле является обязательным',
            lastName: 'Это поле является обязательным',
            phone: 'Это поле является обязательным',
            country: 'Это поле является обязательным',
            index: {
                required: 'Это поле является обязательным',
                minlength: 'Длина индекса должна составлять не менее 6 символов',
            },
            address: 'Это поле является обязательным',
        },
        submitHandler: function () {
            $('.form-section').css('display', 'none')
            $('.message').css('display', 'block')
        }
    });

    // скролл к форме
    $('.slide-btn').on('click', function() {
        $('html, body').animate({
            scrollTop: $('.order-section').offset().top
        }, {
            duration: 200,
            easing: "linear"
        });
        return false;
    });
})

