/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
async function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

// Select Elements 
let feedbackP = document.querySelector("#error");
let ul = document.querySelector("#list");

// TODO: Handle the resolved or rejected states of the promise
// let promise = getList(); 

function handleList(List) {
    List.forEach ((hobbit) => {
      let li = document.createElement("li");
      li.textContent = hobbit;
      ul.appendChild(li);
    });
}





function handleError(err) {
  console.error(err);
  feedbackP.textContent = err.message;
}


// promise.then(handleList).catch(handleError);

async function updateDOMList(){
  try {
    let list = await getList();
    list.forEach((hobbit) => {
      let li = document.createElement("li")
      li.textContent = hobbit;
      ul.appendChild(li);
    });
  } catch (err){
    console.error(err);
    feedbackP.textContent = err.message;
  }
}
  


updateDOMList();







