const results1 = document.querySelector(".selected-date1");
const results2 = document.querySelector(".selected-date2");
const image1 = document.querySelector(".animal1_image");
const image2 = document.querySelector(".animal2_image");

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

// Check compatability
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

    const animal1 = undefined || [];
    const animal2 = undefined || [];
    const possible_animals = ["monkey", "rooster", "dog", "pig", "rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "sheep"]

    // ----------------- date 1 ----------------------------
    checkLunarNewYear(date1_array, animal1, image1);

    // ------------------ date 2 ---------------------------
    checkLunarNewYear(date2_array, animal2, image2);

    var compatability = compatible(animal1, animal2);
    

    // check for lunear new years
    function checkLunarNewYear(date_array, animal, image) {
        if (date_array[0] == '01' || date_array[0] == '02') {
            $.getJSON("	https://calendarific.com/api/v2/holidays?api_key=c951006e5e01815f962e4160bb7ae11ee5587f05&country=US&year=" + date_array[2], function (data) {
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
                            image.src = "/images/animals/" + String(animal[0]) + ".jpeg";
                            console.log(animal)
                        }
                        else if (date_array[1] < chinese_new_year[1]) {
                            // birthay is before chinese new year
                            // use animal before
                            date_array[2] = date_array[2] - 1;
                            console.log("day", date_array[2]);

                            animal = findAnimal(date_array, animal, possible_animals);
                            image.src = "/images/animals/" + String(animal[0]) + ".jpeg";
                            console.log(animal)
                        }
                    }
                });

            });
        }
        else {
            animal = findAnimal(date_array, animal, possible_animals);
            image.src = "/images/animals/" + String(animal[0]) + ".jpeg";
            console.log(animal)
        }
    }

    // finds the chinese zodiac animals
    function findAnimal(date_array, animal, possible_animals) {
        switch (date_array[2] % 12) {
            case 0:
                animal[0] = possible_animals[0];
                animal[1] = 0
                break;
            case 1:
                animal[0] = possible_animals[1];
                animal[1] = 1
                break;
            case 2:
                animal[0] = possible_animals[2];
                animal[1] = 2
                break;
            case 3:
                animal[0] = possible_animals[3];
                animal[1] = 3
                break;
            case 4:
                animal[0] = possible_animals[4];
                animal[1] = 4
                break;
            case 5:
                animal[0] = possible_animals[5];
                animal[1] = 5
                break;
            case 6:
                animal[0] = possible_animals[6];
                animal[1] = 6
                break;
            case 7:
                animal[0] = possible_animals[7];
                animal[1] = 7
                break;
            case 8:
                animal[0] = possible_animals[8];
                animal[1] = 8
                break;
            case 9:
                animal[0] = possible_animals[9];
                animal[1] = 9
                break;
            case 10:
                animal[0] = possible_animals[10];
                animal[1] = 10
                break;
            case 11:
                animal[0] = possible_animals[11];
                animal[1] = 11
                break;
            default:
                animal[0] = "error";
        }
        return animal;
    }

    // check compatibility of two animals
    function compatible(animal1, animal2) {
        const chart = [
            [5, 5, 0, 5, 5, 2, 1, 4, 2, 1, 4, 0], // monkey
            [0, 5, 4, 0, 5, 5, 0, 1, 1, 0, 0, 1], // rooster
            [4, 1, 4, 5, 0, 1, 1, 0, 4, 0, 1, 4], // dog
            [4, 3, 5, 5, 2, 0, 4, 5, 0, 1, 4, 2]  // pig
            [1, 5, 1, 5, 5, 2, 0, 3, 4, 0, 4, 4], // rat
            [5, 1, 0, 4, 0, 5, 0, 0, 1, 5, 4, 3], // ox
            [1, 0, 0, 1, 4, 0, 5, 2, 0, 4, 4, 5], // tiger
            [4, 4, 1, 1, 1, 0, 1, 5, 5, 0, 5, 5], // rabbit
            [5, 0, 5, 1, 3, 4, 1, 0, 4, 4, 0, 2], // dragon
            [2, 4, 0, 0, 4, 0, 3, 0, 3, 5, 1, 0], // snake
            [0, 0, 5, 1, 1, 2, 0, 5, 1, 0, 1, 4], // horse
            [3, 0, 2, 5, 0, 0, 5, 4, 4, 1, 0, 5], // sheep
        ]
        
        var compatability = chart[animal1[1]][animal2[1]];
        console.log(compatability)

        const legend = [
            [0, "worst couple"],
            [1, "average"],
            [2, "good friend"],
            [3, "good match or enemy"],
            [4, "complementary"],
            [5, "perfect match"]
        ]

        var results = legend[compatability]
        console.log(results)

        return results
    }

})



