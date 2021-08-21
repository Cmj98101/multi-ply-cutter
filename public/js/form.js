$('form').submit(function (e) {
    $("#submit").attr("disabled", true);
    e.preventDefault();
    $.ajax({
        type: 'post',
        url: 'send',
        data: $(this).serialize(),
        success: function () {
            $("#submit").attr("disabled", false);
            $('form')[0].reset(); // to reset the form
            // $('#contact').hide(); // to hide the Contact article
            $('#success-message').show(); // to show the hidden message
        }
    })
})