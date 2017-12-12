var allCats = {
  cats: [
      {
          clicks : 0,
          name : 'Tabby',
          imgSrc : 'img/cat1.jpg',
          nicknames:['A','B','C'],
      },
      {
          clicks : 0,
          name : 'Tiger',
          imgSrc : 'img/cat2.jpg',
          nicknames:['D','B','C'],
      },
      {
          clicks : 0,
          name : 'Scaredy',
          imgSrc : 'img/cat3.jpg',
          nicknames:['E','B','C'],
      },
      {
          clicks : 0,
          name : 'Shadow',
          imgSrc : 'img/cat4.jpg',
          nicknames:['F','B','C'],
      },
      {
          clicks : 0,
          name : 'Sleepy',
          imgSrc : 'img/cat5.jpg',
          nicknames:['G','B','C'],
      }
  ]
};
var Cat = function(data){
  this.name = ko.observable(data.name);
  this.clicks = ko.observable(data.clicks);
  this.imgSrc = ko.observable(data.imgSrc);
  this.nicknames = ko.observableArray(data.nicknames);

  this.level = ko.computed(function(){
    var level;
    var cCount = this.clicks();
    if (cCount<10){
      level = 'Newborn';
    }
    else if (cCount<20) {
      level = 'Infant';
    }
    else if (cCount<30) {
      level = 'Teen';
    }
    else if (cCount<40) {
      level = 'Adult';
    }
    return level;
  }, this);
}

var ViewModel = function(){
  var self = this;
  this.listCats = ko.observableArray([])
  allCats.cats.forEach(function(catItem){
    self.listCats.push(new Cat(catItem));
  });

  this.curCat = ko.observable(this.listCats()[0]);
  this.incCount = function(){
    self.curCat().clicks(self.curCat().clicks()+1);
  };

  this.displayCat = function(catSel){
    self.curCat(catSel);
  };
};

ko.applyBindings(new ViewModel());
