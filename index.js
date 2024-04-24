let ElResul1 = document.getElementById("result-1")
let ElResul2 = document.getElementById("result-2")
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:",.<>?`~';
let passwordLength = 13

function startProcess() {
	getRandomCharacter()
	const generatedPasswordOne = generateRandomPassword()
	const generatedPasswordTwo = generateRandomPassword()
	ElResul1.textContent = generatedPasswordOne
	ElResul2.textContent = generatedPasswordTwo
}

function getRandomCharacter() {
	let randomChar = Math.floor(Math.random() * characters.length)
	return characters[randomChar]
}

function generateRandomPassword() {
	let randomPassword = ""
	for (let i = 0; i < passwordLength; i++) {
		randomPassword += getRandomCharacter()
	}
	return randomPassword
}

function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => {
        const notification = document.getElementById('copy-notification');
        notification.style.display = 'block'; // Show the notification
        setTimeout(() => {
            notification.style.display = 'none'; // Hide after 2000ms (2 seconds)
        }, 2000);
    }).catch(err => {
        console.error('Error in copying text: ', err);
    });
}