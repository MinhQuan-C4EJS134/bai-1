function sum(){
    function snt(n) {
        let flag = true;
        if (n < 2){
            flag = false;
        } else if (n === 2){
            flag = true;
        } else if (n%2 === 0){
            flag = false;
        } else {
            for (let i = 3; i < n - 1; i += 2){
                if (n%i == 0){
                    flag = false;
                    break;
                }
            }
        }
        return flag;                    
    }
    
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    if (a<b){
        let sum=0;        
        let num=[];               
        for (let n = a; n <= b; n++){                        
            if (snt(n)){       
                num.push(n);
                sum += n;
            }
        }                
        document.getElementById("result").innerHTML = num+"<br>= "+sum;
    }
    else{
        document.getElementById("result").innerHTML = "Vui lòng nhập a&#60;b";
    }
}