const pics = [
  'https://images3.alphacoders.com/444/44447.jpg',
  'http://i.imgur.com/Y3Xs6lY.jpg',
  'http://wallpapercave.com/wp/Yd15nN4.jpg',
  'https://images2.alphacoders.com/438/438676.jpg',
  'https://images4.alphacoders.com/198/198906.jpg'
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

const ToDoList = function() {
  this.init();
  return this;
};

ToDoList.prototype = {
  tasks: [],
  index: 0,

  init() {
    this.load();
  },

  create(task) {
    if (task == null) throw new TypeError('Missing task parameter');

    task.id = this.index++;

    this.tasks.push(task);
    this.save();
  },


  load() {
    this.tasks = (localStorage.tasks ? JSON.parse(localStorage.tasks) : []);
    this.index = localStorage.index ? localStorage.index : 0;
  },

  save() {
    localStorage.tasks = this.tasks ? JSON.stringify(this.tasks) : null;
    localStorage.index = this.index;
  }
};

const View = function() { return this; }

View.prototype = {
  init() {
    db.create({
      title: 'Add a Task',
      completed: false,
      created: new Date()
    });

    this.renderView();
  },

  renderView() {
    jstProcess(new JSEvalContext(db.tasks), document.getElementById('results'));
  }
};

const db = new ToDoList();
const view = new View();

window.onload = view.init;
window.onload = randomPic;
