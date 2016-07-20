window.onload = randomPic;

const pics = [
  'https://images3.alphacoders.com/444/44447.jpg',
  'http://www.pixelstalk.net/wp-content/uploads/2016/05/Doctor-Who-Wallpapers-Free.jpeg',
  'http://wallpapercave.com/wp/Yd15nN4.jpg',
  'https://images2.alphacoders.com/438/438676.jpg',
  'https://images4.alphacoders.com/198/198906.jpg'
];

const randomPic = function () {
  const randomNum = Math.floor(Math.random() * pics.length);
  document.getElementById('main').src = pics[randomNum];
};
