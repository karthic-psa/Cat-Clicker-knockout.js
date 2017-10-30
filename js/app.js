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
  this.curCat = ko.observable(new Cat({
    name:'Mewtwo',
    clicks:0,
    imgSrc:'img/cat1.jpg',
    nicknames:['A','B','C']
  }));
  this.incCount = function(){
    self.curCat().clicks(self.curCat().clicks()+1);
  };

};

ko.applyBindings(new ViewModel());
