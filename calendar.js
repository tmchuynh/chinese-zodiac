
let select_date = document.querySelector(".result");

$(".calendar").datepicker({
    dateFormat: 'mm/dd/yy',
    firstDay: 1
});

$(document).on('click', '.date-picker .input', function (e) {
    let $me = $(this),
        $parent = $me.parents('.date-picker');
    $parent.toggleClass('open');

});

$(".calendar").on("change", function () {
    let $me = $(this);
    let $selected = $me.val();
    let $parent = $me.parents('.date-picker');

    console.log($parent)

    let results = document.querySelector(".selected-date");

    console.log(results)

    results.innerHTML = $parent.context.value;


});