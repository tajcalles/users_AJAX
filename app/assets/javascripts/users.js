$(document).ready(function () {
  $.ajax({
    url: 'http://json-server.devpointlabs.com/api/v1/users',
    method: 'GET',
    dataType: 'JSON'
  }).done(function (users) {
    users.forEach(function (user) {
      var list = $('.user-list')
      var li = '<li data-user-id="' + user.id + '"><strong>' + user.first_name +
      ' - ' + user.last_name + '</strong>: ' + user.phone_number + '</li>' +
      '<button class="btn blue edit-button">Edit</button>' +
      '<button class="btn red delete-button">Delete</button>'
      list.append(li)
    });
  });
});

$(document).on('click', '#create-user', function(){
  var $firstName = $('#first-name')
  var $lastName = $('#last-name')
  var $phoneNumber = $('#phone-number')
  var data = {
    'user[first_name]': $firstName.val(),
    'user[last_name]': $lastName.val(),
    'user[phone_number]': $phoneNumber.val()
  }
  $.ajax({
    url: 'http://json-server.devpointlabs.com/api/v1/users',
    type: 'POST',
    dataType: 'JSON',
    data: data
  }).done( function(){
    console.log('User added!')
  }).fail( function(){
    alert('Failed Transmission!')
  })
});
