function solve(arr){
    let obj = {}
    
    for (const iterator of arr) {
        town_arr = iterator.split(' | ');
        let town = town_arr.shift();
        let product = town_arr.shift();
        let price = Number(town_arr.shift());
        
        if(!obj.hasOwnProperty(product)){
            obj[product] = {price, town}
        } else {
            if(price < obj[product].price) {
                obj[product] = {town, price}
            }
        }
    }

    let productNames = Object.keys(obj)
    for (let index = 0; index < productNames.length; index++) {
        let productName = productNames[index];
        console.log(`${productName} -> ${obj[productName].price} (${obj[productName].town})`);
        
    }
}

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)