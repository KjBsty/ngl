$(document).ready(function () {
    
    $('textarea').focus(function () {
        $('.bottom-container').hide()
    })

    $('textarea').blur(function () {
        $('.bottom-container').show()
    })

    $('textarea').on('input', function (e) {
        if (e.target.value == '') {
            $('.submit').hide()
        } else {
            $('.submit').show()
        }
    });

    if (!window.localStorage.getItem('deviceId')) {
        function uuidv4() {
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        }
        window.localStorage.setItem('deviceId', uuidv4())
    }


    setInterval(() => {
        let clickCount = parseInt($('.clickCount').text())
        clickCount += Math.floor(Math.random() * 5) - 1
        $('.clickCount').text(clickCount)
    }, 800)


});