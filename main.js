window.addEventListener('DOMContentLoaded', (event) => {

  /*=============
  forward slashes
  ===============*/

  /* Regular expressions begin and end with forward slashes
  defining the RegEx block of code much like how a string
  is defined as the text between to single or double quote marks essentially */

  /*=========================
  global and insensitive flag
  ===========================*/

  /* The 'g' and 'i' trailing the closing forward slash
  represents the global flag and insenstive flag allowing
  for RegEx to be simplified without concern for whether
  the first matching criteria is the only match recognized
  and that the case sensitivity does not play a factor in
  determining which characters/text are are exact matches*/

  // the following is the short hand method for crafting regular expressions
  const reg = /[a-z]/gi;

  //the following is the longer method for crafting a regular expression vs the reg variable above
  // const reg2 = new NewReg(/[a-z]/, 'g', 'i');

  /* Grab ahold of ALL the different inputs and attach an event
  listener to each one of these different things and find
  out which regular expression is associated with each field
  the user types in and we test that field's input against
  the appropriate regular expression*/

  // this is known as an html collection
  const inputs = document.querySelectorAll("input");

  /* The following stores all of the different regex patterns
  for the form's different fields in one single object. Each
  property inside the object can be a different regular
  expression which refers to a different form field */

  const patterns = {
    //validating phone number (expression calls on input to begin & end with 10 digits)
    username: /^[a-z\d ]{5,12}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]{2,10})\.([a-z]{2,10})(\.[a-z]{2,10})?$/,
    password: /^[\w_@-]{8,20}$/i,
    telephone: /^((?!(0))[0-9]{3}-\d{3}-\d{4})$/i
  };

  // validation function
  //see if something is valid by testing it again regex pattern
  function validate(inputField, regex) {
    if (regex.test(inputField.value)) {
      inputField.className = "valid";
    } else {
      inputField.className = "invalid";
    }
    console.log(regex.test(inputField.value));
  }

  inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
      // e.preventDefault();
      // if (patterns.telephone == )
      validate(e.target, patterns[e.target.attributes.name.value]);
    })
  });

}); //closure for window.addEventListener function
