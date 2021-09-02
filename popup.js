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

// create variables for the links we are going to use
const SourceLink = 'https://github.com/Lordkaito/Personal-portfolio';
const LiveLink = 'https://lordkaito.github.io/Personal-portfolio/';

// create the objects we are going to use
const firstProject = {
  name: 'Tonic',
  frame1: 'CANOPY',
  frame2: 'Back end Dev',
  frame3: 2015,
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  featuredImage: firstCardImage.src = './images/work-4.png',
  technologies1: 'Html',
  technologies2: 'Css',
  technologies3: 'JavaScript',
  liveLink: LiveLink,
  sourceLink: SourceLink,
  frameImg: imgCounter1.src = './images/Counter.png',
  scrContainer: 'scr-container1',
};

const secondProject = {
  name: 'Multi-Post Stories',
  frame1: 'CANOPY',
  frame2: 'Back end Dev',
  frame3: 2015,
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  featuredImage: secondCardImage.src = './images/work-3.png',
  technologies1: 'Html',
  technologies2: 'Css',
  technologies3: 'JavaScript',
  liveLink: LiveLink,
  sourceLink: SourceLink,
  frameImg: imgCounter1.src = './images/Counter.png',
};

const thirdProject = {
  name: 'Toni',
  frame1: 'CANOPY',
  frame2: 'Back end Dev',
  frame3: 2015,
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  featuredImage: thirdCardImage.src = './images/work-2.png',
  technologies1: 'Html',
  technologies2: 'Css',
  technologies3: 'JavaScript',
  liveLink: LiveLink,
  sourceLink: SourceLink,
  frameImg: imgCounter1.src = './images/Counter.png',
};

const fourthProject = {
  name: 'Multi-Post Stories',
  frame1: 'CANOPY',
  frame2: 'Back end Dev',
  frame3: 2015,
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  featuredImage: fourthCardImage.src = './images/work-1.png',
  technologies1: 'Html',
  technologies2: 'Css',
  technologies3: 'JavaScript',
  liveLink: LiveLink,
  sourceLink: SourceLink,
  frameImg: imgCounter1.src = './images/Counter.png',
};

const objArray = [firstProject, secondProject, thirdProject, fourthProject];

// fucntion that loads once the page is loaded
window.onload = () => {
  const {
    name,
    frame1,
    frame2,
    frame3,
    description,
    featuredImage,
    technologies1,
    technologies2,
    technologies3,
  } = firstProject;

  const {
    name: name2,
    frame1: frame4,
    frame2: frame5,
    frame3: frame6,
    description: description2,
    featuredImage: featuredImage2,
    technologies1: technologies4,
    technologies2: technologies5,
    technologies3: technologies6,
  } = secondProject;

  const {
    name: name3,
    frame1: frame7,
    frame2: frame8,
    frame3: frame9,
    description: description3,
    featuredImage: featuredImage3,
    technologies1: technologies7,
    technologies2: technologies8,
    technologies3: technologies9,
  } = thirdProject;

  const {
    name: name4,
    frame1: frame10,
    frame2: frame11,
    frame3: frame12,
    description: description4,
    featuredImage: featuredImage4,
    technologies1: technologies10,
    technologies2: technologies11,
    technologies3: technologies12,
  } = fourthProject;

  // variables for first card and its content
  const objNameFirst = document.querySelector('.obj-name-first');
  const objFrame1First = document.querySelector('.obj-frame-1-first');
  const objFrame2First = document.querySelector('.obj-frame-2-first');
  const objFrame3First = document.querySelector('.obj-frame-3-first');
  const objDescriptionFirst = document.querySelector('.obj-description-first');
  const objTech1First = document.querySelector('.obj-tech-1-first');
  const objTech2First = document.querySelector('.obj-tech-2-first');
  const objTech3First = document.querySelector('.obj-tech-3-first');
  const imageCardFirst = document.querySelector('.image-card-first');

  // variables for second card and its content
  const imageCardSecond = document.querySelector('.image-card-second');
  const objNameSecond = document.querySelector('.obj-name-second');
  const objFrame1Second = document.querySelector('.obj-frame-1-second');
  const objFrame2Second = document.querySelector('.obj-frame-2-second');
  const objFrame3Second = document.querySelector('.obj-frame-3-second');
  const objDescriptionSecond = document.querySelector('.obj-description-second');
  const objTech1Second = document.querySelector('.obj-tech-1-second');
  const objTech2Second = document.querySelector('.obj-tech-2-second');
  const objTech3Second = document.querySelector('.obj-tech-3-second');

  // variables for third card and its content
  const objNameThird = document.querySelector('.obj-name-third');
  const objFrame1Third = document.querySelector('.obj-frame-1-third');
  const objFrame2Third = document.querySelector('.obj-frame-2-third');
  const objFrame3Third = document.querySelector('.obj-frame-3-third');
  const objDescriptionThird = document.querySelector('.obj-description-third');
  const objTech1Third = document.querySelector('.obj-tech-1-third');
  const objTech2Third = document.querySelector('.obj-tech-2-third');
  const objTech3Third = document.querySelector('.obj-tech-3-third');
  const imageCardThird = document.querySelector('.image-card-third');

  // variables for fourth card and its content
  const objNameFourth = document.querySelector('.obj-name-fourth');
  const objFrame1Fourth = document.querySelector('.obj-frame-1-fourth');
  const objFrame2Fourth = document.querySelector('.obj-frame-2-fourth');
  const objFrame3Fourth = document.querySelector('.obj-frame-3-fourth');
  const objDescriptionFourth = document.querySelector('.obj-description-fourth');
  const objTech1Fourth = document.querySelector('.obj-tech-1-fourth');
  const objTech2Fourth = document.querySelector('.obj-tech-2-fourth');
  const objTech3Fourth = document.querySelector('.obj-tech-3-fourth');
  const imageCardFourth = document.querySelector('.image-card-fourth');

  // create first card
  objNameFirst.innerHTML = name;
  objFrame1First.innerHTML = frame1;
  objFrame2First.innerHTML = frame2;
  objFrame3First.innerHTML = frame3;
  objDescriptionFirst.innerHTML = description;
  objTech1First.innerHTML = technologies1;
  objTech2First.innerHTML = technologies2;
  objTech3First.innerHTML = technologies3;
  imageCardFirst.src = featuredImage;

  // create second card
  objNameSecond.innerHTML = name2;
  objFrame1Second.innerHTML = frame4;
  objFrame2Second.innerHTML = frame5;
  objFrame3Second.innerHTML = frame6;
  objDescriptionSecond.innerHTML = description2;
  objTech1Second.innerHTML = technologies4;
  objTech2Second.innerHTML = technologies5;
  objTech3Second.innerHTML = technologies6;
  imageCardSecond.src = featuredImage2;

  // create third card
  objNameThird.innerHTML = name3;
  objFrame1Third.innerHTML = frame7;
  objFrame2Third.innerHTML = frame8;
  objFrame3Third.innerHTML = frame9;
  objDescriptionThird.innerHTML = description3;
  objTech1Third.innerHTML = technologies7;
  objTech2Third.innerHTML = technologies8;
  objTech3Third.innerHTML = technologies9;
  imageCardThird.src = featuredImage3;

  // create fourth card
  objNameFourth.innerHTML = name4;
  objFrame1Fourth.innerHTML = frame10;
  objFrame2Fourth.innerHTML = frame11;
  objFrame3Fourth.innerHTML = frame12;
  objDescriptionFourth.innerHTML = description4;
  objTech1Fourth.innerHTML = technologies10;
  objTech2Fourth.innerHTML = technologies11;
  objTech3Fourth.innerHTML = technologies12;
  imageCardFourth.src = featuredImage4;

  // append all images to the cards
  imageCardFirst.appendChild(firstCardImage);
  imageCardSecond.appendChild(secondCardImage);
  imageCardThird.appendChild(thirdCardImage);
  imageCardFourth.appendChild(fourthCardImage);
};

const workCard = document.querySelectorAll('.scr-container');
workCard.forEach((card) => {
  card.classList.add('relative');
});

function modalObj(value) {
  mainModalContainer.className = ('modal-container');
  mainModalContainer.innerHTML = `
  <div class='modal-header'>
    <div class='modal-title'>
      <h1>${value.name}</h1>
      <div class='modal-frame'>
        <h3>${value.frame1}</h3>
        <img src='${value.frameImg}' alt='frame'>
        <h3>${value.frame2}</h3>
        <img src='${value.frameImg}' alt='frame'>
        <h3>${value.frame3}</h3>
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
          <li class='tag'>${value.technologies1}</li>
          <li class='tag'>${value.technologies2}</li>
          <li class='tag'>${value.technologies3}</li>
        </ul>
      </div>
      <div class='modal-links'>
        <a href='${value.githubLink}' target='_blank' class='action-btn'>Github</a>
        <a href='${value.liveLink}' target='_blank' class='action-btn'>Live</a>
      </div>
    </div>
  </div>`;

  if (value === objArray[0]) {
    workCard[0].appendChild(mainModalContainer);
  } else if (value === objArray[1]) {
    workCard[1].appendChild(mainModalContainer);
  } else if (value === objArray[2]) {
    workCard[2].appendChild(mainModalContainer);
  } else if (value === objArray[3]) {
    workCard[3].appendChild(mainModalContainer);
  }

  const closeModal = document.querySelector('.close-modal');
  closeModal.addEventListener('click', () => {
    mainModalContainer.className = 'modal-container modal-container-hide';
  });
}

firstCardBtn.addEventListener('click', modalObj.bind(null, objArray[0]));
secondCardBtn.addEventListener('click', modalObj.bind(null, objArray[1]));
thirdCardBtn.addEventListener('click', modalObj.bind(null, objArray[2]));
fourthCardBtn.addEventListener('click', modalObj.bind(null, objArray[3]));
