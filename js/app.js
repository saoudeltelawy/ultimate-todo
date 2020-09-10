// Alertify JS Settings
alertify.defaults.glossary.title = 'Ultimate To-Do List';
// alertify.set('notifier','position', 'top-center');  //#Alertify Positions


// Variables 
const form = document.querySelector('#task-form');
const tasksList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filterInput = document.getElementById('filter');
const addTaskInput = document.querySelector('#task');


// Tasks Filter 

filterInput.addEventListener('click', moveArrow);

function moveArrow() {
  let downArrow = document.querySelector('.fa-chevron-right');

  if (downArrow.classList.contains = ('.fa-chevron-right'))

  {
    // downArrow.className="fas fa-chevron-down";
    downArrow.classList.remove('fa-chevron-right');

    downArrow.classList.add('fa-chevron-down');

  }

}

loadEventListeners();

function loadEventListeners() {

  // #Add Task event
  form.addEventListener('submit', addTask);
  // Remove Task Event "Delgation"
  tasksList.addEventListener('click', removeTask);
  // Clear Tasks 
  clearBtn.addEventListener('click', clearTasks);

}

// Add Task
function addTask(e) {
  if (addTaskInput.value === '') {
    // alertify.alert('Add a task!');
    alertify
      .alert("Add a task!", function () {
        alertify.message('Try Again!');
      });

    return false;

  }

  // create Li element for Ul.collection 
  const li = document.createElement("li");

  li.className = "collection-item";
  // Li Text & Append 
  li.appendChild(document.createTextNode(addTaskInput.value));

  // &Attach Link Element 
  const a_link = document.createElement('a');
  a_link.className = "delete-item secondary-content";

  // &Attach Icon Element 
  a_link.innerHTML = '<i class="fas fa-trash"></i>';

  //  Append a Link to Li 
  li.appendChild(a_link);

  // Finally Append li to the Ul.collection 
  // console.log(li);  #TEST 
  tasksList.appendChild(li);

  addTaskInput.value = '';

  alertify.success('Task Added Successfully!');


  e.preventDefault();
}


// Remove Task

function removeTask(e) {
  // console.log(e.target);  
  if (e.target.parentElement.classList.contains('delete-item')) {
    // console.log(e.target.parentElement);  #TEST
    // Remove The Task 
    let liContent = document.querySelector('li').textContent;
    alertify.confirm(`Confirm Delete the following Task ${liContent}?`, 'Cancel to back to your To Do List', function () {

      if (alertify.error('Task Deleted')) {
        e.target.parentElement.parentElement.remove();

      }

    }, function () {
      alertify.success('Cancelled')
    });


    // e.target.parentElement.parentElement.remove();
    // alertify.error('Task Deleted');

  }
}

// Clear Tasks 
function clearTasks() {
  // tasksList.innerHTML = '';

  // Try Method 2 Using While 
  if (tasksList.firstChild) {
    alertify.confirm("Are you sure you want to clear all tasks",
      function () {
        alertify.error('All Tasks Had been Cleared!');
        tasksList.innerHTML = '';

      },
      function () {
        alertify.success('Action Cancelled!');
      });
  }


}