function solve(table){
    let arr = [];
    table.shift()
    for (const line of table) {
        
        let lineInfo = line.split('|').map(t => t.trim()).filter(x => x.length != 0)
        ;
        // for (const l of lineInfo) {
        //     if (l) {
        //         lineInfo.shift();
        //     }
        // }
        
        let [Town, Latitude, Longitude] = lineInfo;
        arr.push(
            {Town: Town, Latitude: Latitude, Longitude: Longitude}
        )
        
    }
    console.log(arr);
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)