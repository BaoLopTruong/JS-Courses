//# 1. Viết hàm formatMoney: 1000 => '1,000', 10000.56 => 10,000.56
//cứ mỗi 3 số phía sau sẽ thêm một dấu ,
//thêm 1 biến vị trí của dấu . xong duyệt từ dấu chấm xoá đằng sau

function formatMoney(money){
    let arrayMoney = Array.from(money.toString())
    const dotMoney = arrayMoney.indexOf(".")
    let afterDot = arrayMoney.slice(dotMoney, dotMoney+3)
    let beforeDot = arrayMoney.slice(0, dotMoney).toString()
    let newArr = beforeDot.toString().split(",").join("")
    let arr0 = "";
    for(let i = newArr.length; i> 0; i--){
        if(i%3==0){
            arr0  += newArr.slice(i-3, i)
            arr0  += "," + newArr.slice(i+1, i+4) 
        }
    }
    console.log(arr0)
}

formatMoney(12345678.13)