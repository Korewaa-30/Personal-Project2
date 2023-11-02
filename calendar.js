let dayElement = document.querySelector("#day");
let dateElement = document.querySelector("#date");
let monthElement = document.querySelector("#month");
let yearElement = document.querySelector("#year");

let today = new Date();
console.log(today);

let day = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
dayElement.innerHTML = day[today.getDay()];

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
dateElement.innerHTML = ordinalDay;

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
monthElement.innerHTML = month[today.getMonth()];

yearElement.innerHTML = today.getFullYear();
