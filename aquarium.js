
<!DOCTYPE html>
<html>
<body>
  
< p id= "p1"> Hello wonderful customer!</p> 

        <table>
             <tr>
                  <td> <label> for="txtLength">Length (centimeters)</label></td>
                  <td> <label> type "text" id= "txtLength" /></td>
            </tr>
            <tr>
                  <td><label for= 'txtWidth">Width (centimeters)</label></td
                  <td><input type="text" id= "txtWisth" /></td
        
            </tr>
            <tr>
                  <td>Weight</td>
                  <td id="tdWeight"></td>
            
            </tr>
            <tr>
                  <td></td>
                  <td><button id="btnReset">Reset</button><button id="btnCalc"> Calculate</button></td
            </tr>
       </table>
    </body>
  </html>
        
        
   
<script>
                    
                    /*
Access the form element using the method getElementById()
The following URL will help you to do this:
https://www.javascript-coder.com/javascript-form/getelementbyid-form/
*/
                    


    window.onload=function() {
        lengthObj = document.getElementById ('txtLength') ;
        widthObj = document.getElementById ('txtWidth') ;
        heightObj = document.getElementById ('txtHeight') ;
        costObj = document.getElementById ('tdCost') ;
                    
        document.getElementById ('btnReset').onclick = resetInputs;
        document.getElementById ('btnCalc').onclick =  calcWeight; 
    
  }

  function resetInputs () {
    lengthObj.value = '';
    widthObj.value = '';
    weightObj.innerHTML = '';
    
  }

  function calcWeight () {
    var length = new Number (lengthObj.value);
    var width = new Number (widthObj.value);
    weightObj.innerHTML = '';
    if (isNaN (length (isNaN) // isNaN (width)) {
               }
               
    
    </script>



/*
Also store the tdCost id element as a variable.
The following link will help you to do this:
https://www.w3schools.com/jsref/met_document_getelementbyid.asp
*/




/*
select the "Calculate Cost" and "Reset" buttons by
getting their elements by ID. Add an event handler code to an
onclick event. The Calculate Cost button should run the function
that calculates the costs and the Reset button should run the
function that resets the text boxes and output.
The links below will help you to do this:
https://www.w3schools.com/js/js_htmldom_document.asp
https://www.w3schools.com/jsref/event_onclick.asp
*/



/*
Create a function that calculates the surface area.

Get the value of each variable you created at the beginning
and store each value as a new variable.
https://www.javascript-coder.com/javascript-form/getelementbyid-form/

Test whether the user has entered a number in
the text boxes and return an alert if non-numbers are entered. If
numbers have been entered into the text boxes, calculate the surface area
and return the result. You can use the following links to help you with this.
https://www.w3schools.com/js/js_functions.asp
https://www.w3schools.com/jsref/jsref_isNaN.asp
*/



/*
Create a function that calculates the length of the edges
and returns the result.
You can use the following link to help you with this.
https://www.w3schools.com/js/js_functions.asp

At the beginning of your function get the value of each variable you
created at the beginning of your program and store each value as a new variable.
https://www.javascript-coder.com/javascript-form/getelementbyid-form/
*/



/*
create a function that stores the results of the previous functions
as variables. Use a conditional statement to determine the thickness
of the glass and calculate the cost of the glass. You can use the URL
below to help you do this:
https://www.w3schools.com/js/js_if_else.asp

Calculate the cost of the glue, labour, sub-total, tax and total cost.

Use the .toFixed() method to round the result to two decimal places.
You can use the URL below to help you do this:
https://www.w3schools.com/jsref/jsref_tofixed.asp
*/



/*
Create a function named resetInputs to reset the inputs (Length, Width, Height).
Use this link to help https://www.w3schools.com/js/tryit.asp?filename=tryjs_form_reset





Also reset the output (tdCost). Use this link to help you do this
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_innerhtml_delete
*/

