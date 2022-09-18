const results1 = document.querySelector(".selected-date1");
const results2 = document.querySelector(".selected-date2");

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

$('.calendar2',).on('click', function(e) {
    
}), setInterval(50000);

$(".calendar1").on("change", function () {
    let $me1 = $(this);
    let $selected1 = $me1.val();
    let $parent1 = $me1.parents('.date-picker1');

    console.log($parent1)
    console.log(results1)

    results1.innerHTML = $parent1.context.value;


});

$(".calendar2").on("change", function () {
    let $me2 = $(this);
    let $selected2 = $me2.val();
    let $parent2 = $me2.parents('.date-picker2');

    console.log($parent2)
    console.log(results2)

    results2.innerHTML = $parent2.context.value;

});

// Put dates into storage
$(".results").on("click", function() {
    sessionStorage.setItem("results1", results1.innerHTML)
    sessionStorage.setItem("results2", results2.innerHTML)
})

// Retrieve dates
const date1 = sessionStorage.getItem("results1")
const date2 = sessionStorage.getItem("results2")

console.log(date1)
console.log(date2)

// Store dates into arrays
const date1_m = date1.split("/")
console.log(date1_m)
const date2_m = date2.split("/")
console.log(date2_m)