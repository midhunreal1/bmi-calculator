function bmidisplay(){
let height = parseFloat(document.getElementById("height").value)
let weight = parseFloat(document.getElementById("weight").value)
let result = weight/((height*height)/10000)

    if (result<18.5){
    document.getElementById("bmi").innerHTML="You are under weight"
    }else if (result>18.5 && result<24.9){
    document.getElementById("bmi").innerHTML="You are normal weight"
    }else if (result>25 && result<29.9){
    document.getElementById("bmi").innerHTML="You are over weight"
    }else{
    document.getElementById("bmi").innerHTML="You are obese"
    } 
}
