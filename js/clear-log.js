document.getElementById("clearHistoryBtn").addEventListener('click',function(){
    
    const activityLogContainer = document.querySelector('.activityLog');
    
    activityLogContainer.innerHTML = ' ';
    alert('All Cleared');
})
