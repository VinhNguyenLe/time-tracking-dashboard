const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const daily = $('.daily')
const weekly = $('.weekly')
const monthly = $('.monthly')

const dateSelected = $$('.date-text')
const currentHours = $$('.current-hours')
const previousHours = $$('.previous-hours')

function getDailyDate (){
    fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            data.forEach((day, index) => {
                currentHours[index].innerText = data[index].timeframes.daily.current + 'hrs'
                previousHours[index].innerText = data[index].timeframes.daily.previous + 'hrs'
            });
        })
}

function getWeeklyDate (){
    fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            data.forEach((week, index) => {
                currentHours[index].innerText = data[index].timeframes.weekly.current + 'hrs'
                previousHours[index].innerText = data[index].timeframes.weekly.previous + 'hrs'
            });
        })
}

function getMonthlyDate (){
    fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            data.forEach((month, index) => {
                currentHours[index].innerText = data[index].timeframes.monthly.current + 'hrs'
                previousHours[index].innerText = data[index].timeframes.monthly.previous + 'hrs'
            });
        })
}

dateSelected.forEach((select, index) => {
    select.addEventListener('click', () => {
        $('.date-text.active').classList.remove('active')
        select.classList.add('active')
        switch(index){
            case 0:
                getDailyDate()
                break 
            case 1:
                getWeeklyDate()
                break
            case 2:
                getMonthlyDate()
                break
        }
    })
})