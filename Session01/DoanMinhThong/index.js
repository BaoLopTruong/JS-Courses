//1
// function formatMoney(money) {
//     const formatMoney = new Intl.NumberFormat('en-US');
    
//     return formatMoney.format(money)
// }
// console.log(formatMoney(1001))


// 2. Viết hàm formatWallet nhận vào 2 tham số, số tiền và số chữ số ở sau dấu phẩy
//     formatWallet(1120, 2)  => '1.12K' 

// function formatWallet(money, param) {
//         let strings = ""
//         if (money >= 1000000000) {
//                 money /= 1000000000
//                 strings = "B"
//         } 
//         if (money >= 1000000) {
//                 money /= 1000000
//                 strings = "M"
//         } 
//         if (money >= 1000) {
//                 money /= 1000
//                 strings = "K"
//         } 
//         return money.toFixed(param).concat(strings)
// }
// console.log("Money ", formatWallet(1120,2));
//3 
// function factorial(num) {
//     if (num == 1) {
//         return 1;
//     }
//     return num * factorial(num - 1)
// }
// console.log(factorial(5))

// 4. Viết hàm trả về 1 phần từ bất kỳ trong mảng
//     getRandomElement(array) 
// const arr = [1,2,3,5,6,7]
// function getRandomElement(array) {
//     let rand  = Math.floor(Math.random()*(array.length - 0))
//     return array[rand]
// }
// console.log(getRandomElement(arr))
// 5. Viết hàm cắt ra 1 phần tử bất kỳ trong mảng,
//     pickOutRandomElement(array)
// function pickOutRandomElement(array) {
//     let rand = Math.floor(Math.random()* (array.length))
//     console.log(rand)
//     arr.splice(rand,1)
//     return arr
// };

// console.log("Sliced: ",pickOutRandomElement(arr));
// // 6. Cho 2 mảng bất kỳ. Viết hàm tìm ra những phần tử của mảng thứ 2 ko xuất hiện trong mảng đầu tiên
// //     findMissingElements(arr1, arr2) => missingArray.

// const arr1 = [1,2,3,4,5,6,7,9,10,11]
// const arr2 = [2,3,4,5,6,7,8,11,14,15]

// function findMissingElements(arr1,arr2) {
//     let arr3 = []
//     arr2.forEach(element => {
//        if (!arr1.includes(element)) {
//            arr3.push(element)
//        } 
//     });
//     return arr3
// }
// console.log("phần tử ",findMissingElements(arr1,arr2))

// 7. Cho 1 số tiền bất kỳ (n) Viết hàm tìm ra cách rút tiền với số tờ tiền nhỏ nhất.Có 4 mệnh giá (50$, 20$, 10$, 1$)
// let numbers = [50,20,10,1]
// const obj1 = {};
// function cashOut(n) {
//         for (i in numbers) {
//                 while ( n> numbers[i]) {
//                         obj1[numbers[i]+"$"] = Math.floor(n/numbers[i])
//                         n = n % numbers[i]
//                 }
//         }
//         return obj1
// }
// console.log(cashOut(324))

// const obj = {
//     "50$": 0,
//     "20$": 0,
//     "10$": 0,
//     "1$": 0
// }
// function cashOut(n) {
//     if (n >= 50) {
//         obj["50$"] = Math.floor(n/50)
//         n = n % 50
//     } else if (n >= 20){
//         obj["20$"] = Math.floor(n/20)
//         n = n % 20
//     } else if (n >= 10) {      
//         obj["10$"] = Math.floor(n/10)
//         n = n % 10
//     }else if (n >= 1) {
//         obj["1$"] = Math.floor(n/1)
//         n = 0 
//     } else  {
//         return obj
//     }
// return cashOut(n)
// }
// console.log("Rút tiền: ",cashOut(324))

// 8. Đổi số la mã: cho 1 số < 1000, in ra số la mã tương ứng ( I:1, V:5, X:10, L:50, C:100, D:500 )
//     convertToRomanNumber(143) => CXVIII
//
// const nums = {D:500,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1} ;

// function convertToRomanNumber(n) {
//         let strings = ""
//         for ( i in nums) {
//            while (n >= nums[i]) {
//             strings += i
//             n -= nums[i]
//            }
//         }
//         console.log(strings)
//         return strings
// }
// console.log("So La Ma",convertToRomanNumber(999))
// 9. In cách đọc số: In ra màn hình cách đọc số nhỏ hơn 1,000,000.
//     readNumber(726504) => bảy mươi hai vạn sáu ngàn năm trăm linh tư.

// let arr1 = {"không": 0, "một ": 1, " hai ": 2, " ba ": 3, " bốn ": 4, " năm ": 5, " sáu ": 6, " bảy ": 7, " tám ": 8, " chín ": 9}
let arr1 = ["không", "một ", " hai ", " ba ", " bốn ", " năm ", " sáu ", " bảy ", " tám ", " chín "]




let arr2 = [" linh", " trăm", " nghìn", " vạn"]

// function readNumber(num) {
//         num = num.toString()
//         const output = []
//         for ( i in num) {
//                 console.log(num[i])
//                 // console.log(arr1.indexOf(params[i]))  
//                 output.push(arr1[num[i]])
//         }
//         return output

// }




function readTwoNumber(b,c) {
        console.log(b,c)
        const output1 = []

        
                switch (b) {
                        case 1:
                              output1.push("mười")  
                              if (c == 5) {
                                      output1.push("lăm")
                              }else if (c != 0) {
                                      output1.push(arr1[c])
                              }
                                break;
                
                        default:
                                output1.push(arr1[b], "mươi")
                                switch (c) {
                                        case 1:
                                                output1.push("mốt")
                                                break;
        
                                        case 5:
                                                output1.push("lăm")
                                                break;
                                        default:
                                                output1.push(arr1[c])
                                                break;
                                }
        
                }
                // console.log(output1)
        
        
        return output1
        
}

// Định nghĩa function đọc nhóm 3 số
function readThree(f = 0,e = 0,d = 0,a = 0, b = 0, c = 0) {
        // num = num.toString()
        // for ( i in num) {
        //         console.log(num[i])
        //         // console.log(arr1.indexOf(params[i]))  
        // }
        const output = [];
        switch (f) {
                case 0:
                        break;

                default:
                        output.push(arr1[f], 'mươi');
                        break;
        }

        
        // if (f != 0)
        // output.push(arr1[f], 'mươi');
        if (e != 0)
        output.push(arr1[e], 'vạn');
        if (d != 0)
        output.push(arr1[d], 'nghìn');  // Đọc là "a trăm"
    
        // Đọc phần trăm (a) trước
        if (a != 0)
            output.push(arr1[a], 'trăm');  // Đọc là "a trăm"
        
        // Nối thêm phần sau (b, c)
        // Ở đây dùng spread syntax để nối output
        output.push(...readTwoNumber(b, c, a != 0 ,d!=0 , e!=0 , f!=0|| readZeroHundred));
    
        return output;
    }
    
console.log(readThree(7,2,6,5,0,4))
// console.log(readNumber(434256))
function readNumber(num) {
        num = num.toString()
        const output = []
        let a,b,c,d,e,f;
        for ( i in num) {
                console.log(num[i])
                // console.log(arr1.indexOf(params[i]))  
                output.push(arr1[num[i]])
        }
        switch (num.toString().length) {
                case 6:
                        console.log("Output", output.length)

                        break;
                case 5:
                        console.log("Output", output.length)
                        break;
                case 4:
                        console.log("Output", output.length)
                        break;
                case 3:
                        console.log("Output", output.length)

                        break;
                case 2:
                        // console.log("Output", output.length)
                        // for ( i in num) {
                        //         console.log(num[i])
                        //         // console.log(arr1.indexOf(params[i]))  
                                
                        //         output.push(arr1[num[i]])
                        // }
                        console.log(output[0])
                        readTwoNumber(num.toString().slice(0,1))

                        break;

                default:
                        break;
        }
        return output

}
console.log(readTwoNumber(4,5))