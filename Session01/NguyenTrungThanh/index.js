 /// Cau 1 
    function formatNumber(num) {
        var n = Number(num);
        return n.toLocaleString("en");
    }
    var a = 10200000;
    var b = formatNumber(a);
    console.log('b',b);
/// cau 2 
    let num = 12213.1434;
    let n = 2;   
    console.log(num.toFixed(n)); 
    
/// cau 3 
    var sobatki = 5 ;
    var i ;
    var giaithua = 1 ;     
        for( i =1 ; i<=sobatki ; i++){
            giaithua = giaithua * i ;
        }
        console.log('Giai Thua', giaithua);
    
/// cau 4 
        function getRandomElement(array) {
            if(array != null){
                const rdn = Math.floor(Math.random() * array.lenght);
                console.log("Chon so ngau nhien", arr[rdn]);
            }
        }
/// cau 5 
        function getRandomElement(array) {
            if(array != null){
                const rdn = Math.floor(Math.random() * array.lenght);
                array.splice(rdn,1)
                console.log('chon so ngau nhien', array);
            }
        }
/// cau 6 
        function TimSo(array1, array2){
            let So = array2.filter(i => !array1.includes(i));
            console.log('Timso',So)
        }
//cau 7
let x = 435; 
let to50 = (x - x%50)/50 ;
x -= 50 *to50 ;
let to20 = (x - x%20)/20;
x -= 20 *to20 ;
let to10 = (x - x%10)/10;
x -= 10* to10 ;
let to1 = x

if(to50>0){
  console.log('to50',to50);
}
if(to20>0){
  console.log('to20',to20);
}
if(to10>0){
  console.log('to10',to10);
}
if(to1>0){
  console.log('to1',to1);
}
/// Cau 8
        const chuyendoi = (num, result = '') => {
            const slm = {
        M: 1000,
        CM: 900,
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
        I: 1,
      };
      for (const key in slm) {
        if (num >= slm[key]) {
          if (num != 0) {
            return chuyendoi(num - slm[key], result + key);
          }
        }
      }
      return result;
    };
console.log(chuyendoi(123));

//cau 9 
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
        }  else {
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
                        rs += ChuSo[donvivan] + 'vạn';}
                    break;
                case 5:
                    if (chucvan == 0) {
                        rs += ChuSo[donvivan] + 'vạn';}                   
                    else {
                        rs += " lăm vạn";}                    
                    break;
                default:
                    if (donvivan != 0) {
                        rs += ChuSo[donvivan] + 'vạn';}           
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
 // cau 10 :
 const array1 = [0,1,1];
let Arr1 = array1.find(function (item) {
    return item.array1 == "0";
    })
    const array2 = [0,1,1];
let Arr2 = array2.find(function (item) {
    return item.array2 == "0";
    })

    const array3 = [0,1,1];
let Arr3 = array3.find(function (item) {
    return item.array3 == "0";
    })

    const array4 = [0,1,1];
let Arr4 = array4.find(function (item) {
    return item.array4 == "0";
    })

    const array5 = [0,0,1];
let Arr5 = array5.find(function (item) {
    return item.array5 == "0";
    })

