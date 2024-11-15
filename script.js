const facts = [
    "I am an 18-year-old tech enthusiast.",
    "I love traveling and exploring new cultures.",
    "I love trying different cuisines."
];

function showFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').textContent = facts[randomIndex];
}
