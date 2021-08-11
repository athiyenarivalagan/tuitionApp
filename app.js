// function getSelectValue(select1)
// {
//   if(select1 ="Primary 1")
//   {
//     $("#select2 option[value='"+select1+"']").hide();
//     //$("#select2 option[value =!'"+select1+"']").show();
//   }
// }

// $(document).ready(function() {
//   $("#layout_select").children('option:gt(0)').hide();
//   $("#column_select").change(function() {
//       $("#layout_select").children('option').hide();
//       $("#layout_select").children("option[value^=" + $(this).val() + "]").show()
//   })
// })
// const grade = [
// {name:'Primary 1'},
// {name:'Primary 2'},
// {name:'Secondary 1'}
// ];

// let suggestions= [ "primary 1","primary 2","primary 3","primary 4","primary 5","primary 6", "secondary 1","secondary 2","secondary 3","secondary 4","junior college 1","junior College 2"];

// // const searchInput = document.querySelector('.Grade-search');
// // const suggestionsPanel = document.querySelector('.suggestions');
// // searchInput.addEventListener('input',function() {
// //     const input = searchInput.value;
// //     suggestionsPanel.innerHTML = '';
// //     const suggestions =  grade.filter(function(grade) {
// //         return grade.name.toLowerCase().startsWith(input);
// //     });
// //   suggestions.forEach(function(suggested) {
// //     const div= document.createElement('div');
// //     div.innerHTML = suggested.name;
// //     suggestionsPanel.appendChild(div);
// //   });
// //   if(input == '')
// //   {
// //       suggestionsPanel.innerHTML = '';
// //   }






// // the right one
// const searchInput = document.querySelector('.Grade-search');
// const suggestionsPanel = document.querySelector('#suggestions');
// searchInput.addEventListener('input',function() {
//     const input = searchInput.value;
//     suggestionsPanel.innerHTML = '';
//     const suggestions = grade.filter(function(grade) {
//         return grade.name.toLowerCase().startsWith(input);
//     });
//   suggestions.forEach(function(suggested) {
//     const div= document.createElement('div');
//     div.innerHTML = suggested.name;
//     suggestionsPanel.appendChild(div);
//   });
//   if(input == '')
//   {
//       suggestionsPanel.innerHTML = '';
//   }
// })

// const searchWrapper= document.querySelector('.search-input');
// const inputBox= searchWrapper.querySelector('input');
// const suggBox= searchWrapper.querySelector('.autocom-box');

// inputBox.onkeyup = (e) =>{
//   let userData = e.target.value;
//   let emptyArray=[];
//   if(userData){
//     emptyArray = suggestions.filter((data)=>{
//       return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
      
//     });
//     emptyArray = emptyArray.map((data)=>{
//       return data= '<li>'+data+'</li>';
//     });
//     console.log(emptyArray);
//     searchWrapper.classList.add("active");
//     showSuggestions(emptyArray);
//     let allList = suggBox.querySelectorAll("li");
//     for(let i = 0; i < allList.length; i++){
     
//       allList[i].setAttribute("onclick","select(this)");
//     }
//   }else{
//          searchWrapper.classList.remove('active');
//   }
 
// } 

// function select(element){
//   let selectUserData = element.textContent;
//   inputBox.value = selectUserData;
// }

// function showSuggestions(list){
//   let listData;
//   if(!list.length){
//        userValue = inputBox.value;
//        listData = '<li>'+ muserValue + '</li>';
    
//   }else{
//     listData = list.join('');
//   }
//   suggBox.innerHTML = listData;
// }
// //end
 