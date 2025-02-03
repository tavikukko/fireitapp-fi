function changeText() {
    const changeableTextElement = document.getElementById('changeable-text');
    const originalText = changeableTextElement.innerHTML;
    const newText = originalText === 'it' ? 'AI' : 'it';

    changeableTextElement.classList.add('spin');

    setTimeout(() => {
        changeableTextElement.innerHTML = newText;
        changeableTextElement.style.color = newText === 'AI' ? 'black' : 'white';
        changeableTextElement.style.width = newText === 'AI' ? '90px' : '70px'; // Change width

        setTimeout(() => {
            changeableTextElement.classList.remove('spin');
            changeableTextElement.classList.add('spin-back');

            setTimeout(() => {
                changeableTextElement.innerHTML = originalText;
                changeableTextElement.style.color = 'white';
                changeableTextElement.style.width = '70px'; // Change width back
            }, 500); // Change text and color after half a second

            setTimeout(() => {
                changeableTextElement.classList.remove('spin-back');
            }, 1000); // Duration of the spin-back animation
        }, 1000); // Duration to show "AI"
    }, 500); // Wait for half a second before changing the text and color

    // Set a new random interval between 3000ms and 15000ms
    const randomInterval = Math.floor(Math.random() * (15000 - 3000 + 1)) + 3000;
    setTimeout(changeText, randomInterval);
}

// Start the first change with a random interval between 3000ms and 15000ms
const initialInterval = Math.floor(Math.random() * (15000 - 3000 + 1)) + 3000;
setTimeout(changeText, initialInterval);