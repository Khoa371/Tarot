const tarotDeck = [
    { name: 'The Fool', image: 'The Fool.jpg', meaning: 'Khởi đầu mới, sự ngây thơ, tiềm năng' },
    { name: 'The Magician', image: 'The Magician.jpg', meaning: 'Khả năng sáng tạo, quyền lực cá nhân' },
    { name: 'The High Priestess', image: 'The High Priestess.jpg', meaning: 'Trực giác, sự bí ẩn, kiến thức ẩn giấu' },
    { name: 'The Empress', image: 'The Empress.jpg', meaning: 'Sự sáng tạo, thiên nhiên, tình mẫu tử' },
    { name: 'The Emperor', image: 'The Emperor.jpg', meaning: 'Quyền lực, sự ổn định, lãnh đạo' },
    { name: 'The Hierophant', image: 'The Hierophant.jpg', meaning: 'Truyền thống, giáo dục, niềm tin' },
    { name: 'The Lovers', image: 'The Lovers.jpg', meaning: 'Tình yêu, sự lựa chọn, mối quan hệ' },
    { name: 'The Chariot', image: 'The Chariot.jpg', meaning: 'Chiến thắng, quyết tâm, quyền lực' },
    { name: 'Strength', image: 'Strength.jpg', meaning: 'Sức mạnh nội tâm, lòng can đảm, sự kiên định' },
    { name: 'The Hermit', image: 'The Hermit.jpg', meaning: 'Sự chiêm nghiệm, cô độc, tìm kiếm sự thật' },
    { name: 'Wheel of Fortune', image: 'Wheel of Fortune.jpg', meaning: 'Số phận, thay đổi, cơ hội' },
    { name: 'Justice', image: 'Justice.jpg', meaning: 'Công lý, sự thật, luật pháp' },
    { name: 'The Hanged Man', image: 'The Hanged Man.jpg', meaning: 'Sự hy sinh, góc nhìn mới, sự đình trệ' },
    { name: 'Death', image: 'Death.jpg', meaning: 'Kết thúc, sự chuyển đổi, khởi đầu mới' },
    { name: 'Temperance', image: 'Temperance.jpg', meaning: 'Sự cân bằng, hòa hợp, điều độ' },
    { name: 'The Devil', image: 'The Devil.jpg', meaning: 'Sự cám dỗ, sự ràng buộc, bóng tối' },
    { name: 'The Tower', image: 'The Tower.jpg', meaning: 'Sự phá hủy, biến cố bất ngờ, sự thật đau lòng' },
    { name: 'The Star', image: 'The Star.jpg', meaning: 'Hy vọng, cảm hứng, sự bình yên' },
    { name: 'The Moon', image: 'The Moon.jpg', meaning: 'Sự bí ẩn, giấc mơ, sự nhầm lẫn' },
    { name: 'The Sun', image: 'The Sun.jpg', meaning: 'Hạnh phúc, thành công, sự rõ ràng' },
    { name: 'Judgement', image: 'Judgement.jpg', meaning: 'Phán xét, sự tỉnh thức, sự tái sinh' },
    { name: 'The World', image: 'The World.jpg', meaning: 'Hoàn thành, toàn vẹn, sự viên mãn' },
];


document.getElementById('drawBtn').addEventListener('click', () => {
    const resultDiv = document.getElementById('result');
    const meaningDiv = document.getElementById('meaning');
    resultDiv.innerHTML = '';
    meaningDiv.innerHTML = '';

    const drawnCards = [];
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * tarotDeck.length);
        const drawnCard = tarotDeck[randomIndex];
        drawnCards.push(drawnCard);
        resultDiv.innerHTML += `<img src="${drawnCard.image}" alt="${drawnCard.name}" class="tarot-card">`;
        meaningDiv.innerHTML += `<p><strong>${drawnCard.name}:</strong> ${drawnCard.meaning}</p>`;
    }

    const summaryMeaning = summarizeMeanings(drawnCards);
    meaningDiv.innerHTML += `<h3>Kết quả tổng hợp:</h3><p>${summaryMeaning}</p>`;
});

function summarizeMeanings(cards) {
    return `Sự kết hợp của ${cards[0].name}, ${cards[1].name}, và ${cards[2].name} cho thấy một giai đoạn với ${cards[0].meaning.toLowerCase()}, ${cards[1].meaning.toLowerCase()}, và ${cards[2].meaning.toLowerCase()}.`;
}
