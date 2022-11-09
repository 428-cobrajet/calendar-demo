// Define constants for later use in the script
const months = ["January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"];

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const currentDate = new Date();
const monthNumber = currentDate.getMonth();
const month = months[monthNumber];

// Define elements to be updated with the current time (add the current day/month/year to the page)
const dayElement = document.querySelector(".day");
const dateElement = document.querySelector(".date");
const yearElement = document.querySelector(".year");

const monthElementList = document.querySelector(".months");
const dayElementList = document.querySelector(".days");

// This variable is used to ensure that only one day is selected on the calendar
let selectedDay = -1;



// FUNCTION DEFINITIONS 

// This function creates elements for each day of the month (to add content to the calendar)
function generateDays() {
    // Generate day numbers for the calendar
    for( var i = 1; i <= 31; i += 1 ){
        let newDay = document.createElement("li");
        let newDayContent = document.createElement("a");

        newDayContent.setAttribute("title", i);
        newDayContent.setAttribute("data-value", i);
        newDayContent.innerText = i;

        newDay.appendChild(newDayContent);

        dayElementList.appendChild(newDay);

        newDayContent.addEventListener("click", selectDay)
    }

}

// A function to select a day when clicked (the CSS of the day will change)
function selectDay(event) {
    let selectedElement = event.target;
        
    // Unselected the previously selected day if needed (unless nothing has been rpev)
    if (selectedDay >= 0) {
        let previouslySelectedDayElement = dayElementList.querySelector(`[data-value="${selectedDay}"]`);
        previouslySelectedDayElement.classList.toggle("selected")
    }
    
    // Update the calendar to select the day that was pressed (and update the selectedDay variable)
    selectedElement.classList.toggle("selected");
    
    selectedDay = event.target.getAttribute("data-value");
    event.target.parent = document.querySelector(`[data-value="${monthNumber+1}"]`);
}

// Load days for the calendar
generateDays();

// Display the current year in the top right of the calendar
yearElement.innerText = currentDate.getFullYear()

// Make the current month bold on the page
currentMonthElement = monthElementList.querySelector(`[data-value="${monthNumber+1}"]`);
currentMonthElement.classList.toggle("bold-month");

// Add the full date underneath the current day
dayElement.innerText = days[currentDate.getDay()];
dateElement.innerText = currentDate.toLocaleDateString();



