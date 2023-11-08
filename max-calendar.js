let timeElement = document.querySelector("#time");
let dateElement = document.querySelector("#date");

let today = new Date();

let hours = today.getHours();
let amOrPm = hours >= 12 ? "PM" : "AM";
hours = hours % 12 || 12;

let minutes = today.getMinutes();
if (minutes < 10) {
	minutes = `0${minutes}`;
}

timeElement.innerHTML = `${hours}:${minutes} ${amOrPm}`;

function getOrdinalSuffix(day) {
	let j = day % 10,
		k = day % 100;
	if (j === 1 && k !== 11) {
		return day + "st";
	}
	if (j === 2 && k !== 12) {
		return day + "nd";
	}
	if (j === 3 && k !== 13) {
		return day + "rd";
	} else {
		return day + "th";
	}
}

let dayOfMonth = today.getDate();
let ordinalDay = getOrdinalSuffix(dayOfMonth);

let month = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

dateElement.innerHTML = `${ordinalDay} ${
	month[today.getMonth()]
}, ${today.getFullYear()}`;
