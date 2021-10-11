    // Variable to hold request
    var request;

    var url = window.location.href;
    $(document).ready(function() {
    });

    console.log(url);
    const form = document.forms['orderform'] ; 


    $("#orderform").submit(function(event) {
        console.log("rrrrrrrrrrrrrrrrrr");
        console.log(form);
            var fd = new FormData(form); 

            fetch(

                "https://script.google.com/macros/s/AKfycbw8ObbV5HILHXX7K739L3g1nX9KYDpnCwp-7_nkJgG7Mkn4TYmQuwNq-tmqloG8K3lc/exec"
                , {
            method: 'POST',

            body: fd
            })
            .then(function (result) {
            // alert("then");
            window.location.href = 'thanks.html';
            })
            .catch (function (error) {
            alert("catch");
            });

        event.preventDefault();
    });