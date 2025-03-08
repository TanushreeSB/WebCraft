function generateTribute() {
    let name = document.getElementById("name").value;
    let relationship = document.getElementById("relationship").value;
    let achievements = document.getElementById("achievements").value;
    let tributeSection = document.getElementById("tribute-section");

    if (name === "" || relationship === "" || achievements === "") {
        alert("Please fill out all fields!");
        return;
    }

    let tributeCard = `
        <div class="tribute-card">
            <h2>${name}</h2>
            <p><strong>Relationship:</strong> ${relationship}</p>
            <p><strong>Achievements:</strong> ${achievements}</p>
            <p>💜 Thank you, ${name}, for inspiring us! 💜</p>
        </div>
    `;

    tributeSection.innerHTML = tributeCard;
}
