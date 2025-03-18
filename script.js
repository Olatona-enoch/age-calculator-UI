
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }else{
            CalculateAge(event);
        }
        form.classList.add('was-validated')
      }, false)
    })
})()
// months with 31 days
const M_thirty_one = [1, 3, 5, 7, 8, 10, 12];
//months with 30 days
const M_thirty = [4, 6, 9, 11];

const formControls = document.querySelectorAll(".form-control");
const inputFields = document.querySelectorAll("input");
const dayField = document.getElementById("day");
const monthField = document.getElementById("month");
const yearField = document.getElementById("year");

inputFields.forEach(field => {
    field.addEventListener("input", function (event) {
        let rawValue = event.target.value;
        // Ensure the input is a valid number
        const invalidfeeback = field.parentElement.querySelector(".invalid-feedback");
        const feedbackOne = invalidfeeback.querySelector(".feedback-one");
        const feedbackTwo = invalidfeeback.querySelector(".feedback-two");

        if (!isNaN(rawValue) && rawValue !== "") {
            let formattedValue = Number(rawValue);
    
            field.value = formattedValue; // Update  input
            feedbackOne.style.display = " none";
            feedbackTwo.style.display = " block";
        } else {
            event.target.value = event.target.value.slice(0, -1); // Remove last invalid character
            feedbackOne.style.display = " block";
            feedbackTwo.style.display = " none";
        }
        // Months with 31 days january[1], March[3], May[5], july[7], August[8], October[10], December[12]
        // Months with 30 days April[4], June[6], September[9], November[11]
        // februrary[2] has 28 days 
        if (yearField) {
            let yearmax = yearField.max = `${presentDate.getFullYear()}`
        }
        if (monthField.value == 1 || monthField.value == 3 || monthField.value == 5 || monthField.value == 7 || monthField.value == 8 || monthField.value == 12 ) {
            let maxInput = dayField.max = "31";
        } else if (monthField.value == 4 || monthField.value == 6 || monthField.value == 9 || monthField.value == 11) {
            let maxInput = dayField.max = "30";
        } else if (monthField.value == 2) {
            // to check if year is a leap year
            if (yearField.value % 400 === 0 || yearField.value % 100 !== 0 && yearField.value % 4 === 0) {
                //is a leap year
                let maxInput = dayField.max = "29";
                
            } else {
                //is not a leap year
                let maxInput = dayField.max = "28";
            }
            
        }
    });
    
});
const presentDate = new Date();
function CalculateAge(event) {
    event.preventDefault();
    const birthDay = document.getElementById("day").value;
    const birthMonth = document.getElementById("month").value;
    const birthYear = document.getElementById("year").value;

    const birthDate = new Date(`${birthYear}-${birthMonth}-${birthDay}`);
    // if (birthDay <  0 || birthDay > 31) {
    //     alert("Invalid day");
    //     Validity = false;

    // }
    // if (birthMonth < 0 || birthMonth > 12) {
    //     alert("Invalid month");
    //     Validity = false;
    // }
    // if (birthYear < 0 || birthYear > 2025) {
    //     alert("Invalid year");
    //     Validity = false;
    // }
    // if (!Validity) {
    //     return;
    // }
    let years = presentDate.getFullYear() - birthDate.getFullYear();
    let months = presentDate.getMonth() - birthDate.getMonth();
    let days = presentDate.getDate() - birthDate.getDate();
    console.log(years);
    console.log(months);
    console.log(days);

    // Adjust if target month is before birth month
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    // Adjust if target day is before birth day
    if (days < 0) {
        months -= 1;
        let previousMonth = new Date(presentDate.getFullYear(), presentDate.getMonth(), 0).getDate();
        days += previousMonth;
        console.log(previousMonth)


        // If subtracting a month makes it negative, adjust years and months
        if (months < 0) {
            years -= 1;
            months += 12;
        }
    }
    console.log(`${years} years, ${months} months, ${days} days`) ;
    const cal_years = document.getElementById("cal_years");
    const cal_months = document.getElementById("cal_months");
    const cal_days = document.getElementById("cal_days");
    cal_years.querySelector("span").innerHTML = `${years}`;
    cal_months.querySelector("span").innerHTML = `${months}`;
    cal_days.querySelector("span").innerHTML = `${days}`;
 
}
