document.addEventListener("DOMContentLoaded", () => {
    const riddlesContainer = document.getElementById("riddles-container");

    riddlesData.forEach((riddle, index) => {
        const riddleCard = document.createElement("div");
        riddleCard.classList.add("riddle-card");

        riddleCard.innerHTML = `
            <div class="riddle-front">
                <p>${riddle.question}</p>
            </div>
            <div class="riddle-back">
                <p>${riddle.answer}</p>
            </div>
        `;

        riddleCard.addEventListener("click", () => {
            riddleCard.classList.toggle("flipped");
        });

        riddlesContainer.appendChild(riddleCard);

        // Animatsiya uchun kechiktirish
        setTimeout(() => {
            riddleCard.style.opacity = 1;
        }, index * 150);
    });
});
