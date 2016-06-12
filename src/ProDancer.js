var ProDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);

  Dancer.call(this,top, left, timeBetweenSteps);
  this.$node.css("border", "none", "border-radius", "none")
  this.$node.append("<img src='src/Cool.gif'>")
  this.$node.children("img").css("width", "50px", "height", "50px")
};

ProDancer.prototype = Object.create(Dancer.prototype);
ProDancer.prototype.constructor = ProDancer;

ProDancer.prototype.step = function(){
    
  };