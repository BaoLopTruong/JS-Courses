//# 1. Viết hàm formatMoney: 1000 => '1,000', 10000.56 => 10,000.56
//cứ mỗi 3 số phía sau sẽ thêm một dấu ,
//thêm 1 biến vị trí của dấu . xong duyệt từ dấu chấm xoá đằng sau

function formatMoney(money){
    let stringMoney = money.toString()
    let moneyArr = []
    let leftDot = []
    let rightDot = []
    moneyArr = Array.from(stringMoney)
    let posDot = moneyArr.indexOf(".")
    if(posDot>0){
        leftDot = moneyArr.slice(0, posDot)
        rightDot = moneyArr.slice(posDot, posDot + 3)
    }
    else{
        leftDot = moneyArr
        // rightDot =
    }
    const removeFirst = leftDot.length
    
    let dem = 0;
    let x = leftDot.length
    for(let i = leftDot.length; i >= 0; i--){
        // console.log(dem)
         dem += 1
        
        if((dem-1)%3==0){
            leftDot.splice(i,0,',');
            let y = dem-1
            // console.warn(y)
        }
        

    }
    leftDot.pop()
    // console.log(leftDot.length)
    if(removeFirst%3==0){
        leftDot.shift()
        console.log("đã xoá")
    }
    let showMoney = leftDot.join("") + rightDot.join("")
    // let show = leftDot.toString().join(',')
    // let show = Object.assign({}, leftDot)
    console.log(showMoney)
}

formatMoney(3456789.55)