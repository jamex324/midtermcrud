let fname = document.getElementById('fname'),
    mname = document.getElementById('mname'),
    lname = document.getElementById('lname'),
    age = document.getElementById('age'),
    gender = document.getElementById('gender');
    bday = document.getElementById('bday');
    course = document.getElementById('course');
    syear = document.getElementById('syear');
submit = document.getElementById('submit')


let arrayOfEmployes 

let Mode = "create"

let TmpId  
// temporary variable to save the employe id 

// let's save informations in localstorage

if(localStorage.arrayOfEnrollees != null){
    arrayOfEnrollees = JSON.parse(localStorage.getItem('arrayOfEnrollees'))
}
else{
    arrayOfEnrollees = []
}



submit.addEventListener('click', function (e) {
    if(Mode === "create"){

        let EnrolleesObject = {
            fname: fname.value,
            mname: mname.value,
            lname: lname.value,
            age: age.value,
            gender: gender.value,
            bday: bday.value,
            course: course.value,
            syear: syear.value
        }
        arrayOfEnrollees.push(EnrolleesObject)
        localStorage.setItem('arrayOfEnrollees', JSON.stringify(arrayOfEnrollees))
        console.log(arrayOfEnrollees)
        DispayInfos()
        clearText()
    }
    else{
        submit.textContent = "Update"
        UpdateEnrollee(TmpId)  // here we replace id with TmpId var because id is local variable
        DispayInfos()
        submit.textContent = "Create"
        Mode = "create"
    }
    e.preventDefault()
})

function DispayInfos() {
    let table = '';
    for (let index = 0; index < arrayOfEnrollees.length; index++) {
      const enrolleeIndex = index; // Store the actual index
      table += `
        <tr>
          <th scope="row">${index}</th>
          <td>${arrayOfEnrollees[index].fname}</td>
          <td>${arrayOfEnrollees[index].mname}</td>
          <td>${arrayOfEnrollees[index].lname}</td>
          <td>${arrayOfEnrollees[index].age}</td>
          <td>${arrayOfEnrollees[index].gender}</td>
          <td>${arrayOfEnrollees[index].bday}</td>
          <td>${arrayOfEnrollees[index].course}</td>
          <td>${arrayOfEnrollees[index].syear}</td>
          <td>
            <button class="btn btn-warning" onclick="UpdateEnrollee(${enrolleeIndex})">Edit</button>
            <button class="btn btn-danger" onclick="DeleteEnrollee(${enrolleeIndex})">Remove</button>
          </td>
        </tr>
      `;
    }
    document.getElementById('tbody').innerHTML = table;
  }
function clearText() {
        fname.value = "",
        mname.value = "",
        lname.value = "",
        age.value = "",
        gender.value = "",
        bday.value = "",
        course.value = "",
        syear.value = ""
}




function DeleteEnrollee(id) {
    arrayOfEnrollees.splice(id, 1) // deleting 
    localStorage.setItem('arrayOfEnrollees', JSON.stringify(arrayOfEnrollees)) 
    DispayInfos() 
}



function UpdateEnrollee(id) {
    TmpId = id //updating
    Mode = "update"
    submit.textContent = "Update"
    


    let EnrolleesObject = {
        fname: fname.value,
        mname: mname.value,
        lname: lname.value,
        age: age.value,
        gender: gender.value,
        bday: bday.value,
        course: course.value,
        syear: syear.value,

    }
       fname.value = arrayOfEnrollees[id].fname
       mname.value = arrayOfEnrollees[id].mname
       lname.value = arrayOfEnrollees[id].lname
       age.value = arrayOfEnrollees[id].age
       gender.value = arrayOfEnrollees[id].gender
       bday.value = arrayOfEnrollees[id].bday
       course.value = arrayOfEnrollees[id].course
       syear.value = arrayOfEnrollees[id].syear

       arrayOfEnrollees[TmpId] = EnrolleesObject
        localStorage.setItem('arrayOfEnrollees', JSON.stringify(arrayOfEnrollees))
}


DispayInfos();