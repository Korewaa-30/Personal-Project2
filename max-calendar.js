let timeElement = document.querySelector("#time");
let dateElement = document.querySelector("#date");
let dayElement = document.querySelector("#day");
let monthElement = document.querySelector("#month-picker");
let calendarElement = document.querySelector("#calendar");
let month_list_list = document.querySelector(".month-list");

let today = new Date();
let desiredMonth = today.getMonth();
let desiredYear = today.getFullYear();

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

function isLeapYear(year) {
	return (
		(year % 4 === 0 && year % 100 !== 0) ||
		(year % 100 === 0 && year % 400 === 0)
	);
}

function getFebDays(year) {
	return isLeapYear(year) ? 29 : 28;
}

function selectMonth() {
	month_list_list.classList.remove("hideonce");
	month_list_list.classList.remove("hide");
	month_list_list.classList.add("show");
}

monthElement.addEventListener("click", selectMonth);

function generateCalendar(selectedMonth, year) {
	let calendarDays = document.querySelector("#days");
	calendarDays.innerHTML = "";

	let calendarYear = document.querySelector("#year");
	let monthDays = [
		31,
		getFebDays(year),
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31,
	];

	monthElement.innerHTML = selectedMonth[month];
	calendarYear.innerHTML = year;
	let firstDay = new Date(year, month, 1);

	for (let i = 0; i < firstDay.getDay(); i++) {
		let emptyDay = document.createElement("div");
		emptyDay.classList.add("empty-day");
		calendarDays.appendChild(emptyDay);
	}

	for (let i = 0; i <= monthDays[month] + firstDay.getDay() - 1; i++) {
		let day = document.createElement("div");
		if (i >= firstDay.getDay()) {
			day.innerHTML = i - firstDay.getDay() + 1;
			if (
				i - firstDay.getDay() + 1 === today.getDate() &&
				year === today.getFullYear() &&
				month === today.getMonth()
			) {
				day.classList.add("current-date");
			}
		}
		calendarDays.appendChild(day);
	}
}

generateCalendar(desiredMonth, desiredYear);
