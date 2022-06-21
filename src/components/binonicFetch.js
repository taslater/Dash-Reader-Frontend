async function tryingFetch() {
  // Creating a variable that takes in the fetch response from the doFetch function
  const inputChanged = await doFetch();
  // Sets the innerHTML of the displayContainer div in index.html to the bolded text that the fetch response returned
  document.getElementById("this is where binonic display goes").innerHTML = inputChanged;
  // Clears the input text box
  //document.getElementById("entry").value = "";
}

// Async function that performs and takes in the fetch request
async function doFetch() {
  // Variable that assigns the input tag of id entry equal to a variable
  const entryInput = document.getElementById("this is where user input goes to carry from the input option");
  // Sets the user input of the entry id input tag equal to a variable
  const inputValue = entryInput.value;
  // Sets the url equal to a variable that also contains the user input at the end 
  const fetchurl = `https://readgood.azurewebsites.net/hello?message=${inputValue}`
  // Fetch request that takes in the variable fetchurl and reaches out to the api
  return fetch(fetchurl)
      // Sets reponse to take in the api as a json
      .then(response => response.json())
      // .textBlock refers to the json variable that was made in the Spring Boot API that takes in user input and alters it
      .then((response) => response.textBlock)
      //.then(json => { document.getElementById("displayContainer").innerHTML = json })
      .catch(err => console.log(err))
}