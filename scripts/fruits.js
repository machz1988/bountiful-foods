const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";
const buttonSubmit = document.querySelector("#submit");
let data = null;
async function apiFruits(){
    try{
        const response = await fetch(url);
        if (response.ok) {
            data = await response.json();
            //console.log(data);
            displayOptions(data);
            buttonSubmit.addEventListener("click", submitListener);
        } else{
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error);
    }
}

function displayOptions(data){
    const displayGroup1 = document.querySelector("#fruits1");
    const displayGroup2 = document.querySelector("#fruits2");
    const displayGroup3 = document.querySelector("#fruits3");
    data.forEach(element => {
        const option = document.createElement("option");
        option.setAttribute("value", element.name);
        option.textContent = element.name;
        displayGroup1.appendChild(option);
        const option2 = document.createElement("option");
        option2.setAttribute("value", element.name);
        option2.textContent = element.name;
        displayGroup2.appendChild(option2);
        const option3 = document.createElement("option");
        option3.setAttribute("value", element.name);
        option3.textContent = element.name;
        displayGroup3.appendChild(option3);
    });
}

apiFruits();

/**
 * the input values of the order (7 inputs = first name, email, phone, three selected fruits, and special instructions),
the order date, and 
the total amount of carbohydrates, protein, fat, sugar, and calories based upon the three fruit choices selected on the form. Again, use the JSON fruit data to extract and sum up that information.
 */

function submitListener(){
    const firstName = document.querySelector("#first-name").value;
    const email = document.querySelector("#email").value;
    const cellPhone = document.querySelector("#cell-phone").value;
    const fruit1 = document.querySelector("#fruits1").value;
    const fruit2 = document.querySelector("#fruits2").value;
    const fruit3 = document.querySelector("#fruits3").value;
    const instructions = document.querySelector("#instructions").value;
    const date = new Date();

    if (firstName!="" && email!="" && cellPhone!=""){
        
        document.querySelector(".form-values").classList.toggle("showing");

        const displayName = document.querySelector("#first-name-value");
        const displayEmail = document.querySelector("#email-value");
        const displayPhone = document.querySelector("#cell-phone-value");
        const displayFruit1 = document.querySelector("#fruit1-value");
        const displayFruit2 = document.querySelector("#fruit2-value");
        const displayFruit3 = document.querySelector("#fruit3-value");
        const displayInstructions = document.querySelector("#instructions-value");
        const displayDate = document.querySelector("#date-value");

        displayName.textContent = firstName;
        displayEmail.textContent = email;
        displayPhone.textContent = cellPhone;
        displayFruit1.textContent = fruit1;
        displayFruit2.textContent = fruit2;
        displayFruit3.textContent = fruit3;
        displayInstructions.textContent = instructions;
        displayDate.textContent = date.toDateString();

        let nut1 = null;
        let nut2 = null;
        let nut3 = null;
        data.forEach((element)=>{
            if (fruit1==element.name){
                nut1 = element.nutritions;
            }
            if (fruit2==element.name){
                nut2 = element.nutritions;
            }
            if (fruit3==element.name){
                nut3 = element.nutritions;
            }
        });
        //console.log(nut1);
        //console.log(nut2);
        //console.log(nut3);
        const carbohydrates = document.querySelector("#carbohydrates-value");
        const protein = document.querySelector("#protein-value");
        const fat = document.querySelector("#fat-value");
        const sugar = document.querySelector("#sugar-value");
        const calories = document.querySelector("#calories-value");
        carbohydrates.textContent = (Number(nut1.carbohydrates) + Number(nut2.carbohydrates) + Number(nut3.carbohydrates)).toFixed(2);
        protein.textContent = (Number(nut1.protein) + Number(nut2.protein) + Number(nut3.protein)).toFixed(2);
        fat.textContent = (Number(nut1.fat) + Number(nut2.fat) + Number(nut3.fat)).toFixed(2);
        sugar.textContent = (Number(nut1.sugar) + Number(nut2.sugar) + Number(nut3.sugar)).toFixed(2);
        calories.textContent = (Number(nut1.calories) + Number(nut2.calories) + Number(nut3.calories)).toFixed(2);

        let drinksServed = Number(window.localStorage.getItem("drinks-served-number"));
        drinksServed += 1;
        window.localStorage.setItem("drinks-served-number", drinksServed);
    }    
}