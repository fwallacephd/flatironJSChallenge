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
  Comment.prototype.all = function () {
    return Comment.comments;
  }

//the Comment.prototype.findImage is a function
//it takes in the parameter from line 5
Comment.prototype.findImage = function(dataID) {
  //We get the nth element from the Image.all array of images from the Image class (see other code file).
  const imageElement = Image.all[dataID];
  //We pushed the current instance of the comment to the comments arary in the Image object
  //TODO: Rename imageElement to just image
  imageElement.comments.push(this);
  //Return the image elelment and it gets set as a propert in teh Constructor on line 6.
  return imageElement;
}

//the Comment.prototype.commentEl function creates the li element
//The parameter 'this' is the comment object
Comment.prototype.commentEl = function(element) {
  //console.log('comment content', this);
  //console.log('comment element', element.commentContent);
  const li = document.createElement('li');
  li.setAttribute('id', element.id);
  li.appendChild(document.createTextNode(element.commentContent));
  return li;
}

//The comment.comments variable is a static variable
//that lives throughout instantiations of the Comment class.
//It gets updated everytime you call the comment class.
Comment.comments = [];