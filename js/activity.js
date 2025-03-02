const task = document.getElementById("task-num").innerText;
const taskComplete = document.getElementById("task-completed").innerText;



let convertTask = parseFloat(task);
let convertTaskCom = parseFloat(taskComplete);

const buttons = document.querySelectorAll(".Complete-btn");

const activityLogContainer = document.querySelector('.activityLog')

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    button.disabled = true;

    convertTask -= 1;
    convertTaskCom += 1;

    document.getElementById("task-num").innerText = convertTask;
    document.getElementById("task-completed").innerText = convertTaskCom;

    const taskCard = button.closest('.flex-col')
    const taskTitle = taskCard.querySelector('h1').innerText;

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();

    const newLog = document.createElement("div");
    newLog.className = "text-base font-normal w-[268px] p-4 mt-4 rounded-lg bg-[rgb(244,247,255)]";
    newLog.innerText = `You have Completed The Task "${taskTitle}" at ${formattedDate}`;

    activityLogContainer.appendChild(newLog);

    alert("Task Completed successful");
  });
});
