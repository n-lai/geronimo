const pics = [
  'https://images3.alphacoders.com/444/44447.jpg',
  'http://www.pixelstalk.net/wp-content/uploads/2016/05/Doctor-Who-Wallpapers-Free.jpeg',
  'http://wallpapercave.com/wp/Yd15nN4.jpg',
  'https://images2.alphacoders.com/438/438676.jpg',
  'https://images4.alphacoders.com/198/198906.jpg'
];

const quotes = [
  'I am and always will be the optimist. The hoper of far-flung hopes and the dreamer of improbable dreams.',
  'This is who I am, right here, right now, all right? All that counts is here and now, and this is me!',
  'In 900 years of time and space, I’ve never met anyone who wasn’t important.',
  'You don’t just give up. You don’t just let things happen. You make a stand! You say no! You have the guts to do what’s right, even when everyone else just runs away.',
  'We’re all stories, in the end… just make it a good one, eh?',
  'We all change, when you think about it. We’re all different people all through our lives. And that’s okay, that’s good, you’ve got to keep moving, so long as you remember all the people that you used to be'
];

const randomPic = function () {
  const randomPicNum = Math.floor(Math.random() * pics.length);
  const randomQuoteNum = Math.floor(Math.random() * quotes.length);
  document.getElementById('main').style.backgroundImage = 'url(' + pics[randomPicNum] + ')';
  document.getElementById('quote').textContent = quotes[randomQuoteNum];
};

window.onload = randomPic;
