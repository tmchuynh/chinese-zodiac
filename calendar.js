var results1 = document.querySelector(".selected-date1");
var results2 = document.querySelector(".selected-date2");

$(".calendar1").datepicker({
    dateFormat: 'mm/dd/yy',
    firstDay: 1
});

$(".calendar2").datepicker({
    dateFormat: 'mm/dd/yy',
    firstDay: 1
});

$(document).on('click', '.date-picker1 .input1', function (e) {
    let $me = $(this),
        $parent = $me.parents('.date-picker1');
    $parent.toggleClass('open');

});

$(document).on('click', '.date-picker2 .input2', function (e) {
    let $me = $(this),
        $parent = $me.parents('.date-picker2');
    $parent.toggleClass('open');

});

$(".calendar1").on("change", function () {
    let $me = $(this);
    let $selected = $me.val();
    let $parent = $me.parents('.date-picker1');

    console.log($parent)

    

    console.log(results)

    results1.innerHTML = $parent.context.value;


});

$(".calendar2").on("change", function () {
    let $me = $(this);
    let $selected = $me.val();
    let $parent = $me.parents('.date-picker2');

    console.log($parent)

    

    console.log(results)

    results2.innerHTML = $parent.context.value;



});

export { results1, results2 }