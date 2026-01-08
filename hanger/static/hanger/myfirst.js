function myFunction() {
  window.alert("Hello from a static file!");
}



var myNumber = 0;

function delNum() {
  myNumber--;
  document.getElementById("count").innerText = myNumber;
}

function addNum() {
  myNumber++;
  document.getElementById("count").innerText = myNumber;
  if(myNumber >= 5) {
    window.alert("You've clicked button alot");
  }
}
function hitNumber() {
  if(myNumber >= 50) {
    window.alert("You've clicked button alot");
  }
}

const black_images = [
  "/media/uploads/black_num/number_one.jpg",
  "/media/uploads/black_num/number_two.jpg",
  "/media/uploads/black_num/number_three.jpg",
  "/media/uploads/black_num/number_four.jpg",
  "/media/uploads/black_num/number_five.jpg",
  "/media/uploads/black_num/number_six.jpg",
  "/media/uploads/black_num/number_seven.jpg",
  "/media/uploads/black_num/number_eight.jpg"
];

const green_images = [
  "/media/uploads/green_num/number_one.jpg",
  "/media/uploads/green_num/number_two.jpg",
  "/media/uploads/green_num/number_three.jpg",
  "/media/uploads/green_num/number_four.jpg",
  "/media/uploads/green_num/number_five.jpg",
  "/media/uploads/green_num/number_six.jpg",
  "/media/uploads/green_num/number_seven.jpg",
  "/media/uploads/green_num/number_eight.jpg"
];

const pink_images = [
  "/media/uploads/pink_num/number_one.jpg",
  "/media/uploads/pink_num/number_two.jpg",
  "/media/uploads/pink_num/number_three.jpg",
  "/media/uploads/pink_num/number_four.jpg",
  "/media/uploads/pink_num/number_five.jpg",
  "/media/uploads/pink_num/number_six.jpg",
  "/media/uploads/pink_num/number_seven.jpg",
  "/media/uploads/pink_num/number_eight.jpg"
];

const red_images = [
  "/media/uploads/red_num/number_one.jpg",
  "/media/uploads/red_num/number_two.jpg",
  "/media/uploads/red_num/number_three.jpg",
  "/media/uploads/red_num/number_four.jpg",
  "/media/uploads/red_num/number_five.jpg",
  "/media/uploads/red_num/number_six.jpg",
  "/media/uploads/red_num/number_seven.jpg",
  "/media/uploads/red_num/number_eight.jpg"
];

const blue_images = [
  "/media/uploads/blue_num/number_one.jpg",
  "/media/uploads/blue_num/number_two.jpg",
  "/media/uploads/blue_num/number_three.jpg",
  "/media/uploads/blue_num/number_four.jpg",
  "/media/uploads/blue_num/number_five.jpg",
  "/media/uploads/blue_num/number_six.jpg",
  "/media/uploads/blue_num/number_seven.jpg",
  "/media/uploads/blue_num/number_eight.jpg"
];

const orange_images = [
  "/media/uploads/orange_num/number_one.jpg",
  "/media/uploads/orange_num/number_two.jpg",
  "/media/uploads/orange_num/number_three.jpg",
  "/media/uploads/orange_num/number_four.jpg",
  "/media/uploads/orange_num/number_five.jpg",
  "/media/uploads/orange_num/number_six.jpg",
  "/media/uploads/orange_num/number_seven.jpg",
  "/media/uploads/orange_num/number_eight.jpg"
];

const purple_images = [
  "/media/uploads/purple_num/number_one.jpg",
  "/media/uploads/purple_num/number_two.jpg",
  "/media/uploads/purple_num/number_three.jpg",
  "/media/uploads/purple_num/number_four.jpg",
  "/media/uploads/purple_num/number_five.jpg",
  "/media/uploads/purple_num/number_six.jpg",
  "/media/uploads/purple_num/number_seven.jpg",
  "/media/uploads/purple_num/number_eight.jpg"
];

const yellow_images = [
  "/media/uploads/yellow_num/number_one.jpg",
  "/media/uploads/yellow_num/number_two.jpg",
  "/media/uploads/yellow_num/number_three.jpg",
  "/media/uploads/yellow_num/number_four.jpg",
  "/media/uploads/yellow_num/number_five.jpg",
  "/media/uploads/yellow_num/number_six.jpg",
  "/media/uploads/yellow_num/number_seven.jpg",
  "/media/uploads/yellow_num/number_eight.jpg"
];

const allPhotos = [black_images, green_images, pink_images, red_images, blue_images, orange_images, purple_images, yellow_images]; //all image sets together
let img_set_indexies = [6, 7, 0, 1, 2, 3, 4, 5];   //initial index set, these will change as website is used, needs to be global due to its uses everywhere
console.log(allPhotos);
let group_one_idx = 0; //needs to be global due to its use everywhere

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("firstGroupPicture").src = allPhotos[0][img_set_indexies[0]];
  document.getElementById("secondGroupPicture").src = allPhotos[1][img_set_indexies[1]];
  document.getElementById("thirdGroupPicture").src = allPhotos[2][[img_set_indexies[2]]];
  document.getElementById("fourthGroupPicture").src = allPhotos[3][img_set_indexies[3]];
  document.getElementById("fifthGroupPicture").src = allPhotos[4][img_set_indexies[4]];
  document.getElementById("sixthGroupPicture").src = allPhotos[5][img_set_indexies[5]];
  document.getElementById("seventhGroupPicture").src = allPhotos[6][img_set_indexies[6]];
  document.getElementById("eighthGroupPicture").src = allPhotos[7][img_set_indexies[7]];
});

function scrollThirdGroupLeft() {
  let currentIndex = img_set_indexies[(group_one_idx + 2) % allPhotos.length];
  currentIndex = (currentIndex + 1) % allPhotos[group_one_idx].length;
  img_set_indexies[(group_one_idx + 2) % allPhotos.length] = currentIndex;
  console.log(currentIndex);
  let currentGroup = allPhotos[(group_one_idx + 2) % allPhotos.length];
  document.getElementById("thirdGroupPicture").src = currentGroup[currentIndex];
}

function scrollThirdGroupRight() {
  let currentIndex = img_set_indexies[(group_one_idx + 2) % allPhotos.length];
  currentIndex = ((((currentIndex - 1) % allPhotos.length) + allPhotos.length) % allPhotos.length);
  img_set_indexies[(group_one_idx + 2) % allPhotos.length] = currentIndex;
  document.getElementById("thirdGroupPicture").src = allPhotos[(group_one_idx + 2) % allPhotos.length][currentIndex];
}


//works
function spinGroupRight() {
  //update images, change index

  //update group one location
  group_one_idx = (group_one_idx + 1) % allPhotos.length;

  //update image inside each 'image'
  for(var i = 0; i < img_set_indexies.length; i++)
  {
    img_set_indexies[i] = ((((img_set_indexies[i] - 1 ) % img_set_indexies.length) + img_set_indexies.length) % img_set_indexies.length);
  }

  //update all images
  document.getElementById("firstGroupPicture").src = allPhotos[group_one_idx][img_set_indexies[group_one_idx]];
  document.getElementById("secondGroupPicture").src = allPhotos[(group_one_idx + 1) % allPhotos.length][img_set_indexies[(group_one_idx + 1) % allPhotos.length]];
  document.getElementById("thirdGroupPicture").src = allPhotos[(group_one_idx + 2) % allPhotos.length][img_set_indexies[(group_one_idx + 2) % allPhotos.length]];
  document.getElementById("fourthGroupPicture").src = allPhotos[(group_one_idx + 3) % allPhotos.length][img_set_indexies[(group_one_idx + 3) % allPhotos.length]];
  document.getElementById("fifthGroupPicture").src = allPhotos[(group_one_idx + 4) % allPhotos.length][img_set_indexies[(group_one_idx + 4) % allPhotos.length]];
  document.getElementById("sixthGroupPicture").src = allPhotos[(group_one_idx + 5) % allPhotos.length][img_set_indexies[(group_one_idx + 5) % allPhotos.length]];
  document.getElementById("seventhGroupPicture").src = allPhotos[(group_one_idx + 6) % allPhotos.length][img_set_indexies[(group_one_idx + 6) % allPhotos.length]];
  document.getElementById("eighthGroupPicture").src = allPhotos[(group_one_idx + 7) % allPhotos.length][img_set_indexies[(group_one_idx + 7) % allPhotos.length]];
}


function spinGroupLeft() {
  //update images, change index

  //update group one location
  group_one_idx = ((((group_one_idx - 1) % allPhotos.length) + allPhotos.length) % allPhotos.length);

  //update image inside each 'image'
  for(var i = 0; i < img_set_indexies.length; i++)
  {
    img_set_indexies[i] = (img_set_indexies[i] + 1) % img_set_indexies.length;
  }

  //update all images
  document.getElementById("firstGroupPicture").src = allPhotos[group_one_idx][img_set_indexies[group_one_idx]];
  document.getElementById("secondGroupPicture").src = allPhotos[(group_one_idx + 1) % allPhotos.length][img_set_indexies[(group_one_idx + 1) % allPhotos.length]];
  document.getElementById("thirdGroupPicture").src = allPhotos[(group_one_idx + 2) % allPhotos.length][img_set_indexies[(group_one_idx + 2) % allPhotos.length]];
  document.getElementById("fourthGroupPicture").src = allPhotos[(group_one_idx + 3) % allPhotos.length][img_set_indexies[(group_one_idx + 3) % allPhotos.length]];
  document.getElementById("fifthGroupPicture").src = allPhotos[(group_one_idx + 4) % allPhotos.length][img_set_indexies[(group_one_idx + 4) % allPhotos.length]];
  document.getElementById("sixthGroupPicture").src = allPhotos[(group_one_idx + 5) % allPhotos.length][img_set_indexies[(group_one_idx + 5) % allPhotos.length]];
  document.getElementById("seventhGroupPicture").src = allPhotos[(group_one_idx + 6) % allPhotos.length][img_set_indexies[(group_one_idx + 6) % allPhotos.length]];
  document.getElementById("eighthGroupPicture").src = allPhotos[(group_one_idx + 7) % allPhotos.length][img_set_indexies[(group_one_idx + 7) % allPhotos.length]];
}


/*
let blackIndex = 0;
function scrollBlackImage() {
  blackIndex = (blackIndex + 1) % black_images.length;
  document.getElementById("blkPic").src = black_images[blackIndex];
  document.getElementById("blackImgIdx").innerText = blackIndex + 1;
}
*/
/*
let blueIndex = 0;
function scrollBlueImage() {
  blueIndex = (blueIndex + 1) % blue_images.length;
  document.getElementById("bluPic").src = blue_images[blueIndex];
  document.getElementById("blueImgIdx").innerText = blueIndex + 1;
}
*/

