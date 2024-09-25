const genPass = () => {
    let str = "";
    let pass = "";
    let smallChar = "abcdefghijklmnopqrstuvwxyz";
    let bigChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let num = "0123456789";
    let special = "#@$!%^&*~";
    let e1=true,e2=true,e3=true;
    
    let isBigChar = true;
    let isNum = true;
    let isSpecial = true;

    str += smallChar;
    str += isBigChar?bigChar:""; 
    str += isNum?num:""; 
    str += isSpecial?special:""; 


    for (let i = 1; i <= 12; i++) {
        if (i%2==0&&e1&&isBigChar) {
            pass += bigChar.charAt(Math.floor(Math.random() * bigChar.length + 1));
            e1=false;
        }
        else if(i%2==0&&e2&&isNum){
            pass += num.charAt(Math.floor(Math.random() * num.length + 1));
            e2=false;
        }
        else if(i%2==0&&e3&&isSpecial){
            pass += special.charAt(Math.floor(Math.random() * special.length + 1));
            e3=false;
        }
        else
        {
            pass += str.charAt(Math.floor(Math.random() * str.length + 1));
        }
    }

    console.log(pass);
};
genPass();