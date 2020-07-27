// For disabling form submissions if there are invalid fields

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        $('#space').html('<br>');
        if (form.checkValidity() === false) {
          $('#messages').removeClass().addClass('alert alert-danger alert-dismissible').slideDown().show();
          $('#messages_content').html('<h5>Some fields have not been filled.</h5>');
          event.stopPropagation();
        } else {
          $('#form').html('<div id="space"></div><div id="messages" class="hide" role="alert"><div id="messages_content"></div></div>');
          $('#messages').removeClass().addClass('alert alert-success alert-dismissible').slideDown().show();
          $('#messages_content').html('<h5>Your appointment request has been sent!</h5>');
          AOS.init({
            easing: 'ease-in-quad',
          });
          window.location.hash = "booking";
        }
        event.preventDefault();
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

$(document).ready(function() {
  $('input[name="radioOptions1"]').on('change', function() {
    $('input[name="new"]').prop("checked", true);
  });
  $('input[name="radioOptions2"]').on('change', function() {
    $('input[name="child"]').prop("checked", true);
  });
});

$('#pharmacy').addClass('hide').hide();
$('input[name="radioOptions3"]').on('change', function() {
  if ($("input[name='radioOptions3']:checked").val()=="2") {
    $('#pharmacy').removeClass('hide').slideDown().show();
  } else {
    $('#pharmacy').addClass('hide').slideUp();
  }
});

weekday();
function weekday() {
    var d = new Date();
    if (d.getDay() == 0 || d.getDay() == 6) {
      var st = '10:00:00';
      var et = '18:00:00';
    } else {
      var st = '09:00:00';
      var et = '21:00:00';
    }
    sd = new Date(d.getTime());
    sd.setHours(st.split(":")[0]);
    sd.setMinutes(st.split(":")[1]);
    sd.setSeconds(st.split(":")[2]);
    ed = new Date(d.getTime());
    ed.setHours(et.split(":")[0]);
    ed.setMinutes(et.split(":")[1]);
    ed.setSeconds(et.split(":")[2]);
    if (d.getDay() == 0) {
      if (sd < d && ed > d) {
        document.getElementById("Sunday").classList.add('Open');
      } else {
        document.getElementById("Sunday").classList.add('Closed');
      }
    }
    if (d.getDay() == 1) {
      if (sd < d && ed > d) {
        document.getElementById("Monday").classList.add('Open');
      } else {
        document.getElementById("Monday").classList.add('Closed');
      }
    }
    if (d.getDay() == 2) {
      if (sd < d && ed > d) {
        document.getElementById("Tuesday").classList.add('Open');
      } else {
        document.getElementById("Tuesday").classList.add('Closed');
      }
    }
    if (d.getDay() == 3) {
      if (sd < d && ed > d) {
        document.getElementById("Wednesday").classList.add('Open');
      } else {
        document.getElementById("Wednesday").classList.add('Closed');
      }
    }
    if (d.getDay() == 4) {
      if (sd < d && ed > d) {
        document.getElementById("Thursday").classList.add('Open');
      } else {
        document.getElementById("Thursday").classList.add('Closed');
      }
    }
    if (d.getDay() == 5) {
      if (sd < d && ed > d) {
        document.getElementById("Friday").classList.add('Open');
      } else {
        document.getElementById("Friday").classList.add('Closed');
      }
    }
    if (d.getDay() == 6) {
      if (sd < d && ed > d) {
        document.getElementById("Saturday").classList.add('Open');
      } else {
        document.getElementById("Saturday").classList.add('Closed');
      }
    }
}