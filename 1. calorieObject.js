 function solve(array){
    let obj = {};

    // for (let index = 0; index < array.length; index += 2) {
    //     let product = array[index];
    //     let calories = array[index + 1];
    //     obj[product] = Number(calories);
        
    // }

    while(array.length !== 0){
        let product = array.shift();
        let calories = array.shift();
        
        obj[product] = Number(calories);
    }
    console.log(obj);
 }

 solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])