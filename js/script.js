// EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let id              // THE ID TEXT BOX
let name            // THE NAME TEXT BOX
let ext             // THE EXT TEXT BOX
let email           // THE EMAIL BUTTON
let department      // THE DEPARTMENT SELECTOR
let submit          // THE SUBMIT BUTTON

const $ = (addForm) => document.getElementById(addForm)

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCount = document.getElementById('employees')

// ADD EMPLOYEE
addForm.addEventListener('submit', (e) => {

    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    id = $('id').value
    name = $('name').value
    ext = $('extension').value
    email = $('email').value
    department = $('department').value
    submit = $('submit').value

    if (id == '' || name == '' || ext == '' || email == '') {
        alert('All fields are required')
        return
    }

    if (id.length != 8) {
        alert(`ID must be 8 numbers`)
        return
    }

    if (ext.length != 4) {
        alert(`Ext must be 4 numbers`)
        return
    }

    // console.log(`ID: ${id}`)
    // console.log(`Name: ${name}`)
    // console.log(`Extension: ${ext}`)
    // console.log(`Email: ${email}`)
    // console.log(`Deparment: ${department}`)

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let table = document.getElementById('employees')
    let row = table.insertRow(-1)

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(0)
    let cell3 = row.insertCell(0)
    let cell4 = row.insertCell(0)
    let cell5 = row.insertCell(0)
    let cell6 = row.insertCell(0)

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS    
    let newEmployeeDepartment = document.createTextNode(department)
    cell2.appendChild(newEmployeeDepartment)

    let newEmployeeEmail = document.createTextNode(email)
    cell3.appendChild(newEmployeeEmail)

    let newEmployeeExt = document.createTextNode(ext)
    cell4.appendChild(newEmployeeExt)

    let newEmployeeName = document.createTextNode(name)
    cell5.appendChild(newEmployeeName)

    let newEmployeeId = document.createTextNode(id)
    cell6.appendChild(newEmployeeId)

    // this works too? wondering why we can't do it this way
    // cell1.innerHTML = department
    // cell2.innerHTML = email
    // cell3.innerHTML = ext
    // cell4.innerHTML = name
    // cell5.innerHTML = id

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')

    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'

    // CREATE TEXT NODE FOR DELTE BUTTON AND SET TO 'X'
    let textDelete = document.createTextNode('X')

    // APPEND TEXT NODE TO DELETE BUTTON
    deleteBtn.appendChild(textDelete)
    cell1.appendChild(deleteBtn)

    // RESET THE FORM
    addForm.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    let rows = employeeCount.rows.length - 1
    // console.log(rows)
    document.getElementById('empCount').innerHTML = ' (' + rows + ')'
})

// DELETE EMPLOYEE
employees.addEventListener('click', (e) => {

    // CHECK AND SEE IF THE DELETE BUTTON WAS CLICKED 
    if (e.target.classList.contains('delete')) {

        // DISPLAY CONFIRMATION OF THE DELETE TO THE USER
        if (confirm('Are you sure you want to delete this employee?')) {

            // REMOVE THE SELECTED ROW
            employees.deleteRow(e.target.parentNode.parentNode.rowIndex)

            // REMOVE NUMBER FROM COUNTER
            let rows = employeeCount.rows.length - 1
            document.getElementById('empCount').innerHTML = ' (' + rows + ')'
        }
    }
})
