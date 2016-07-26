const pics = [
  'http://res.cloudinary.com/dl8lhjvx0/image/upload/c_scale,w_1024/v1469557463/44447_uxwrlz.jpg',
  'http://res.cloudinary.com/dl8lhjvx0/image/upload/c_scale,w_1024/v1469557709/Y3Xs6lY_dgl88t.jpg',
  'http://res.cloudinary.com/dl8lhjvx0/image/upload/c_scale,w_1024/v1469557734/Yd15nN4_zwhlka.jpg',
  'http://res.cloudinary.com/dl8lhjvx0/image/upload/c_scale,w_1024/v1469557755/438676_oxfxld.jpg',
  'http://res.cloudinary.com/dl8lhjvx0/image/upload/c_scale,w_1024/v1469557775/198906_nibkv3.jpg'
];

const quotes = [
  '"I am and always will be the optimist. The hoper of far-flung hopes and the dreamer of improbable dreams." - Eleventh Doctor, Season 6: Episode 6',
  '"This is who I am, right here, right now, all right? All that counts is here and now, and this is me!" - Ninth Doctor, Season 1: Episode 2',
  '"In 900 years of time and space, I’ve never met anyone who wasn’t important." - Eleventh Doctor, Season 7: Christmas Special',
  '"You don’t just give up. You don’t just let things happen. You make a stand! You say no! You have the guts to do what’s right, even when everyone else just runs away." - Rose Tyler, Season 1: Episode 13',
  '"We’re all stories, in the end… just make it a good one, eh?" - Eleventh Doctor, Season 5: Episode 13',
  '"We all change, when you think about it. We’re all different people all through our lives. And that’s okay, that’s good, you’ve got to keep moving, so long as you remember all the people that you used to be." - Eleventh Doctor, Season 7: Christmas Special',
  '"Some people live more in 20 years than others do in 80. It’s not the time that matters, it’s the person." - Tenth Doctor, Season 3: Episode 6',
  '"Letting it get to you. You know what that’s called? Being alive. Best thing there is. Being alive right now is all that counts." - Eleventh Doctor, Season 6: Episode 4'
];

const randomPic = function () {
  const randomPicNum = Math.floor(Math.random() * pics.length);
  const randomQuoteNum = Math.floor(Math.random() * quotes.length);
  document.getElementById('main').style.backgroundImage = 'url(' + pics[randomPicNum] + ')';
  document.getElementById('quote').textContent = `${quotes[randomQuoteNum]}`;
};


window.onload = randomPic;
