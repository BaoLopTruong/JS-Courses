// bai: 1
function formatMoney(value) {

    var a = value.toString();
    let input = "";      // bien luu chuoi cat truoc dau "."
    let temp = "";        // bien luu chuoi cat sau dau "."
    let check = a.indexOf(".");
    if (check > 0) {           // kiem tra chuoi co dau "." khong
        input = a.substring(0, check);    //chuoi duoc cat truoc dau "."
        temp = a.substring(check);      // chuoi duoc cat sau dau "."
    } else {
        input = a;        // khong co dau "." chuioi giu nguyen
    }

    let result = "";     //bien luu chuoi khi them dau ,""
    let len = input.length;
    let j = 0;
    for (let i = len - 1; i >= 0; i--) {
        j++;

        if (j == 3 && i != 0) {
            result = result + a[i] + ",";
            j = 0;
        } else {
            result += a[i];
        }
    }

    // dao nguoc chuoi lai 
    let k = result.length;
    let res = "";         // bien luu chuoi tra ve
    for (let i = k - 1; i >= 0; i--) {
        res += result[i];
    }

    return res + temp;
}


//bai: 2
function formatWallet(cur, n) {
    let res = cur / 1000 + "K";
    //console.log(res);
    return res;
}


//bai: 3
function factorial(value) {
    let result;
    for (let i = 1; i <= value; i++) {
        result *= i;
    }
    return result;
}


//bai: 4
function getRandomElement(arr) {
    let i = Math.floor(Math.random() * ((arr.length - 1) - 0 + 1)) + 0;
    return arr[i];
}

//bai: 5
arr = [1, 2, 3, 4, 5, 6, 7];
function pickOutRandomElement(arr) {
    let i = Math.floor(Math.random() * ((arr.length - 1) - 0 + 1)) + 0;
    console.log(i);
    arr.splice(i, 1);
    return arr;
}
//console.log(pickOutRandomElement(arr));


//bai: 6
function findMissingElements(arr1, arr2) {
    let check;
    let arr3 = [];
    for (let i = 0; i < arr2.length; i++) {
        check = arr1.includes(arr2[i]);
        if (check == false) {
            arr3.push(arr2[i]);
        }
    }

    return arr3;
}


//bai: 7
function cashOut(value) {
    //let res={"50$":0,"20$":0,"10$":0,"1$":0};
    let res = {};
    let temp;

    if (value >= 50) {
        temp = Math.floor(value / 50);
        res[50] = temp;
        value = value % 50;
    }
    if (value >= 20) {
        temp = Math.floor(value / 20);

        res[20] = temp;
        value = value % 20;
    }
    if (value >= 10) {
        temp = Math.floor(value / 10);
        res[10] = temp;
        value = value % 10;
    }
    if (value >= 1) {
        temp = value;
        res[1] = temp;
        value = 0;
    }

    return res;
}

//bai: 8
function convertToRomanNumberize(value) {
    let lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let roman = '';
    let i;
    for (i in lookup) {
        while (value >= lookup[i]) {
            roman += i;
            value -= lookup[i];
        }
    }
    return roman;
}

//bai: 9
function readNumber(value) {
    let arr = ["khong", "mot", "hai", "ba", "bon", "nam", "sau", "bay", "tam", "chin"];
    let tmp;
    let k = 0;
    let res = 0;
    let s = "";
    while (value> 0) {
        k++;
        tmp = value % 10;
        res = res * 10 + tmp;
        value = Math.floor(value/ 10);
    }
    while (res > 0) {
        tmp = res % 10;
        if (k == 6) {
            if (tmp == 1) {
                s = s + " muoi ";
            }
            else {
                s = s + arr[tmp] + " muoi ";
            }
        }
        else if (k == 5) {
            if (tmp == 0) {
                s = s + " van ";
            } else if(tmp==5){
                s = s + "lam" + " van ";
            }
            else {
                s = s + arr[tmp] + " van ";
            }
        }
        else if (k == 4) {

            if (tmp == 0) {
                s = s + "";
            } else {
                s = s + arr[tmp] + " ngan ";
            }
        }
        else if (k == 3) {
            if (tmp == 0) {
                s = s + "";
            } else {
                s = s + arr[tmp] + " tram ";
            }
        }
        else if (k == 2) {
            if (tmp == 0) {
                s = s + " linh ";
            }else if(tmp==1){
                s = s + " muoi ";
            }
             else {
                s = s + arr[tmp] + " muoi ";
            }

        }
        else if (k == 1) {
            if(tmp==5){
                s = s +  " lam";
            }else{
                s = s + arr[tmp] + " ";
            }
            
        }
        res = Math.floor(res / 10);
        k--;

    }
    //console.log(s);
    return s;
}

//console.log(readNumber(705550));

//bai: 10
let arr =[[0,0,0],
          [0,1,1],
          [0,1,1],
          [0,1,1],
          [1,1,0]];

let res =[100][100];
function pathSave(){
   
}
//gggggggggggg






