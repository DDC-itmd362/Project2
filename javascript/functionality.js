  //variable that will increment through the images
  var step = 0;
  var whichimage = 0;

  //variable that will replace the <p> content each time
  var paragraph = document.getElementById("picDetail");

  var slideimages = new Array() // create new array to preload images
  slideimages[0] = new Image() // create new instance of image object
  slideimages[0].src = "../img/basketball.jpg" // set image object src property to an image's src, preloading that image in the process
  slideimages[1] = new Image()
  slideimages[1].src = "../img/programming.jpg"
  slideimages[2] = new Image()
  slideimages[2].src = "../img/scholarship.jpg"
  slideimages[3] = new Image()
  slideimages[3].src = "../img/research.jpg"
  slideimages[4] = new Image()
  slideimages[4].src = "../img/gym.jpg"



  function slideit(){
    //if browser does not support the image object, exit.
    if (!document.images)
    return
    document.getElementById('slide').src = slideimages[step].src
    whichimage = step
    if (step<4)
      step++
    else
      step=0
    //call function "slideit()" every 8 seconds
    setTimeout("slideit()",8000)
    myFunction();

  }

  function myFunction(){
    if(document.getElementById('slide').src === slideimages[0].src)
      paragraph.innerHTML = "IIT's basketball team beats UIC by 30 points! Go hawks.";
    if(document.getElementById('slide').src === slideimages[1].src)
      paragraph.innerHTML = "IIT presenting a new course to the ITM program. A course about SaaS";
    if(document.getElementById('slide').src === slideimages[2].src)
      paragraph.innerHTML = "Scholarship opportunity for students looking for some extra help paying for Tuition.";
    if(document.getElementById('slide').src === slideimages[3].src)
      paragraph.innerHTML = "IIT's engineering department is working on drones that will follow lasers for direction.";
    if(document.getElementById('slide').src === slideimages[4].src)
      paragraph.innerHTML = "IIT expanding the workout fitness center! A plan that was must needed!";
  }


  slideit()