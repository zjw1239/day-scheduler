// makes sure page loads before code runs
$(document).ready(function () {

  // page header date
  $('#titleDay').text(dayjs().format('dddd, MMMM D'));


  // sets styling for different times
  var currentHour = dayjs().format('H');
  
  $(".time-block").each(function () {
  
      if (parseInt(currentHour) === parseInt((this.id).substring(5))) {
          $(this).addClass("present");
      
      } else if (parseInt(currentHour) > parseInt((this.id).substring(5))) {
          $(this).addClass("past");
                   
      } else {
          $(this).addClass("future");
          
      }
  })


  // save button function

  $(".saveBtn").each(function () {
      if (parseInt(currentHour) === parseInt(this.id.split("-")[1])) {
          $(this).addClass("present");
      } else if (parseInt(currentHour) > parseInt(this.id.split("-")[1])) {
          $(this).addClass("past");
      } else {
          $(this).addClass("future");
      }
  })

  // storage functions
  var storedEvents = [];

  initialise();
  function renderEvents() {
      $("textarea").each(function () {
          this.value = "";
      })

      $.each(storedEvents, function () {
          $("textarea" + this.eventTime)[0].value = this.eventText;
      })
  }
  function initialise() {
      var userEvent = JSON.parse(localStorage.getItem("storedEvents"));
      if (userEvent !== null) {
          storedEvents = userEvent;
      }
      renderEvents();
  }

  // event on click function. help from youtube / tutor
  $(".saveBtn").on("click", function () {
      var eventName = $(this).siblings(".description").val();
      var eventTime = $(this).parent().attr('id');

      console.log(eventName, eventTime);

      localStorage.setItem(eventTime, eventName);
  })

  function renderEvents() {
      $("#hour-9 .description").val(localStorage.getItem("hour-9"));
      $("#hour-10 .description").val(localStorage.getItem("hour-10"));
      $("#hour-11 .description").val(localStorage.getItem("hour-11"));
      $("#hour-12 .description").val(localStorage.getItem("hour-12"));
      $("#hour-13 .description").val(localStorage.getItem("hour-13"));
      $("#hour-14 .description").val(localStorage.getItem("hour-14"));
      $("#hour-15 .description").val(localStorage.getItem("hour-15"));
      $("#hour-16 .description").val(localStorage.getItem("hour-16"));
      $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  }
})
