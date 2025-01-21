document.addEventListener("DOMContentLoaded", () => {
    let taskbar = document.getElementsByClassName("taskbar")[0]; // Access the first taskbar element
    let startmenu = document.getElementsByClassName("startmenu")[0]; // Access the first startmenu element

    if (taskbar) { 
        taskbar.addEventListener("click", () => {
            if (startmenu.style.bottom === "50px") {
                startmenu.style.bottom = "-655px";
            } else {
                startmenu.style.bottom = "50px";
            }
        });
    } else {
        console.error("Taskbar element not found.");
    }
});
