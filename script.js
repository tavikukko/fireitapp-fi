// ================================
// Text Animation (Fire it/AI App)
// ================================
function changeText() {
    const changeableTextElement = document.getElementById('changeable-text');
    if (!changeableTextElement) return;
    
    const originalText = changeableTextElement.innerHTML;
    const newText = originalText === 'it' ? 'AI' : 'it';

    changeableTextElement.classList.add('spin');

    setTimeout(() => {
        changeableTextElement.innerHTML = newText;
        changeableTextElement.style.color = newText === 'AI' ? '#ffd700' : 'white';
        changeableTextElement.style.textShadow = newText === 'AI' 
            ? '0 0 20px rgba(255,215,0,0.8), 0 0 40px rgba(255,150,0,0.5)' 
            : '0 0 30px rgba(255,255,255,0.3)';
        changeableTextElement.style.width = newText === 'AI' ? '90px' : '70px';

        setTimeout(() => {
            changeableTextElement.classList.remove('spin');
            changeableTextElement.classList.add('spin-back');

            setTimeout(() => {
                changeableTextElement.innerHTML = originalText;
                changeableTextElement.style.color = 'white';
                changeableTextElement.style.textShadow = '0 0 30px rgba(255,255,255,0.3)';
                changeableTextElement.style.width = '70px';
            }, 500);

            setTimeout(() => {
                changeableTextElement.classList.remove('spin-back');
            }, 1000);
        }, 1000);
    }, 500);

    // Set a new random interval between 4000ms and 12000ms
    const randomInterval = Math.floor(Math.random() * (12000 - 4000 + 1)) + 4000;
    setTimeout(changeText, randomInterval);
}

// Start the first change with a random interval
const initialInterval = Math.floor(Math.random() * (8000 - 3000 + 1)) + 3000;
setTimeout(changeText, initialInterval);

// ================================
// Subtle mouse parallax effect
// ================================
document.addEventListener('mousemove', (e) => {
    const content = document.querySelector('.content');
    if (!content) return;
    
    const xAxis = (window.innerWidth / 2 - e.pageX) / 80;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 80;
    
    content.style.transform = `translateX(${xAxis}px) translateY(${yAxis}px)`;
});