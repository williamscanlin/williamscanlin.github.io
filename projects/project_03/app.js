async function createCalendar() {
    const calendarDiv = document.getElementById('calendar');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const today = currentDate.getDate();
    
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    let calendarHTML = '<table>';
    calendarHTML += '<tr><th colspan="7">Calendar</th></tr>';
    calendarHTML += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';
    
    let dayCounter = 1;
    for (let i = 0; i < 6; i++) {
        calendarHTML += '<tr>';
        for (let j = 0; j < 7; j++) {
            if (dayCounter <= daysInMonth && (i > 0 || j >= new Date(currentYear, currentMonth, 1).getDay())) {
                const classNames = (dayCounter === today) ? 'calendar-day today' : 'calendar-day';
                calendarHTML += `<td class="${classNames}" onclick="showReminderForm(${dayCounter})">${dayCounter}</td>`;
                dayCounter++;
            } else {
                calendarHTML += '<td></td>';
            }
        }
        calendarHTML += '</tr>';
        if (dayCounter > daysInMonth) {
            break;
        }
    }
    calendarHTML += '</table>';
    
    calendarDiv.innerHTML = calendarHTML;

    // Fetch holidays and update the calendar after fetching
    const holidayData = await fetchHolidays();
    // Process holiday data and integrate it into the calendar
    console.log(holidayData);
}

function addReminder(date, description) {
    const reminderDiv = document.createElement('div');
    reminderDiv.className = 'reminder';
    reminderDiv.innerHTML = `<strong>${date}:</strong> ${description}`;

    const calendarDiv = document.getElementById('calendar');
    calendarDiv.appendChild(reminderDiv);

    // Highlight the corresponding day
    const dayElement = document.querySelector(`.calendar-day[data-date="${date}"]`);
    if (dayElement) {
        dayElement.classList.add('has-reminder');
    }
}


function showReminderForm(day) {
    const reminderDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${day}`;
    const reminderFormURL = `/projects/project_03/reminderForm.html?date=${reminderDate}`;
    window.open(reminderFormURL, '_blank', 'width=400,height=400');
}

async function fetchHolidays() {
    // Implement code to fetch holidays from an API or a data source
    // For demonstration purposes, returning dummy data
    return [
        { date: '2023-01-01', name: 'New Year\'s Day' },
        { date: '2023-07-04', name: 'Independence Day' },
        // Add more holiday data as needed
    ];
}

// Call the createCalendar function when the page is loaded
document.addEventListener('DOMContentLoaded', createCalendar);
