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

$('.calendar2',).on('click', function (e) {

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
$(".results").on("click", function () {
    sessionStorage.setItem("results1", results1.innerHTML)
    sessionStorage.setItem("results2", results2.innerHTML)

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

    var animal1, animal2
    const possible_animals = ["monkey", "rooster", "dog", "pig", "rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "sheep"]

    // ----------------- date 1 ----------------------------
    checkLunarNewYear(date1_array, animal1);

    // ------------------ date 2 ---------------------------
    checkLunarNewYear(date2_array, animal2);

    // check for lunear new years
    function checkLunarNewYear(date_array, animal) {
        if (date_array[0] == '01' || date_array[0] == '02') {
            $.getJSON("	https://calendarific.com/api/v2/holidays?api_key=c951006e5e01815f962e4160bb7ae11ee5587f05&country=US&year=" + date_array[2], function (data) {
                // console.log(data.response.holidays)
                // console.log(date1);
                const holidays = data.response.holidays;
                holidays.forEach(element => {
                    // get the Chinese New Year date for the year
                    if (element.name == "Chinese New Year") {
                        console.log(element.name);
                        console.log(element.date.datetime);
                        const chinese_new_year = [element.date.datetime.month, element.date.datetime.day, element.date.datetime.year];
                        console.log(chinese_new_year);
                        if (date_array[0] < chinese_new_year[0]) {
                            // month is before chinese year new
                            date_array[2] = date_array[2] - 1;
                            console.log("month", date_array[2]);

                            animal = findAnimal(date_array, animal, possible_animals);
                            console.log(animal)
                        }
                        else if (date_array[1] < chinese_new_year[1]) {
                            // birthay is before chinese new year
                            // use animal before
                            date_array[2] = date_array[2] - 1;
                            console.log("day", date_array[2]);

                            animal = findAnimal(date_array, animal, possible_animals);
                            console.log(animal)
                        }
                    }
                });

            });
        }
        else {
            animal1 = findAnimal(date1_array, animal1, possible_animals);
            console.log(animal1)
        }
    }

    function findAnimal(date_array, animal, possible_animals) {
        switch (date_array[2] % 12) {
            case 0:
                animal = possible_animals[0];
                break;
            case 1:
                animal = possible_animals[1];
                break;
            case 2:
                animal = possible_animals[2];
                break;
            case 3:
                animal = possible_animals[3];
                break;
            case 4:
                animal = possible_animals[4];
                break;
            case 5:
                animal = possible_animals[5];
                break;
            case 6:
                animal = possible_animals[6];
                break;
            case 7:
                animal = possible_animals[7];
                break;
            case 8:
                animal = possible_animals[8];
                break;
            case 9:
                animal = possible_animals[9];
                break;
            case 10:
                animal = possible_animals[10];
                break;
            case 11:
                animal = possible_animals[11];
                break;
            default:
                animal = "error";
        }
        // console.log(2022 % 12);
        // console.log(animal);
        return animal;
    }
})



