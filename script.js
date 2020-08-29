$(document).ready(onReady);

function onReady() {
    console.log('I am ready');

    $('#addEmployeeBtn').on('click', addEmployee);
}

// create array of an object to store employee information
let employeeInfo = [];

// create way to capture information on submit

function addEmployee() {
    console.log("in addEmployee");
    // add way to get new employee record
    const newRecord = {
        first: $("#firstNameIn").val(),
        last: $("#lastNameIn").val(),
        id: $("#idIn").val(),
        title: $("#titleIn").val(),
        salary: $("#salaryIn").val(),
    }; // end newRecord
    employeeInfo.push(newRecord);
    console.log(employeeInfo);
    // pass employeeInfo to DOM
    displayEmployees();
} // end addEmployee

function displayEmployees() {
    console.log('in displayEmployees');
    // mess with outputArea
    let el = $('#outputArea');
    el.empty();
    // loop through employeeInfo to display contents
    for (let i = 0; i < employeeInfo.length; i++) {
        el.append(`
        <li>
        ${employeeInfo[i].first}
        ${employeeInfo[i].last}
        ${employeeInfo[i].id}
        ${employeeInfo[i].title}
        ${employeeInfo[i].salary}
        </li>
        `);
        el.empty();
    } // end for

} // end displayEmployees