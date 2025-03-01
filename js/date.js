function updateDay(){
    const dayField = document.getElementById('day');
    const dateField = document.getElementById('date');
    const now = new Date();

    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const dayIndex = now.getDay();

    const months = ['January','February','March','April','May','Jun','July','August','September','October','November','December'];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();

    dayField.textContent = days[dayIndex];
    dateField.textContent = `${month} ${date} ${year}`;
}
updateDay();