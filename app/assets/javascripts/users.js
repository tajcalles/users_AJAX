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

$('.join-group').click(function() {
  $.ajax({
    url: 'http://json-server.devpointlabs.com/api/v1/users',
    method: 'POST',
    dataType: 'JSON'
  }).done(function(great) {
    console.log(great)
  }).fail(function (bad) {
      console.log(bad)
  });
});
