//Прокрутка сторінки
function slowScroll(id) {
    var offset = 0;
    $('html, body').animate({
        scrollTop: $(id).offset().top - 30
    }, 800);
    return false;
}
//Валідація


$(function () {
    $("#feedback-form").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                    email: true
            },
            phone: {
                required: true,
                digits: true
            },
            message: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            name: {
                required: "Ви не ввели ім'я"
            },
            email: {
                required: 'Ви не ввели email',
                email: 'Введіть email коректно'
            },
            phone: {
                required: 'Ви не ввели телефон',
                digits: 'Введіть тільки цифри'
            },
            message: {
                required: 'Ви не заповнили поле',
                minlength: 'Введіть не менше 6 симловів'
            }
        }
    });
});


