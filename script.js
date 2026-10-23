function changeMode() {
    document.body.classList.toggle("dark-mode");

    let button = document.getElementById("modeButton");

    if (document.body.classList.contains("dark-mode")) {
        button.innerHTML = "☀️ Light Mode";
    } else {
        button.innerHTML = "🌙 Dark Mode";
    }
}

function updateClock() {
    let now = new Date();

    let time = now.toLocaleTimeString("en-PH", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Manila"
    });

    document.getElementById("clock").textContent = time;
}

updateClock();
setInterval(updateClock, 1000);