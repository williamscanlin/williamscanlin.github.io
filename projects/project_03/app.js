function createCalendar() {
    const calendarDiv = document.getElementById('calendar');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    let calendarHTML = '<table>';
    calendarHTML += '<tr><th colspan="7">Calendar</th></tr>';
    calendarHTML += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';
    
    let dayCounter = 1;
    for (let i = 0; i < 6; i++) {
        calendarHTML += '<tr>';
        for (let j = 0; j < 7; j++) {
            if (dayCounter <= daysInMonth && (i > 0 || j >= new Date(currentYear, currentMonth, 1).getDay())) {
                calendarHTML += `<td>${dayCounter}</td>`;
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
}

createCalendar();
