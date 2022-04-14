

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
    if(money >= 10**3 && money < 10**6) {
        console.log((money / 10**3).toFixed(decimal) + 'K');
    }
    else if(money >= 10**6 && money < 10**9) {
        console.log((money / 10**6).toFixed(decimal) + 'M');
    }
    else if(money >= 10**9) {
        console.log((money / 10**9).toFixed(decimal) + 'B');
    }
    
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
        if(x > 0) {
            let soto_50 = (x - x%50)/50;
            x -= 50*soto_50;

            let soto_20 = (x - x%20)/20;
            x -= 20*soto_20;

            let soto_10 = (x - x%10)/10;
            x -= 10*soto_10;

            let soto_1 = x;
               
            if(soto_50 > 0) {
                console.log('50: ', soto_50);
            }
            if(soto_20 > 0) {
                console.log('20: ', soto_20);
            }
            if(soto_10 > 0) {
                console.log('10: ', soto_10);
            }
            if(soto_1 > 0) {
                console.log('1: ', soto_1);
            }
            
            
        }   
}

// cau 8
function convertToRomanNumber(x) { 
    const roman = {
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      };
    let rs = '';
     if(x > 0 && x < 1000) {
         for (let i of Object.keys(roman)) {
            let g = (x - x%roman[i]) / roman[i];
            x -= g * roman[i];
            rs += i.repeat(g);
         }
         console.log(rs);
     }
}

// cau 9
function readNumber(x) {

    let van = parseInt(x / 10000);
    let nghin = parseInt(x / 1000 % 10);
    let tram = parseInt(x / 100 % 10);
    let chuc = parseInt(x / 10 % 10) ;
    let donvi = x % 10;

    let chucvan = parseInt(van / 10);
    let donvivan = van % 10;

    console.log(van);
    console.log(nghin);
    console.log(tram);
    console.log(chuc);
    console.log(donvi);

    console.log(chucvan);
    console.log(donvivan);

    const ChuSo = [" không ", " một ", " hai ", " ba ", " bốn ", " năm ", " sáu ", " bảy ", " tám ", " chín "];

    let rs = '';

    if(van == 0 && nghin == 0 && tram == 0 && chuc == 0, donvi == 0) {
        return "";
    }

    if(van != 0) {
        if(van < 10) {
            rs += ChuSo[van] + 'vạn';
        } else {
            if((chucvan != 0) && (chucvan != 1)) {
                rs += ChuSo[chucvan] + ' mươi ';
            }
            if (chucvan == 1) rs += " mười ";
            switch (donvivan) {
                case 1:
                    if ((chucvan != 0) && (chuc != 1)) {
                        rs += " mốt vạn ";
                    }
                    else {
                        rs += ChuSo[donvivan] + 'vạn';
                    }
                    break;
                case 5:
                    if (chucvan == 0) {
                        rs += ChuSo[donvivan] + 'vạn';
                    }
                    else {
                        rs += " lăm vạn";
                    }
                    break;
                default:
                    if (donvivan != 0) {
                        rs += ChuSo[donvivan] + 'vạn';
                    }
                    break;
            }
        }
        
    }

    if(nghin != 0) {
        rs += ChuSo[nghin] + 'nghìn';
    }

    if(tram != 0) {
        rs += ChuSo[tram] + 'trăm';
    }

    if((chuc != 0) && (chuc != 1)) {
        rs += ChuSo[chuc] + ' mươi ';
        if((chuc == 0) && (donvi != 0)){
            rs += ChuSo[donvi] + " linh ";
       }
    }

    if((chuc == 0) && (donvi != 0)){
         rs += ChuSo[donvi] + " linh ";
    }

    if (chuc == 1) rs += " mười ";
    switch (donvi) {
        case 1:
            if ((chuc != 0) && (chuc != 1)) {
                rs += " mốt ";
            }
            else {
                rs += ChuSo[donvi];
            }
            break;
        case 5:
            if (chuc == 0) {
                rs += ChuSo[donvi];
            }
            else {
                rs += " lăm ";
            }
            break;
        default:
            if (donvi != 0) {
                rs += ChuSo[donvi];
            }
            break;
    }
    console.log(rs);
    
}

