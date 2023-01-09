document.getElementById('generate-btn').addEventListener('click', function(){
    let showPinString = document.getElementById('pin-input').value;
    let randomPin = Math.random()*10000;
    let roundedRandomPin = Math.ceil(randomPin);
    if(randomPin < 1000){
        randomPin = 6969;
    }
    document.getElementById('pin-input').value = roundedRandomPin;
    return showPinString;
})

document.getElementById('calc-body').addEventListener('click', function(event){
    let number = event.target;
    if(number == document.getElementById('submit-btn')){
        return false;
    }
    let numberValue = number.innerText;
    let parsedNum = parseFloat(numberValue);
    let pin = [];
    pin.push(parsedNum);
    if(number == document.getElementById('clear')){
        document.getElementById('calc-input').value = "";
    }
    if(number == document.getElementById('back')){
        var elements = document.getElementById('calc-input').value;
        var newEle = [];
        for(var i = 0; i < elements.length -1; i++){
            var position = elements[i];
            newEle.push(position);
        }
        var brand = newEle.join('');
        document.getElementById('calc-input').value = "";
        document.getElementById('calc-input').value += brand;
    }
    if(isNaN(numberValue)){
        return false;
    }
    document.getElementById('calc-input').value += pin;
    return pin;
})


let tries = 3;

document.getElementById('submit-btn').addEventListener('click', function(){
    let submitPinNum = document.getElementById('calc-input').value;
    let realPin = document.getElementById('pin-input').value;
    let empty = "";
    if (realPin == empty){
        console.log('false')
    }
    else if(submitPinNum == realPin){
        document.getElementById('pin-input').value = empty;
        document.getElementById('calc-input').value = empty;
        document.getElementById('notify-error').style.display = 'none';
        document.getElementById('notify-success').style.display = 'block';
    }else{
        tries -= 1;
        if (tries > 0) {
            document.getElementById("try-num").innerText = tries;
            document.getElementById('notify-error').style.display = 'block';
            document.getElementById('notify-success').style.display = 'none';
        } else {
            document.getElementById("submit-btn").disabled = true;
            document.getElementById('submit-btn').style.backgroundColor= "#8294f7";
            document.getElementById("try-num").innerText = "0";
        }
        }
})