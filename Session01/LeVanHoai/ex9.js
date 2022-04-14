// In cách đọc số: In ra màn hình cách đọc số nhỏ hơn 1,000,000.
//     readNumber(726504) => bảy mươi hai vạn sáu ngàn năm trăm linh tư.

function readNumber(n)
{
    let obj= {
        soVan: "Vạn",
        soNgan: "Ngàn",
        soTram: "Trăm"
    }
    let numToText = {
        1: "Một",
        2: "Hai",
        3: "Ba",
        4: "Bốn",
        5: "Năm",
        6: "Sáu",
        7: "Bảy",
        8: "Tám",
        9: "Chín"
    }
    if(n>=10000){
        let numVan = Math.floor(n/10000)
        if(numVan > 10){
            const numVan1 = Math.floor(numVan/10)
            const numVan2 = Math.floor(numVan%10)
            
            obj["soVan"] = numToText[numVan1] + " Mươi " + numToText[numVan2] + " Vạn "
        }
        else
        {
            obj["soVan"] = numToText[numVan] + " Vạn "
        }
        n = Math.floor(n%10000)
    }
    if(n>=1000){
        let numNgan = Math.floor(n/1000)
        obj["soNgan"] = numToText[numNgan] + " Ngàn "
        n = Math.floor(n%1000)
    }
    if(n>=100){
        let numTram = Math.floor(n/100)
        if(!Number.isInteger(n/100)){
            if(Math.floor(n%100)){

            }
            n = Math.floor(n%100)
            obj["soTram"] = numToText[numTram] + " Trăm " + "Linh " + numToText[n]
        }
        else{
            obj["soTram"] = numToText[numTram] + " Trăm"
        }
    }
    
    readText = obj["soVan"]+obj["soNgan"]+obj["soTram"]
    console.log(readText)
    console.log(!Number.isInteger(500/100))
}
readNumber(726500)