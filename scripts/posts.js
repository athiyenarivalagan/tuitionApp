var postList = []

// Grab elements from html
var student_name = document.getElementById("Username")
var grade = document.getElementById("column_select")
var subject = document.getElementById("layout_select")
var price = document.getElementById("Price_Range")
var student_location = document.getElementById("studentlocation")


document.getElementById("submitForm").addEventListener("click", getInfo);

//function to grab input value from elements
function getInfo() {
  var studentInfo = {
    name: student_name.value,
    grade: grade.options[grade.selectedIndex].text,
    subject: subject.options[subject.selectedIndex].text,
    price: price.value,
    location: student_location.value
  }

  console.log(studentInfo)
  postList.push(studentInfo);
}