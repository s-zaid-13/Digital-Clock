let hrBox = document.querySelector("#hr");
let minBox = document.querySelector("#min");
let secBox = document.querySelector("#sec");
let dateBox = document.querySelector("#date");
let DAY = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

setInterval(() => {
    let date = new Date();
    let dated = date.getDate();
    let month = date.getMonth() + 1;
    let day = date.getDay();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minut = date.getMinutes();
    let seconds = date.getSeconds();
    hrBox.innerText = hour;
    minBox.innerText = minut;
    secBox.innerText = seconds;
    dateBox.innerHTML = `${dated}/${month}/${year} <br><span>${DAY[day]}</span>`;
}, 1000);
