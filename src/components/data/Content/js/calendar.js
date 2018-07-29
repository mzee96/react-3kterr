import $ from 'jquery';
import Moment from 'react-moment';


function gd(year, month, day) {
        return new Date(year, month - 1, day).getTime();
    }
      function init_validator () {

      $('form').submit(function(e) {
        e.preventDefault();
        var submit = true;

        // evaluate the form using generic validaing
        /*if (!validator.checkAll($(this))) {
          submit = false;
        }*/

        if (submit)
          this.submit();

        return false;
        });

      };


        /* CALENDAR */

            function  init_calendar() {

                if( typeof ($.fn.fullCalendar) === 'undefined'){ return; }
                console.log('init_calendar');

                var date = new Date(),
                    d = date.getDate(),
                    m = date.getMonth(),
                    y = date.getFullYear(),
                    started,
                    ended,
                    categoryClass;

                var calendar = $('#calendar').fullCalendar({
                  header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay,listMonth'
                  },
                  selectable: true,
                  selectHelper: true,
                  select: function(start, end, allDay) {
                    $('#fc_create').click();

                    started = start;
                    ended = end;

                    $(".antosubmit").on("click", function() {
                      var title = $("#title").val();
                      if (end) {
                        ended = end;
                      }

                      categoryClass = $("#event_type").val();

                      if (title) {
                        calendar.fullCalendar('renderEvent', {
                            title: title,
                            start: started,
                            end: end,
                            allDay: allDay
                          },
                          true // make the event "stick"
                        );
                      }

                      $('#title').val('');

                      calendar.fullCalendar('unselect');

                      $('.antoclose').click();

                      return false;
                    });
                  },
                  eventClick: function(calEvent, jsEvent, view) {
                    $('#fc_edit').click();
                    $('#title2').val(calEvent.title);

                    categoryClass = $("#event_type").val();

                    $(".antosubmit2").on("click", function() {
                      calEvent.title = $("#title2").val();

                      calendar.fullCalendar('updateEvent', calEvent);
                      $('.antoclose2').click();
                    });

                    calendar.fullCalendar('unselect');
                  },
                  editable: true,
                  events: [{
                    title: 'All Day Event',
                    start: new Date(y, m, 1)
                  }, {
                    title: 'Long Event',
                    start: new Date(y, m, d - 5),
                    end: new Date(y, m, d - 2)
                  }, {
                    title: 'Meeting',
                    start: new Date(y, m, d, 10, 30),
                    allDay: false
                  }, {
                    title: 'Lunch',
                    start: new Date(y, m, d + 14, 12, 0),
                    end: new Date(y, m, d, 14, 0),
                    allDay: false
                  }, {
                    title: 'Birthday Party',
                    start: new Date(y, m, d + 1, 19, 0),
                    end: new Date(y, m, d + 1, 22, 30),
                    allDay: false
                  }, {
                    title: 'Click for Google',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    url: 'http://google.com/'
                  }]
                });

            };






           /* DATERANGEPICKER */

        function init_daterangepicker() {

            if( typeof ($.fn.daterangepicker) === 'undefined'){ return; }
            console.log('init_daterangepicker');

            var cb = function(start, end, label) {
              console.log(start.toISOString(), end.toISOString(), label);
              $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
            };

            var optionSet1 = {
              startDate: Moment().subtract(29, 'days'),
              endDate: Moment(),
              minDate: '01/01/2012',
              maxDate: '12/31/2015',
              dateLimit: {
                days: 60
              },
              showDropdowns: true,
              showWeekNumbers: true,
              timePicker: false,
              timePickerIncrement: 1,
              timePicker12Hour: true,
              ranges: {
                'Today': [Moment(), Moment()],
                'Yesterday': [Moment().subtract(1, 'days'), Moment().subtract(1, 'days')],
                'Last 7 Days': [Moment().subtract(6, 'days'), Moment()],
                'Last 30 Days': [Moment().subtract(29, 'days'), Moment()],
                'This Month': [Moment().startOf('month'), Moment().endOf('month')],
                'Last Month': [Moment().subtract(1, 'month').startOf('month'), Moment().subtract(1, 'month').endOf('month')]
              },
              opens: 'left',
              buttonClasses: ['btn btn-default'],
              applyClass: 'btn-small btn-primary',
              cancelClass: 'btn-small',
              format: 'MM/DD/YYYY',
              separator: ' to ',
              locale: {
                applyLabel: 'Submit',
                cancelLabel: 'Clear',
                fromLabel: 'From',
                toLabel: 'To',
                customRangeLabel: 'Custom',
                daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                firstDay: 1
              }
            };

            var optionSet2 = {
              startDate: Moment().subtract(29, 'days'),
              endDate: Moment(),
              minDate: '01/01/2012',
              maxDate: '12/31/2015',
              dateLimit: {
                days: 60
              },
              showDropdowns: true,
              showWeekNumbers: true,
              timePicker: false,
              timePickerIncrement: 1,
              timePicker12Hour: true,
              ranges: {
                'Today': [Moment(), Moment()],
                'Yesterday': [Moment().subtract(1, 'days'), Moment().subtract(1, 'days')],
                'Last 7 Days': [Moment().subtract(6, 'days'), Moment()],
                'Last 30 Days': [Moment().subtract(29, 'days'), Moment()],
                'This Month': [Moment().startOf('month'), Moment().endOf('month')],
                'Last Month': [Moment().subtract(1, 'month').startOf('month'), Moment().subtract(1, 'month').endOf('month')]
              },
              opens: 'left',
              buttonClasses: ['btn btn-default'],
              applyClass: 'btn-small btn-primary',
              cancelClass: 'btn-small',
              format: 'MM/DD/YYYY',
              separator: ' to ',
              locale: {
                applyLabel: 'Submit',
                cancelLabel: 'Clear',
                fromLabel: 'From',
                toLabel: 'To',
                customRangeLabel: 'Custom',
                daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                firstDay: 1
              }
            };

            $('#reportrange span').html(Moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + Moment().format('MMMM D, YYYY'));
            $('#reportrange').daterangepicker(optionSet1, cb);
            $('#reportrange').on('show.daterangepicker', function() {
              console.log("show event fired");
            });
            $('#reportrange').on('hide.daterangepicker', function() {
              console.log("hide event fired");
            });
            $('#reportrange').on('apply.daterangepicker', function(ev, picker) {
              console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
            });
            $('#reportrange').on('cancel.daterangepicker', function(ev, picker) {
              console.log("cancel event fired");
            });
            $('#options1').click(function() {
              $('#reportrange').data('daterangepicker').setOptions(optionSet1, cb);
            });
            $('#options2').click(function() {
              $('#reportrange').data('daterangepicker').setOptions(optionSet2, cb);
            });
            $('#destroy').click(function() {
              $('#reportrange').data('daterangepicker').remove();
            });

        }

       function init_daterangepicker_right() {

                if( typeof ($.fn.daterangepicker) === 'undefined'){ return; }
                console.log('init_daterangepicker_right');

                var cb = function(start, end, label) {
                  console.log(start.toISOString(), end.toISOString(), label);
                  $('#reportrange_right span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                };

                var optionSet1 = {
                  startDate: Moment().subtract(29, 'days'),
                  endDate: Moment(),
                  minDate: '01/01/2012',
                  maxDate: '12/31/2020',
                  dateLimit: {
                    days: 60
                  },
                  showDropdowns: true,
                  showWeekNumbers: true,
                  timePicker: false,
                  timePickerIncrement: 1,
                  timePicker12Hour: true,
                  ranges: {
                    'Today': [Moment(), Moment()],
                    'Yesterday': [Moment().subtract(1, 'days'), Moment().subtract(1, 'days')],
                    'Last 7 Days': [Moment().subtract(6, 'days'), Moment()],
                    'Last 30 Days': [Moment().subtract(29, 'days'), Moment()],
                    'This Month': [Moment().startOf('month'), Moment().endOf('month')],
                    'Last Month': [Moment().subtract(1, 'month').startOf('month'), Moment().subtract(1, 'month').endOf('month')]
                  },
                  opens: 'right',
                  buttonClasses: ['btn btn-default'],
                  applyClass: 'btn-small btn-primary',
                  cancelClass: 'btn-small',
                  format: 'MM/DD/YYYY',
                  separator: ' to ',
                  locale: {
                    applyLabel: 'Submit',
                    cancelLabel: 'Clear',
                    fromLabel: 'From',
                    toLabel: 'To',
                    customRangeLabel: 'Custom',
                    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    firstDay: 1
                  }
                };

                $('#reportrange_right span').html(Moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + Moment().format('MMMM D, YYYY'));

                $('#reportrange_right').daterangepicker(optionSet1, cb);

                $('#reportrange_right').on('show.daterangepicker', function() {
                  console.log("show event fired");
                });
                $('#reportrange_right').on('hide.daterangepicker', function() {
                  console.log("hide event fired");
                });
                $('#reportrange_right').on('apply.daterangepicker', function(ev, picker) {
                  console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
                });
                $('#reportrange_right').on('cancel.daterangepicker', function(ev, picker) {
                  console.log("cancel event fired");
                });

                $('#options1').click(function() {
                  $('#reportrange_right').data('daterangepicker').setOptions(optionSet1, cb);
                });


                var optionSet2 = {
                  startDate: Moment().subtract(29, 'days'),
                  endDate: Moment(),
                  minDate: '01/01/2012',
                  maxDate: '12/31/2015',
                  dateLimit: {
                    days: 60
                  },
                  showDropdowns: true,
                  showWeekNumbers: true,
                  timePicker: false,
                  timePickerIncrement: 1,
                  timePicker12Hour: true,
                  ranges: {
                    'Today': [Moment(), Moment()],
                    'Yesterday': [Moment().subtract(1, 'days'), Moment().subtract(1, 'days')],
                    'Last 7 Days': [Moment().subtract(6, 'days'), Moment()],
                    'Last 30 Days': [Moment().subtract(29, 'days'), Moment()],
                    'This Month': [Moment().startOf('month'), Moment().endOf('month')],
                    'Last Month': [Moment().subtract(1, 'month').startOf('month'), Moment().subtract(1, 'month').endOf('month')]
                  },
                  opens: 'left',
                  buttonClasses: ['btn btn-default'],
                  applyClass: 'btn-small btn-primary',
                  cancelClass: 'btn-small',
                  format: 'MM/DD/YYYY',
                  separator: ' to ',
                  locale: {
                    applyLabel: 'Submit',
                    cancelLabel: 'Clear',
                    fromLabel: 'From',
                    toLabel: 'To',
                    customRangeLabel: 'Custom',
                    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    firstDay: 1
                  }
                };

                $('#options2').click(function() {
                  $('#reportrange_right').data('daterangepicker').setOptions(optionSet2, cb);
                });

                $('#destroy').click(function() {
                  $('#reportrange_right').data('daterangepicker').remove();
                });

       }

        function init_daterangepicker_single_call() {

            if( typeof ($.fn.daterangepicker) === 'undefined'){ return; }
            console.log('init_daterangepicker_single_call');

            $('#single_cal1').daterangepicker({
              singleDatePicker: true,
              singleClasses: "picker_1"
            }, function(start, end, label) {
              console.log(start.toISOString(), end.toISOString(), label);
            });
            $('#single_cal2').daterangepicker({
              singleDatePicker: true,
              singleClasses: "picker_2"
            }, function(start, end, label) {
              console.log(start.toISOString(), end.toISOString(), label);
            });
            $('#single_cal3').daterangepicker({
              singleDatePicker: true,
              singleClasses: "picker_3"
            }, function(start, end, label) {
              console.log(start.toISOString(), end.toISOString(), label);
            });
            $('#single_cal4').daterangepicker({
              singleDatePicker: true,
              singleClasses: "picker_4"
            }, function(start, end, label) {
              console.log(start.toISOString(), end.toISOString(), label);
            });


        }


        function init_daterangepicker_reservation() {

            if( typeof ($.fn.daterangepicker) === 'undefined'){ return; }
            console.log('init_daterangepicker_reservation');

            $('#reservation').daterangepicker(null, function(start, end, label) {
              console.log(start.toISOString(), end.toISOString(), label);
            });

            $('#reservation-time').daterangepicker({
              timePicker: true,
              timePickerIncrement: 30,
              locale: {
                format: 'MM/DD/YYYY h:mm A'
              }
            });

        }



    $(document).ready(function() {


        init_daterangepicker();
        init_daterangepicker_right();
        init_daterangepicker_single_call();
        init_daterangepicker_reservation();
        init_calendar();
        /*init_autosize();*/

    });
