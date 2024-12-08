// Function to populate the dates
function populateDates() {
  const dayGrid = document.getElementById("dayGrid");
  const today = new Date();
  const weekStart = new Date(today.setDate(today.getDate() - today.getDay())); // Start of the week (Sunday)

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(weekStart);
    currentDate.setDate(weekStart.getDate() + i);

    const dayName = currentDate.toLocaleString("default", { weekday: "long" });
    const dayNumber = currentDate.getDate();
    const monthName = currentDate.toLocaleString("default", { month: "long" });

    // Create the day box
    const dayBox = document.createElement("div");
    dayBox.classList.add("day-box");

    dayBox.innerHTML = `
                <h3>${dayName}, ${monthName} ${dayNumber}</h3>
                <button class="add-task-btn">+ Add Task</button>
            `;

    // Append to the grid
    dayGrid.appendChild(dayBox);
  }
}

// Call the function on page load
document.addEventListener("DOMContentLoaded", populateDates);
