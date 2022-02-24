//  ****     https://jsoneditoronline.org/  ******
//    hayda bi nazzem el json bi shakel helo w bi 2ellak kam
// 3onsor bi albu , w kam array w kam oject w kam elemnent fi bel array
// w kam array fi bel objectw .... shi zarif
//  ///   /// 3ando fa2set save fo2 fik te5od mena linkw ta3ti la shabak "save online"



/// *****     https://jsonkeeper.com/    *****
// to a create ana api or a json link


// ***      https://jsonformatter.curiousconcept.com/        **
// to see the info stored in the json data/url




// ** https://jsonlint.com/  **
// for validation // bta3mul validate 3al syntax taba3 el json



// {
//     "country": "london",
//     "adresses": {
//         "Egypt": "cairo",
//         "KSA": "Riyadh",
//         "USA": [
//             "One",
//             "Two",
//             "Three"
//         ]
//     },
//     "Age": 36,
//     "Working": 3,
//     "identity": 4
// }


// Accessing
// myobject.skills[0]
// myobject.skills[0][1]


//downaload jsonview on chrome web store


// //json
// let productone = {
//     "name": "PC",
//     "price": 3500
// }
// // javascript
// let productone = {
//     "name": "PC",
//     "price": 3500
// }
// // javascript
// let productone = {
//     'name': 'PC',
//     'price': 3500
// }
// // javascript
// let productone = {
//     name: "PC",
//     price: 3500
// }
// // javascript
// let productone = {
//     name: 'PC',
//     price: 3500
// }



// //////////////////

// let productTwo = {
//     "name": "PC",
//     "price": 3500
// }

// let productThree = {
//     "name": "PC",
//     "price": 3500
// }

// let productFour = {
//     "name": "PC",
//     "price": 2500
// }

// console.log(productone.name);
// console.log(productTwo.name);
// console.log(productThree.name);
// console.log(productFour.name);






// parse mna3mla iza badna njib men el server ma3lumet aw
//ijene meno ma3lumet , mna3mul parse lal ma3lumet hawde
// w hene beyt7awalo la javascript


// let myJsonObject = '{"username":"Omar", "Age":25}';
// let myJsObject = JSON.parse(myJsonObject);

// console.log(myJsonObject);
// console.log(myJsObject);

// console.log(typeof myJsonObject); //string
// console.log(typeof myJsObject);//object


// stringify mna3mla iza badna n7awel
//neb3at el js 3a server..mn7awelon la string men 5ilel
// JSON.stringify

// let myJsObject = { username: "Omar", Age: 25 };
// let myJsonObject = JSON.stringify(myJsObject);

// console.log(myJsObject);
// console.log(typeof myJsObject);

// console.log(myJsonObject); //string
// console.log(typeof myJsonObject);//object



//php example
// <?php
//$json = '["HTML","CSS"]';
//var_dump($json);

//echo

//yaane he ka2ana el parse
//$phpArray = json_decode($json);
//var_dump($phpArray);


//echo '<br>'

//foreach ($phpArray as $arr) {
// echo $arr . '<br>'
// }


////
// $phpArray =  array('HTML','CSS')
// var_dump($phpArray);

// echo '<br>'

// encode bet7awel la JSON
// $json = json_encode($phpArray);
// var_dump($json);

///////////////////////////////////

let myJson = '{"username":"osama" ,"age" : 36}';
let myJs = JSON.parse(myJson);

document.getElementById("name").innerHTML = "My Name Is " + myJs.username;
document.getElementById("age").innerHTML = "My Age Is " + myJs.age;