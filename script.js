const form = document.querySelector("form");
form.addEventListener("submit", function(a){
    a.preventDefault();
    const weight = parseInt(document.querySelector("#weight").value);
    const height = parseInt(document.querySelector("#height").value);
    const result = document.querySelector("#result");
    if(height<0 || height==='' || isNaN(height)){
        result.innerHTML = `insert valid value height`;
    }
    else if(weight<0 || weight==='' || isNaN(weight)){
        result.innerHTML = `insert valid value weight `;
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        if(bmi>18.6 && bmi<24.9){
            result.innerHTML = `<span> normal weight ${bmi}</span>`;
        }
        else if(bmi<18.6){
            result.innerHTML = `Under Weight <span> ${bmi}</span>`;
        }
        else if(bmi>24.9 && bmi<39.9){
            result.innerHTML = `<span> Over weight ${bmi}</span>`;
        }
        else{
            result.innerHTML = `<span> Obese ${bmi}</span>`;
        }
        
    }
    
})