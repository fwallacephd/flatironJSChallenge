The purpose of this assignment was take an Instagram-style page and 1) make the comment submit buttons functional, 2) capture the comments made on each image, and 3) display the comments for each image.  

The first thing that I did was to add a few functions to the CommentsController Class. 

My init function is searching the DOM or the HTML document model to grab all of the form elements and loop over each one and add an event listener on the submit click. I used a forEach method to loop over the forms instead of a map method since I am not returning anything. I'm simply telling the computer to listen when someone clicks the submit button. 

Now I am going to need all of the data in the form elements. This holds all of the classes and ids (and more information) on the inputs. I'll need that to update the DOM later. 

So I created an addCommentFormListener function that recieves the event object (the data is unique to the click or what triggered the event) as its parameter on the click. 

Before we can do anything, we must add a preventDefault
method on that function to stop the browser from refreshing. We are saying give us control over the form submission.

Now that preventDefault is set, this function needs to grab some data from the event so that we can use this in later parts of the code. I created variables to house this data to make it more readable and easy to use. 

First, we grab the data-id from the event object. It is an attribute off of the event.srcElement. This is actually a number that we can use to select the correct comment.

Second, we need to grab the value of the comment - meaning what was actually typed into the comment box. We access this in the event object, and I'm using a querySelector with the class '.user-text' on the comment.

Next, we are going to instantiate the Comment class (that code is in another file) using the dataID and the commentValue we just grabbed. We instantiated a comment which is a constructor function in another file. Using a constructor makes sure that all of the data is consistent and provides order for the code. 

You'll notice here I did one more thing before I go to the render - I cleared the value in the comment box. This way, when the next person makes a comment, the box is clear. 

Finally, in this function we are going to call another function - the render function and pass in the comment as a parameter. 

The render function is going to help us manipulate the DOM. We started by getting a UL element that has that particular specified ID in the comment object. Using the commentEL function (I'll explain that shortly), we create the appropriate LI element for the comment and append that to the correct UL This will in essence let us see all of the comments in the DOM. 

Just a note: 

Having multiple (short) functions that focus on just one piece of the code makes your code more readable and much easier to test.
  
Now, none of this could have worked without our Comment function - this is a Constructor Function. The comment function defines the objects and their features and will apply this to all comments. A constructor is important when you don't know how many new objets - in this case - new comments you will have. I also created an empty array (outside the constructor) to push each new instance of a comment. That way all of the comment objects are in that array. (The all function I created will return all of the comment objects.)

We have one more function to create for this to work. A findImage function. In this function we get the next (or nth) image element from the Image.all array of images which was already created for us. We push the current instance of the comment to the comments array in that image object. And return the image element so it will be set as a property in the Constructor. 

The commentEl function as stated before creates the LI and returns to be used in the render function.

*Note:
There was already a constructor function built in the code - technically I could have built my code off of that, but actually didn't realize that until after.
