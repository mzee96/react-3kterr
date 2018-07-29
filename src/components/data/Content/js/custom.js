/* INPUTS */
  import $ from 'jquery';
import 'jquery';

            function onAddTag(tag) {
                alert("Added a task: " + tag);
              }

              function onRemoveTag(tag) {
                alert("Removed a task: " + tag);
              }

              function onChangeTag(input, tag) {
                alert("Changed a task: " + tag);
              }

              //tags input
            function init_TagsInput() {

                if(typeof $.fn.tagsInput !== 'undefined'){

                $('#tags_1').tagsInput({
                  width: 'auto'
                });

                }

            };


        /* DATA TABLES */

            function init_DataTables() {

                console.log('run_datatables');

                if( typeof ($.fn.DataTable) === 'undefined'){ return; }
                console.log('init_DataTables');

                var handleDataTableButtons = function() {
                  if ($("#datatable-buttons").length) {
                    $("#datatable-buttons").DataTable({
                      dom: "Bfrtip",
                      buttons: [
                        {
                          extend: "copy",
                          className: "btn-sm"
                        },
                        {
                          extend: "csv",
                          className: "btn-sm"
                        },
                        {
                          extend: "excel",
                          className: "btn-sm"
                        },
                        {
                          extend: "pdfHtml5",
                          className: "btn-sm"
                        },
                        {
                          extend: "print",
                          className: "btn-sm"
                        },
                      ],
                      responsive: true
                    });
                  }
                };

                {/*TableManageButtons = function() {
                  "use strict";
                  return {
                    init: function() {
                      handleDataTableButtons();
                    }
                  };
                }();*/}

                $('#datatable').dataTable();

                $('#datatable-keytable').DataTable({
                  keys: true
                });

                $('#datatable-responsive').DataTable();

                $('#datatable-scroller').DataTable({
                  ajax: "js/datatables/json/scroller-demo.json",
                  deferRender: true,
                  scrollY: 380,
                  scrollCollapse: true,
                  scroller: true
                });

                $('#datatable-fixed-header').DataTable({
                  fixedHeader: true
                });

                var $datatable = $('#datatable-checkbox');

                $datatable.dataTable({
                  'order': [[ 1, 'asc' ]],
                  'columnDefs': [
                    { orderable: false, targets: [0] }
                  ]
                });
                $datatable.on('draw.dt', function() {
                  $('checkbox input').iCheck({
                    checkboxClass: 'icheckbox_flat-green'
                  });
                });

                var $datatableDash = $('#datatable-checkboxDash');

                $datatableDash.dataTable({
                  'order': [[ 1, 'asc' ]],
                  'columnDefs': [
                    { orderable: false, targets: [0] }
                  ]
                });
                $datatableDash.on('draw.dt', function() {
                  $('checkbox input').iCheck({
                    checkboxClass: 'icheckbox_flat-green'
                  });
                });

                {/*TableManageButtons.init();*/}

            };

$(document).ready(function() {

        init_TagsInput();
        init_DataTables();
    });
