function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();
 
// #1 
function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysMonth = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        const days = dezDaysList[index];
        const daylistItem = document.createElement('li');
        daylistItem.innerHTML = days;
        daylistItem.classList.add('day');
        
        if (days === 24 || days === 25 || days === 31) {
            daylistItem.classList.add('holiday');
        }
        
        if (days === 4 || days === 11 || days === 18 || days === 25) {
            daylistItem.classList.add('friday');
        }

        daysMonth.appendChild(daylistItem);
    };
};

createDaysOfTheMonth();

// #2
function buttonHolidays(string) {
    const buttons = document.querySelector('.buttons-container');
    
    const holiday = document.createElement('button');
    holiday.innerHTML = string;
    holiday.id = 'btn-holiday';
    
    buttons.appendChild(holiday);
}

let str = 'Feriados';
buttonHolidays(str);

// #3
function changeColorHolidays() {
    const holidaysClass = document.querySelectorAll('.holiday')
    const holidayColor = 'red';
    const standardColor = 'rgb(238,238,238)';

    for (let i = 0; i < holidaysClass.length; i += 1) {
        if (holidaysClass[i].style.backgroundColor === holidayColor) {    
        holidaysClass[i].style.backgroundColor = standardColor;
        } else {
            holidaysClass[i].style.backgroundColor = holidayColor;
        }
    }
}
const colorButton = document.querySelector('#btn-holiday');
colorButton.addEventListener('click', changeColorHolidays);

// #4
function createButtonFriday(string) {
    const buttons = document.querySelector('.buttons-container');
    
    const friday = document.createElement('button');
    friday.innerHTML = string;
    friday.id = 'btn-friday';
    
    buttons.appendChild(friday);
}

let strFriday= 'Sexta-feira';
createButtonFriday(strFriday);

// #5
function changeColorFridays() {
    const fridayClass = document.querySelectorAll('.friday');
    const standardColor = '#777';
    const newColor = 'yellow'; 
    
    for(let i = 0; i < fridayClass.length; i += 1) {
        if (fridayClass[i].style.color === newColor) {
            fridayClass[i].style.color = standardColor;
        } else {
            fridayClass[i].style.color = newColor
        }
    }
}

const buttonFriday = document.querySelector('#btn-friday');
buttonFriday.addEventListener('click', changeColorFridays);

// #6
function zoom() {
    let textDay = document.querySelector('#days');
    textDay.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '40px';
    });
}

zoom()
  
function zoomLeave() {
    let textDay = document.querySelector('#days');
    textDay.addEventListener('mouseout', function(event) {
      event.target.style.fontSize = '20px';
    });
}

zoomLeave()

// #7
function addTasks(task) {
    let taskElement = document.createElement('span');
    taskElement.innerText = task;
    
    const myTasks = document.querySelector('.my-tasks');
    myTasks.appendChild(taskElement);
};

addTasks('Estudar para arrebentar no projeto!!!!');

// #8
function colorTask(color) {
    const taskColor = document.createElement('div');
    taskColor.className = 'task';
    taskColor.style.backgroundColor = color

    const myTasks = document.querySelector('.my-tasks');
    myTasks.appendChild(taskColor)
};

colorTask('green')

// #9
const task = document.querySelector('.task');
const taskClicked = document.getElementsByClassName('task selected')

task.addEventListener('click', function(event) {
    if (taskClicked.length === 0) {
        event.target.className = 'task selected';
    } else {
        event.target.className = 'task';
    }
}
);

// #10

// #Bônus
