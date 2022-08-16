// variables

let dateDisplay = moment().format('MMMM Do YYYY');
$("#currentDay").text(dateDisplay);


$(document).ready(function() {

    
    function handleSaveTask() {
      // get the text
      const textValue = $(this).siblings('.task').val();

      // get the time
      const timeValue = $(this).parent().attr('data-time');

      // save textarea text to local storage
      localStorage.setItem(timeValue, textValue);
  
    }
  
    // color the row based on hour 
    function colorRows() {
      // current hour
      const currentHour = moment().hours();
      // loop through rows add color class based on time
      $('.eachRow').each(function() {
        const rowHour = parseInt($(this).attr('data-time'));
        if (rowHour < currentHour) {
          $(this).addClass('past');
        } else if (rowHour === currentHour) {
          $(this).addClass('present');
        } else {
          $(this).addClass('future');
        }
      })
    }
  
    // events
    // save btn event
    $('#nine').on('click', handleSaveTask);
    $('#ten').on('click', handleSaveTask);
    $('#eleven').on('click', handleSaveTask);
    $('#twelve').on('click', handleSaveTask);
    $('#thirteen').on('click', handleSaveTask);
    $('#fourteen').on('click', handleSaveTask);
    $('#fifteen').on('click', handleSaveTask);
    $('#sixteen').on('click', handleSaveTask);
    $('#seventeen').on('click', handleSaveTask);
  
    // runs on page load
    // populate textarea with localstorage
  
    
    // loop through rows and add a class (gray, red, green)
    colorRows();
  
});