 var obj = [
    {
        name: 'Diana',
        born: 1373925600000, // Mon, Jul 15 2013
        num: 4,
        sex: 'female'
    }, {

        name: 'Beyonce',
        born: 1366832953000, // Wed, Apr 24 2013
        num: 2,
        sex: 'female'
    }, {
        name: 'Albert',
        born: 1370288700000, // Mon, Jun 3 2013
        num: 3,
        sex: 'male'
    }, {
        name: 'Doris',
        born: 1354412087000, // Sat, Dec 1 2012
        num: 1,
        sex: 'female'
    },{
        name: 'Victoria',
        born: 135441203420, // Sat, Dec 1 2012
        num: 5,
        sex: 'female'
    }
];

// function sortener(items, param) {
export default function sortener(items, param) {

    const params = items.map((item) => {

        return item[param]
    })
    params.sort();



    var shortedObj = [];
    var counter = 0;

    
            while(shortedObj.length < params.length) {
                
                let i;
                for (i in items) {
                    
                    if (items[i][param] === params[counter]) {
                        shortedObj.push(items[i])
                        counter += 1;

                }

            }

    }
    return shortedObj;
}


// console.log(sortener(obj, "name"));




