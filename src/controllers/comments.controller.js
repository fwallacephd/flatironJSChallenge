//Class name is CommentsController
class CommentsController {
  //Class is comments controller and the constructor defines the object members.
  //jQuery loads all the add-comment form elements into the $addCommentForm variable.
  //$addCommentForm containers an array of form elements (liek the document.querySelectorAll("form") gets)
  //Technically, I could have built everything off of this (the for loop), but didn't realize it until must later in the build.
  constructor() {
    this.$addCommentForm = $('.add-comment')      
  }

  //init is a function that grabs all the form elements 
  //and loops over each one to add an event listener on the submit
  init() {
    document.querySelectorAll("form").forEach(
      formItem => {
        formItem.addEventListener('submit', this.addCommentFormListener);
      }
    );
  }

  //addCommentFormListener is a function that recieve a parameter of an event
  //the event object is the submit click
  addCommentFormListener(event) {
    //Prevent the from from submitting before we click
    event.preventDefault()
    //Next we grab the data-id from the event object, which contains the srcElement
    //We grab the coment value from the event object using the class selector and store the value
    //We instantiate the Comment class using the dataID and commentValue.
    //We call the render function passing the comment as a parameter
    console.log(event);
    const dataID = event.srcElement.getAttribute('data-id');
    console.log (dataID);
    const commentValue = event.srcElement.querySelector('.user-text').value;
    const comment = new Comment (dataID, commentValue);
    event.srcElement.querySelector('.user-text').value = '';
    CommentsController.prototype.render(comment);
  }
}

//Render is a function that gets the UL from the DOM and appends the LI elements to it. 
//commentObject is the comment variable from line 32
CommentsController.prototype.render = (commentObject) => {
  //gets the element by building an ID using the commentObject.id
  const commentList = document.querySelector('#comments-' + commentObject.id);
  //appends the LI to the UL element -- Not quite working yet.
  //Uses the commentEL function from the Comment class
  const commentItem = Comment.prototype.commentEl(commentObject);
  commentList.appendChild(commentItem);
  console.log(commentList);
}