$(document).ready(function(e) {
    function getColor(c) {
        return $(c).attr('id');
    }
    let color;
    $(".mini-button").on("click", function() {
        color = getColor(this);
    });

    function onAdd(color) {
        // console.log('color', color);
    }
    $(".button").on("click", function() {
        onAdd(color);

        let toAdd = $("input[name=ListItem]").val();

        $('input').keyup(function() {
            str = $(this).val()
            str = str.replace(/\s/g, '')
            $(this).val(str)
        });

        if (!toAdd) {
            return false;
        }
        if (color == undefined) {
            return false;
        } else {
            $('ul').prepend("<li>" + "<div class = 'check__button " + color + "'>" + " <input class='status' type='checkbox'/>" + " <p class='text-item'>" + toAdd + "</p>" + "</div>" + "</li>" + "<br>");
            $("#form-id")[0].reset(); // clean input
            color = null;

        }
    });
    $(document).on("click", "input.status", function() {
        $(".check__button").on("click", "input.status", function() {
            let colors = ["f16d69", "f279a2", "9170cb", "5eb3f6", "67d7e5", "ffe083"];
            $(this).parent().css("background", "#" + getNumber(colors)); // random color
        });

        function getNumber(list) {
            return list[Math.floor(Math.random() * list.length)];
        }
        $(this).parent().find("p").toggleClass("complete");
    });

});