// /* ----------- Timer to boot the 10 minute countdown ----------- */

function timerBoot(duration, display) {
	let timer = duration;
	let minutes;
	let seconds;
	setInterval(() => {
			minutes = parseInt(timer / 60, 10);
			seconds = parseInt(timer % 60, 10);
			minutes = minutes < 10 ? `0${minutes}` : minutes;
			seconds = seconds < 10 ? `0${seconds}` : seconds;
			display.textContent = `${minutes}:${seconds}`;
			if (--timer < 0) {
					timer = duration;
			}
	}, 1000);
}
window.onload = () => {
	const tenMinutes = 60 * 10;
	const display = document.querySelector('#countdown');
	timerBoot(tenMinutes, display);
};