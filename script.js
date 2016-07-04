// variables declaration
var fName = document.getElementById('firstName');
var lName = document.getElementById('lastName');
var phNum = document.getElementById('phoneNumber');
var strAdd = document.getElementById('streetAddress');
var cityNm = document.getElementById('city');
var stateNm = document.getElementById('state');
var form;
var jsArray = [];
var forJS;

// function to get data from form and to flush it
function getInfo(fName, lName, phNum, strAdd, cityNm, stateNm) {
    this.firstName = fName.value;
    this.lastName = lName.value;
    this.phoneNumber = phNum.value;
    this.streetAddress = strAdd.value;
    this.city = cityNm.value;
    this.state = stateNm.value;
    console.log(fName.value+' '+lName.value+' '+phNum.value);
    $('form').find("input[type=text], textarea").val("");
    return;
};

// the Add button event handler
$('#addButton').on('click', function(event){
  event.preventDefault();
// creating JSON object for each contact-info added
  form = new getInfo(fName, lName, phNum, strAdd, cityNm, stateNm);
  var forS = JSON.stringify(form);
  var forJS = $.parseJSON(forS);
  jsArray.push(forJS);
  console.log(jsArray);
// adding the li for each contact and displaying Name & Surname and the rest hidden
  $('<li class="listHyperlink"></li>').appendTo('.contactList ul').html(forJS.firstName+' '+forJS.lastName);
  $('<p hidden></p>').appendTo('li:last').html(' / '+forJS.phoneNumber+' / '+forJS.streetAddress+' / '+forJS.city+' / '+forJS.state);
// showing the list_container
  $('.list_container').show();
});

// li handler on click
$('ul').on('click','.listHyperlink,li',function(){
  $('.info_container').show();
  var iCt = $(this).closest('li').text();
  var index = $(this).index();
  $('.title').html(jsArray[index].firstName +' '+jsArray[index].lastName);
  // $('.firstNameTitle') // do something to show the relevant info
  $('.list_fName').html('First Name: '+jsArray[index].firstName);
  // $('.lastNameTitle') // the same as above - will discuss options in session
  $('.list_lName').html('Last Name: '+jsArray[index].lastName);
  $('.list_phNum').html('Phone Number: '+jsArray[index].phoneNumber);
  $('.list_strAdd').html('Address: '+jsArray[index].streetAddress);
  $('.list_city').html('City: '+jsArray[index].city);
  $('.list_state').html('State: '+jsArray[index].state);

  // either a RegEx to sift through the details
  // or the prof version and use JSON objects to retrieve info
});

$(document).ready(function(){

  $('.info_container').hide();
  $('.list_container').hide();


});
