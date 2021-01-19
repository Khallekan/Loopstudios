const galleryDesktop = [
  {
    id: 1,
    image: './images/desktop/image-deep-earth.jpg',
    text: 'Deep earth',
  },
  {
    id: 2,
    image: './images/desktop/image-night-arcade.jpg',
    text: 'Night arcade',
  },
  {
    id: 3,
    image: './images/desktop/image-soccer-team.jpg',
    text: 'Soccer Team Vr',
  },
  {
    id: 4,
    image: './images/desktop/image-grid.jpg',
    text: 'the grid',
  },
  {
    id: 5,
    image: './images/desktop/image-from-above.jpg',
    text: 'from up above vr',
  },
  {
    id: 6,
    image: './images/desktop/image-pocket-borealis.jpg',
    text: 'pocket borealis',
  },
  {
    id: 7,
    image: './images/desktop/image-curiosity.jpg',
    text: 'the curiousity',
  },
  {
    id: 8,
    image: './images/desktop/image-fisheye.jpg',
    text: 'make it fisheye',
  },
];

const galleryMobile = [
  {
    id: 1,
    image: './images/mobile/image-deep-earth.jpg',
    text: 'Deep earth',
  },
  {
    id: 2,
    image: './images/mobile/image-night-arcade.jpg',
    text: 'Night arcade',
  },
  {
    id: 3,
    image: './images/mobile/image-soccer-team.jpg',
    text: 'Soccer Team Vr',
  },
  {
    id: 4,
    image: './images/mobile/image-grid.jpg',
    text: 'the grid',
  },
  {
    id: 5,
    image: './images/mobile/image-from-above.jpg',
    text: 'from up above vr',
  },
  {
    id: 6,
    image: './images/mobile/image-pocket-borealis.jpg',
    text: 'pocket borealis',
  },
  {
    id: 7,
    image: './images/mobile/image-curiosity.jpg',
    text: 'the curiousity',
  },
  {
    id: 8,
    image: './images/mobile/image-fisheye.jpg',
    text: 'make it fisheye',
  },
];

// console.log(galleryDesktop);
// console.log(galleryMobile);
const picture = document.querySelector('.gallery-photos');
const mediaQuery = window.matchMedia(`(max-width: 1024px)`);
// console.log(picture);
const gallery = () => {
  picture.innerHTML = '';
  if (mediaQuery.matches) {
    galleryMobile.map(({ image, text }) => {
      return picture.insertAdjacentHTML(
        `beforeend`,
        `<figure class="picture">
            <img src='${image}' alt="" class="picture-img" />
            <p class="picture-txt">${text}</p>
          </figure>`
      );
    });
  } else {
    galleryDesktop.map(({ image, text }) => {
      return picture.insertAdjacentHTML(
        `beforeend`,
        `<figure class="picture">
            <img src='${image}' alt="" class="picture-img" />
            <p class="picture-txt">${text}</p>
          </figure>`
      );
    });
  }
};
mediaQuery.addListener(gallery);
gallery();

const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const nav = document.getElementById('mobile-nav');

const showItems = (e) => {
  return (nav.style.visibility = 'unset');
};
const closeItems = (e) => {
  return (nav.style.visibility = 'hidden');
};
hamburger.addEventListener('click', showItems);
close.addEventListener('click', closeItems);
