var countryObject;

let findCountryObjectFunction = (country) => {
    const countryObject = data.find(data => data.name === country);

    console.log("Fetch: ", country);
    let languages = "";

    for (let i = 0; i < countryObject["languages"].length; i++) {
        if (i === (countryObject["languages"].length - 1)) {
            languages += `${countryObject["languages"][i]["name"]}.`;
        } else {
            languages += `${countryObject["languages"][i]["name"]}, `;
        }
        // languages += `${findCountryObject["languages"][i]["name"]} `;
    }

    let currencies = "";

    for (let i = 0; i < countryObject["currencies"].length; i++) {
        if (i === (countryObject["currencies"].length - 1)) {
            currencies += `${countryObject["currencies"][i]["name"]}.`;
        } else {
            currencies += `${countryObject["currencies"][i]["name"]}, `;
        }
        // currencies += `${findCountryObject["currencies"][i]["name"]} `;
    }

    console.log(`<img src="${countryObject["flag"]}" width="150" style="border:2px solid black"></a>`);
    console.log(`<p>Native Name: "${countryObject["nativeName"]}" => ${countryObject["name"]} --> ${countryObject["subregion"]} --> ${countryObject["region"]}</p><p>Language(s): ${languages} - Currencie(s): ${currencies} - Calling Code: +${countryObject["callingCodes"][0]}</p>`);

}


let fetchCountry = () => {
    fetch(`https://restcountries.eu/rest/v2/all`)
        .then(response => response.json())
        .then(data => {
            // const findCountryObject = data.find(data => data.name === country);
            countryObject = data;
        }
        )
        .catch(err => console.log(err));
};


console.log(fetchCountry());
console.log(findCountryObjectFunction("Ireland"));


/* Fetch All Countries */
/* fetch(`https://restcountries.eu/rest/v2/all`)
    .then(response => response.json())
    .then(data => {
        const findObjectIreland = data.find(data => data.name === 'Ireland');

        document.querySelector("#status").innerHTML = `Name: ${findObjectIreland["name"]}, Native Name: ${findObjectIreland["nativeName"]}, Subregion: ${findObjectIreland["subregion"]},
         Region: ${findObjectIreland["region"]}, Language(s): ${findObjectIreland["languages"][0]["name"]}, ${findObjectIreland["languages"][0]["name"]}, Currencies: ${findObjectIreland["currencies"][0]["name"]}`;
        document.querySelector("#flag").innerHTML = `<img src="${findObjectIreland["flag"]}" width="100"></a>`;

        const findObjectFrance = data.find(data => data.name === 'France');
        console.log(findObjectFrance);


        console.log(findObjectIreland);
        document.querySelector("#status").innerHTML += `<p>${findObjectIreland}</p>`;

        console.log(findObjectIreland["alpha2Code"]);
        document.querySelector("#status").innerHTML += `<p>${findObjectIreland["alpha2Code"]}</p>`;

        console.log(findObjectIreland["currencies"][0]["name"]);
        document.querySelector("#status").innerHTML += `<p>${findObjectIreland["currencies"][0]["name"]}</p>`;
        console.log(findObjectIreland["languages"][0]["name"]);
        console.log(findObjectIreland["languages"][1]["name"]);
        console.log(findObjectIreland["latlng"].length);
        for (let i = 0; i < findObjectIreland["languages"].length; i++) {
            console.log(findObjectIreland["languages"][i]["name"]);
        }

        console.log(data);
        console.log(data[0]["name"]);
        }
    )
    .catch(err => console.log(err));
 */



// /**
// * Index of Multidimensional Array
// * @param arr {!Array} - the input array
// * @param k {object} - the value to search
// * @return {Array}
// */
// function getIndexOfK(arr, k) {
//     for (var i = 0; i < arr.length; i++) {
//         var index = arr[i].indexOf(k);
//         if (index > -1) {
//             return [i, index];
//         }
//     }
// }


// // Generate Sample Data
// var k = 0;
// var array = [];
// for (var i = 0; i < 10; i++) {
//     array[i] = [];
//     for (var j = 0; j < 100; j++) {
//         k = k + 1;
//         array[i].push(k);
//     }
// }
// var needle = 100;
// var result = getIndexOfK(array, needle);
// console.log('The value #' + needle + ' is located at array[' + result[0] + '][' + result[1] + '].');
// console.log(array);