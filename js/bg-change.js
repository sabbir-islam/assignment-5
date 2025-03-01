const colors = ['bg-[rgb(244,247,255)]','bg-slate-400','bg-blue-900','bg-indigo-300','bg-lime-700','bg-purple-950'];
let i = 0;

document.getElementById("bg-change-btn").addEventListener('click',function(){
    const body = document.body;

    body.classList.remove(colors[i]);
    i = (i + 1) % colors.length;
    body.classList.add(colors[i]);
})