$(document).ready(function() {
    // Attach a click event listener to all checkboxes
    $('input[type="checkbox"]').click(function() {
      // Get the label text
      var labelText = $('label[for="' + $(this).attr('id') + '"]').text();
      if ($(this).is(':checked')) {
        console.log(labelText);
        // Create a new element to append to the invoice container
        if(labelText === "Sku"){
            var newElement = `
            <table data-label="${labelText}" class="table table-dark draggableElement">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
            `
        }else{
            var newElement = `<p class="draggableElement" data-label="${labelText}">${labelText}</p>`
        }
        
        // // Add a custom data attribute to store the label text
        // newElement.attr('data-label', labelText);
        
        // Append the new element to the invoice container
        $('#invoice_container').append(newElement);

          // Enable drag and drop functionality
          $('.draggableElement').draggable({
            containment: '#invoice_container',
            revert: false,
            stop: function(event, ui) {
              // Update the position of the dropped element
              // ui.helper.css('top', 0);
              // ui.helper.css('left', 0);
            }
          }).droppable({
            accept: "*:not(h1, h2, h3, h4, h5, h6, p)",
            drop: function(event, ui) {
              // Update the position of the dropped element
              // ui.helper.css('top', 0);
              // ui.helper.css('left', 0);
              $(this).removeClass('highlight');
            },
            over: function(event, ui) {
              $(this).addClass('highlight'); // Add a class to highlight the potential drop target
            },
            out: function(event, ui) {
              $(this).removeClass('highlight'); // Remove the highlight class when the draggable element is moved away
            },
          });
      } else {
        // Remove the elements with the corresponding label text
        $('#invoice_container').find('p, table').filter(function() {
            console.log($(this).attr('data-label'));
            return $(this).attr('data-label') === labelText;
        }).remove();
      }
    });
  });


