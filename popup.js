var img1 = document.createElement('img');
img1.className = "image obj-image-1";
img1.alt = "project example"
var img2 = document.createElement('img');
img2.className = "image obj-image-2";
img2.alt = "project example"
var img3 = document.createElement('img');
img3.className = "image obj-image-3";
img3.alt = "project example"
var img4 = document.createElement('img');
img4.className = "image obj-image-4";
img4.alt = "project example"
var imgCounter1 = document.createElement('img');
var imgCounter2 = document.createElement('img');
const SourceLink = "https://github.com/Lordkaito/Personal-portfolio";
const LiveLink = "https://lordkaito.github.io/Personal-portfolio/";

var firstProject = {
  "name": "Tonic",
  "frame": ["CANOPY", "Back end Dev", 2015],
  "description": "A daily selection of privately personalized reads; no accounts or sign-ups required.",
  "featuredImage": img1.src = "./images/work-4.png",
  "technologies": ["Html", "Css", "JavaScript"],
  "liveLink": LiveLink,
  "sourceLink": SourceLink,
  "frameImg": [imgCounter1.src = "./images/Counter.png", imgCounter2.src = "./images/Counter.png"]
}

const btn1 = document.querySelector('.obj-btn-1');
const btn2 = document.querySelector('.obj-btn-2');
const btn3 = document.querySelector('.obj-btn-3');
const btn4 = document.querySelector('.obj-btn-4');

window.onload = function() {
  document.querySelector('.obj-name').innerHTML = firstProject.name;
  document.querySelector('.obj-frame-1').innerHTML = firstProject.frame[0];
  document.querySelector('.frame-img-1').appendChild(imgCounter1);
  document.querySelector('.obj-frame-2').innerHTML = firstProject.frame[1];
  document.querySelector('.frame-img-2').appendChild(imgCounter2);
  document.querySelector('.obj-frame-3').innerHTML = firstProject.frame[2];
  document.querySelector('.obj-description').innerHTML = firstProject.description;
  document.querySelector('.obj-tech-1').innerText = firstProject.technologies[0];
  document.querySelector('.obj-tech-2').innerHTML = firstProject.technologies[1];
  document.querySelector('.obj-tech-3').innerHTML = firstProject.technologies[2];
  document.querySelector('.image-card').appendChild(img1);
}
















// var modarlArray = [firstProject, secondProject, thirdProject, fourthProject];
// var secondProject = {
//   "name": "Multi-Post Stories",
//   "frame": ["CANOPY", "Back end Dev", 2015],
//   "description": "A daily selection of privately personalized reads; no accounts or sign-ups required.",
//   "featuredImage": img2.src = "./images/work-3.png",
//   "technologies": ["Html", "Css", "JavaScript"],
//   "liveLink": LiveLink,
//   "sourceLink": SourceLink,
// }

// var thirdProject = {
//   "name": "Toni",
//   "frame": ["CANOPY", "Back end Dev", 2015],
//   "description": "A daily selection of privately personalized reads; no accounts or sign-ups required.",
//   "featuredImage": img3.src = "./images/work-2.png",
//   "technologies": ["Html", "Css", "JavaScript"],
//   "liveLink": LiveLink,
//   "sourceLink": SourceLink,
// }

// var fourthProject = {
//   "name": "Multi-Post Stories",
//   "frame": ["CANOPY", "Back end Dev", 2015],
//   "description": "A daily selection of privately personalized reads; no accounts or sign-ups required.",
//   "featuredImage": img4.src = "./images/work-1.png",
//   "technologies": ["Html", "Css", "JavaScript"],
//   "liveLink": LiveLink,
//   "sourceLink": SourceLink,
// }

