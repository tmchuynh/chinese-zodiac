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
const date1_array = date1.split("/")
console.log(date1_array)
const date2_array = date2.split("/")
console.log(date2_array)

var animal1
var animal2
const possible_animals = ["monkey", "rooster", "dog", "pig", "rate", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "sheep"]

// ----------------- date 1 ----------------------------
switch (date1_array[2] % 12) {
    case 0:
        animal1 = possible_animals[0]
        break;
    case 1:
        animal1 = possible_animals[1]
        break;
    case 2:
        animal1 = possible_animals[2]
        break;
    case 3:
        animal1 = possible_animals[3]
        break;
    case 4:
        animal1 = possible_animals[4]
        break;
    case 5:
        animal1 = possible_animals[5]
        break;
    case 6:
        animal1 = possible_animals[6]
        break;
    case 7:
        animal1 = possible_animals[7]
        break;
    case 8:
        animal1 = possible_animals[8]
        break;
    case 9:
        animal1 = possible_animals[9]
        break;
    case 10:
        animal1 = possible_animals[10]
        break;
    case 11:
        animal1 = possible_animals[11]
}
console.log(2022 % 12)
console.log(animal1)

// check for lunar new years
if (date1_array[0] == '01' || date1_array[0] == '02') {
    $.getJSON("	https://calendarific.com/api/v2/holidays?api_key=c951006e5e01815f962e4160bb7ae11ee5587f05&country=US&year=" +date1_array[2], function(data) {
        console.log(data)
        console.log(date1)
        data.response.holidays.forEach(element => {
            if (element.date.name == "Chinese New Year") {
                // need to find corect date
                console.log(element.date.datetime)
            }
        });
    })
}

// ------------------ date 2 ---------------------------
switch (date2_array[2] % 12) {
    case 0:
        animal2 = possible_animals[0]
        break;
    case 1:
        animal2 = possible_animals[1]
        break;
    case 2:
        animal2 = possible_animals[2]
        break;
    case 3:
        animal2 = possible_animals[3]
        break;
    case 4:
        animal2 = possible_animals[4]
        break;
    case 5:
        animal2 = possible_animals[5]
        break;
    case 6:
        animal2 = possible_animals[6]
        break;
    case 7:
        animal2 = possible_animals[7]
        break;
    case 8:
        animal2 = possible_animals[8]
        break;
    case 9:
        animal2 = possible_animals[9]
        break;
    case 10:
        animal2 = possible_animals[10]
        break;
    case 11:
        animal2 = possible_animals[11]
}
console.log(2022 % 12)
console.log(animal2)