function convertDate() {
    const inputDate = document.getElementById("inputDate").value.trim();
    const inputFormat = document.getElementById("inputFormat").value.trim();
    const expectedFormat = document.getElementById("expectedFormat").value.trim();
    const outputBox = document.getElementById("outputBox");
    outputBox.style.display = "none";
    outputBox.classList.remove("error");
    if (!inputDate || !inputFormat || !expectedFormat) {
        outputBox.style.display = "block";
        outputBox.classList.add("error");
        outputBox.innerText = "Error: Please fill in all fields.";
        return;
    }

    const dateParts = inputDate.split("/");
    let day, month, year;
    if (inputFormat === "DD/MM/YYYY") {
        [day, month, year] = dateParts;
    } else if (inputFormat === "MM/DD/YYYY") {
        [month, day, year] = dateParts;
    } else if (inputFormat === "YYYY/MM/DD") {
        [year, month, day] = dateParts;
    } else {
        outputBox.style.display = "block";
        outputBox.classList.add("error");
        outputBox.innerText = "Error: Invalid input format.";
        return;
    }
    if (!day || !month || !year || isNaN(day) || isNaN(month) || isNaN(year)) {
        outputBox.style.display = "block";
        outputBox.classList.add("error");
        outputBox.innerText = "Error: Invalid date entered.";
        return;
    }

    try {
        const formattedDate = expectedFormat
            .replace("DD", day.padStart(2, "0"))
            .replace("MM", month.padStart(2, "0"))
            .replace("YYYY", year);

        outputBox.style.display = "block";
        outputBox.innerText = `Formatted Date: ${formattedDate}`;
    } catch (error) {
        outputBox.style.display = "block";
        outputBox.classList.add("error");
        outputBox.innerText = "Error: Failed to format the date.";
    }
}
