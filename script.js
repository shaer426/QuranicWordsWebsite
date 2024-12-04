document.addEventListener("DOMContentLoaded", () => {
    const words = [
        { arabic: "مِنْ", transliteration: "min", translation: "From", frequency: 3226 },
        { arabic: "لَا", transliteration: "la", translation: "No/Not", frequency: 3226 },
        { arabic: "مَا", transliteration: "ma", translation: "What/Not", frequency: 3226 },
        { arabic: "إِنَّ", transliteration: "inna", translation: "Indeed", frequency: 3226 },
        { arabic: "فِي", transliteration: "fi", translation: "In", frequency: 3226 },
    ];

    const tableBody = document.getElementById("wordTable");
    words.forEach(word => {
        const row = `<tr>
                        <td>${word.arabic}</td>
                        <td>${word.transliteration}</td>
                        <td>${word.translation}</td>
                        <td>${word.frequency}</td>
                     </tr>`;
        tableBody.innerHTML += row;
    });
});
