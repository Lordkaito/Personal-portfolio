// create the variables we are going to use
const mainModalContainer = document.createElement('div');
const firstCardBtn = document.querySelector('.obj-btn-1');
const secondCardBtn = document.querySelector('.obj-btn-2');
const thirdCardBtn = document.querySelector('.obj-btn-3');
const fourthCardBtn = document.querySelector('.obj-btn-4');

// create variables for images
const firstCardImage = document.createElement('img');
firstCardImage.className = 'image obj-image-1';
firstCardImage.alt = 'project example';
const secondCardImage = document.createElement('img');
secondCardImage.className = 'image obj-image-2';
secondCardImage.alt = 'project example';
const thirdCardImage = document.createElement('img');
thirdCardImage.className = 'image obj-image-3';
thirdCardImage.alt = 'project example';
const fourthCardImage = document.createElement('img');
fourthCardImage.className = 'image obj-image-4';
fourthCardImage.alt = 'project example';
const imgCounter1 = document.createElement('img');
const imgCounter2 = document.createElement('img');

// create variables for the links we are going to use
const SourceLink = 'https://github.com/Lordkaito/Personal-portfolio';
const LiveLink = 'https://lordkaito.github.io/Personal-portfolio/';

// create the objects we are going to use
const firstProject = {
  name: 'Tonic',
  frame: ['CANOPY', 'Back end Dev', 2015],
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  featuredImage: firstCardImage.src = './images/work-4.png',
  technologies: ['Html', 'Css', 'JavaScript'],
  liveLink: LiveLink,
  sourceLink: SourceLink,
  frameImg: [imgCounter1.src = './images/Counter.png', imgCounter2.src = './images/Counter.png'],
  scrContainer: 'scr-container1',
};

const secondProject = {
  name: 'Multi-Post Stories',
  frame: ['CANOPY', 'Back end Dev', 2015],
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  featuredImage: secondCardImage.src = './images/work-3.png',
  technologies: ['Html', 'Css', 'JavaScript'],
  liveLink: LiveLink,
  sourceLink: SourceLink,
  frameImg: [imgCounter1.src = './images/Counter.png', imgCounter2.src = './images/Counter.png'],
};

const thirdProject = {
  name: 'Toni',
  frame: ['CANOPY', 'Back end Dev', 2015],
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  featuredImage: thirdCardImage.src = './images/work-2.png',
  technologies: ['Html', 'Css', 'JavaScript'],
  liveLink: LiveLink,
  sourceLink: SourceLink,
  frameImg: [imgCounter1.src = './images/Counter.png', imgCounter2.src = './images/Counter.png'],
};

const fourthProject = {
  name: 'Multi-Post Stories',
  frame: ['CANOPY', 'Back end Dev', 2015],
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  featuredImage: fourthCardImage.src = './images/work-1.png',
  technologies: ['Html', 'Css', 'JavaScript'],
  liveLink: LiveLink,
  sourceLink: SourceLink,
  frameImg: [imgCounter1.src = './images/Counter.png', imgCounter2.src = './images/Counter.png'],
};

const arr = [firstProject, secondProject, thirdProject, fourthProject];

// fucntion that loads once the page is loaded
window.onload = () => {
  document.querySelector('.obj-name-first').innerHTML = firstProject.name;
  document.querySelector('.obj-frame-1-first').innerHTML = firstProject.frame[0];
  // document.querySelector('.frame-img-1-first').appendChild(imgCounter1);
  document.querySelector('.obj-frame-2-first').innerHTML = firstProject.frame[1];
  // document.querySelector('.frame-img-2-first').appendChild(imgCounter2);
  document.querySelector('.obj-frame-3-first').innerHTML = firstProject.frame[2];
  document.querySelector('.obj-description-first').innerHTML = firstProject.description;
  document.querySelector('.obj-tech-1-first').innerText = firstProject.technologies[0];
  document.querySelector('.obj-tech-2-first').innerHTML = firstProject.technologies[1];
  document.querySelector('.obj-tech-3-first').innerHTML = firstProject.technologies[2];
  document.querySelector('.image-card-first').appendChild(firstCardImage);

  // second project
  document.querySelector('.image-card-second').appendChild(secondCardImage);
  document.querySelector('.obj-name-second').innerHTML = secondProject.name;
  document.querySelector('.obj-frame-1-second').innerHTML = secondProject.frame[0];
  // document.querySelector('.frame-img-1-second').appendChild(imgCounter1);
  document.querySelector('.obj-frame-2-second').innerHTML = secondProject.frame[1];
  // document.querySelector('.frame-img-2-second').appendChild(imgCounter2);
  document.querySelector('.obj-frame-3-second').innerHTML = secondProject.frame[2];
  document.querySelector('.obj-description-second').innerHTML = secondProject.description;
  document.querySelector('.obj-tech-1-second').innerText = secondProject.technologies[0];
  document.querySelector('.obj-tech-2-second').innerHTML = secondProject.technologies[1];
  document.querySelector('.obj-tech-3-second').innerHTML = secondProject.technologies[2];

  // third project
  document.querySelector('.obj-name-third').innerHTML = thirdProject.name;
  document.querySelector('.obj-frame-1-third').innerHTML = thirdProject.frame[0];
  // document.querySelector('.frame-img-1-third').appendChild(imgCounter1);
  document.querySelector('.obj-frame-2-third').innerHTML = thirdProject.frame[1];
  // document.querySelector('.frame-img-2-third').appendChild(imgCounter2);
  document.querySelector('.obj-frame-3-third').innerHTML = thirdProject.frame[2];
  document.querySelector('.obj-description-third').innerHTML = thirdProject.description;
  document.querySelector('.obj-tech-1-third').innerText = thirdProject.technologies[0];
  document.querySelector('.obj-tech-2-third').innerHTML = thirdProject.technologies[1];
  document.querySelector('.obj-tech-3-third').innerHTML = thirdProject.technologies[2];
  document.querySelector('.image-card-third').appendChild(thirdCardImage);

  // fourth project
  document.querySelector('.obj-name-fourth').innerHTML = fourthProject.name;
  document.querySelector('.obj-frame-1-fourth').innerHTML = fourthProject.frame[0];
  // document.querySelector('.frame-img-1-fourth').appendChild(imgCounter1);
  document.querySelector('.obj-frame-2-fourth').innerHTML = fourthProject.frame[1];
  // document.querySelector('.frame-img-2-fourth').appendChild(imgCounter2);
  document.querySelector('.obj-frame-3-fourth').innerHTML = fourthProject.frame[2];
  document.querySelector('.obj-description-fourth').innerHTML = fourthProject.description;
  document.querySelector('.obj-tech-1-fourth').innerText = fourthProject.technologies[0];
  document.querySelector('.obj-tech-2-fourth').innerHTML = fourthProject.technologies[1];
  document.querySelector('.obj-tech-3-fourth').innerHTML = fourthProject.technologies[2];
  document.querySelector('.image-card-fourth').appendChild(fourthCardImage);
};

// for the onload function

// let workSection = document.querySelector('#work-section');
// mainModalContainer.innerHTML = ``;

// basic style for the modal
mainModalContainer.style = 'transform: scale(0); background-color: white; max-width: 100%; width: 100%; position: absolute; top: -20%; left: 0; right: 0; bottom: 0; transition: all 0.5s ease-in-out; border-radius: 20px; box-shadow: #7a869a 0 0 10px;';
mainModalContainer.className = 'modal-container';

const workCard = document.querySelectorAll('.scr-container');
workCard.forEach((card) => {
  card.classList.add('relative');
  card.style = 'position: relative;';
});

function modalObj(value) {
  mainModalContainer.style.transform = 'scale(1)';
  mainModalContainer.innerHTML = `
  <div class='modal-header'>
    <div class='modal-title'>
      <h1>${value.name}</h1>
      <div class='modal-frame'>
        <h3>${value.frame[0]}</h3>
        <img src='${value.frameImg[0]}' alt='frame'>
        <h3>${value.frame[1]}</h3>
        <img src='${value.frameImg[1]}' alt='frame'>
        <h3>${value.frame[2]}</h3>
      </div>
    </div>
    <a class='close-modal'> &times; </a>
  </div>
  <div class='modal-image'>
    <img src='${value.featuredImage}' alt='${value.name}'>
  </div>
  <div class='modal-description'>
    <p>${value.description}</p>
    <div class='modal-tech-link-container'>
      <div class='modal-tech'>
        <ul>
          <li class='tag'>${value.technologies[0]}</li>
          <li class='tag'>${value.technologies[1]}</li>
          <li class='tag'>${value.technologies[2]}</li>
        </ul>
      </div>
      <div class='modal-links'>
        <a href='${value.githubLink}' target='_blank' class='action-btn'>Github</a>
        <a href='${value.liveLink}' target='_blank' class='action-btn'>Live</a>
      </div>
    </div>
  </div>`;

  if (value === arr[0]) {
    workCard[0].appendChild(mainModalContainer);
  } else if (value === arr[1]) {
    workCard[1].appendChild(mainModalContainer);
  } else if (value === arr[2]) {
    workCard[2].appendChild(mainModalContainer);
  } else if (value === arr[3]) {
    workCard[3].appendChild(mainModalContainer);
  }
  const close = document.querySelector('.close-modal');
  close.addEventListener('click', () => {
    mainModalContainer.style.transform = 'scale(0)';
  });
}

firstCardBtn.addEventListener('click', modalObj.bind(null, arr[0]));
secondCardBtn.addEventListener('click', modalObj.bind(null, arr[1]));
thirdCardBtn.addEventListener('click', modalObj.bind(null, arr[2]));
fourthCardBtn.addEventListener('click', modalObj.bind(null, arr[3]));
