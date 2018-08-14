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
    const dataID = event.srcElement.getAttribute('data-id');
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
  //Uses the commentEL function from the Comment class
  const commentItem = Comment.prototype.commentEl(commentObject);
  commentList.appendChild(commentItem);
}

//The comment function receives two parameters
//this is the constructor for the comment class
function Comment (id, commentContent) {
  this.id = id;
  this.image = Comment.prototype.findImage(id);
  this.commentContent = commentContent;
  //This line gets the comments static variable and pushes the
  //current instance of the Comment class to that array.
  this.constructor.comments.push(this);
}

//Comment.prototype.add is a function
//Should return all of the comment objects in an array
Comment.prototype.all = () => {
  return Comment.comments;
}

//the Comment.prototype.findImage is a function
//it takes in the parameter from line 5
Comment.prototype.findImage = (dataID) => {
//We get the nth element from the Image.all array of images from the Image class (see other code file).
const imageElement = Image.all[dataID];
//We pushed the current instance of the comment to the comments arary in the Image object
//TODO: Rename imageElement to just image
imageElement.comments.push(this);
//Return the image elelment and it gets set as a propert in teh Constructor on line 6.
return imageElement;
}

//the Comment.prototype.commentEl function creates the li element
Comment.prototype.commentEl = (element) => {
const li = document.createElement('li');
li.setAttribute('id', element.id);
li.appendChild(document.createTextNode(element.commentContent));
return li;
}

//The comment.comments variable is a static variable
//that lives throughout instantiations of the Comment class.
//It gets updated everytime you call the comment class.
Comment.comments = [];