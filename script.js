//Profile Navigation
(function() {
	const user = document.querySelector(".user-nav__user");
	const profile_settings = document.querySelector(".user-nav__profile");
	let active_profile = false;
	user.addEventListener("click", function() {
		profile_settings.style.visibility = "visible";
		profile_settings.style.opacity = "1";
		profile_settings.style.height = "17rem";
		profile_settings.style.fontSize = "2rem";
		active_profile = true;
	});
	document.addEventListener("click", function(e) {
		if (active_profile) {
			if (!e.target.className.includes("user-nav")) {
				profile_settings.style.visibility = "hidden";
				profile_settings.style.opacity = "0";
				profile_settings.style.fontSize = "0rem";
				profile_settings.style.height = "0rem";

				active_profile = false;
			}
		}
	});
})();
//Messages navigation
(function() {
	const close__messages = document.querySelector(".message__close");
	const message = document.querySelector(".message");
	const messages = document.querySelectorAll(".user-nav__icon-box")[1];
	close__messages.addEventListener("click", function() {
		message.style.transform = "scale(0)";
	});
	console.log(messages);
	messages.addEventListener("click", function(e) {
		e.preventDefault();
		message.style.transform = "scale(1)";
	});
})();
//Active and Offline Profiles
(function() {
	const profiles = document.querySelectorAll(".message__photo");
	Array.from(profiles).map(i => (i.style.border = "8px solid #46494c"));
	const randomNumber = Math.floor(Math.random() * 13 + 1);
	const notActive = profiles.length - randomNumber;
	for (let index = 0; index < randomNumber; index++) {
		const element = profiles[[Math.floor(Math.random() * profiles.length)]];
		element.style.border = "8px solid #75e4b3";
	}
})();
//Messages from users
(function() {
	const messages = [];
	fetch("https://jsonplaceholder.typicode.com/comments")
		.then(blob => blob.json())
		.then(res => res.map(i => i.body))
		.then(result => messages.push(...result))
		.then(() => {
			const allMessages = document.querySelectorAll(".message__content");
			allMessages.forEach((data, index) => {
				data.textContent = messages[index];
			});
		});
})();
