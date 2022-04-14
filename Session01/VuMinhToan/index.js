

// cau 1
function formatMoney(price) {
    
        const prices = parseFloat(price).toFixed(2).split('');
        let index = prices.length - 3;
        while((index -= 3) > 0) {
            prices.splice(index, 0 ,',');
            
        }
        console.log('format money: ' , prices.join(''));   
}

// cau 2
function formatWallet(money, decimal) {
    console.log((money / 1000).toFixed(decimal) + 'K');
}

// cau 3
function factorial(n) {
    let factorial = 1;
    for(let i = n; i > 0; i--) {
        factorial *= i;
    }
    console.log('factorial: ', factorial);
}

// cau 4
function getRandomElement(arr) {
    if(arr != null) {
        const rdn = Math.floor(Math.random() * arr.length);
        console.log('Select rnd element: ', arr[rdn]);
    }
    
}

// cau 5
function pickOutRandomElement(arr) {
    if(arr != null) {
        const rdn = Math.floor(Math.random() * arr.length);
        arr.splice(rdn, 1)
        console.log('Pick out rdn element: ', arr);
    }
}

// cau 6
function findMissingElements(arr1, arr2) {
    let str = arr2.filter(i => !arr1.includes(i));
	console.log('Missing array: ', str);
}

// cau 7
function cashOut(x) {
    
        let soto_1 = 0;
        let soto_50 = 0;
        let soto_20 = 0;
        let soto_10 = 0;
    
        if(x > 0) {
            while(x > 0){
                if (x >= 50)
            {
                x -= 50;
                soto_50++;
            }
            else if ((x < 50) && (x >= 20))
            {
                x -= 20;
                soto_20++;
            }
            else if ((x < 20) && (x >= 10))
            {
                x -= 10;
                soto_10++;
            }
            else if ((x < 10) && (x >= 0))
            {
                soto_1 = x;
            }
            }
            
               
            console.log('50: ', soto_50);
            console.log('20: ', soto_20);
            console.log('10: ', soto_10);
            console.log('1: ', soto_1);
        }

        
    
        
    
    
}