var BlowDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);

  Dancer.call(this,top, left, timeBetweenSteps);
  this.$node.css("border", "10px solid blue")
  //makeDancer.call(this,top, left, timeBetweenSteps);
  this.n = "Orange"
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

BlowDancer.prototype = Object.create(Dancer.prototype);
BlowDancer.prototype.constructor = BlowDancer;

BlowDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.oldStep = this.step;
    Dancer.prototype.step.call(this);
    switch(this.n){
      case "Orange":
        this.$node.css("border", "10px solid pink");
        this.n="Blue";
        break;
      case "Blue":
        this.$node.css("border", "15px solid blue");
        this.n="Yellow";
        break;
      case "Yellow":
        this.$node.css("border", "20px solid yellow");
        this.n="White";
        break;
      case "White":
        this.$node.css("border", "25px solid white");
        this.n="Orange";
        break;
    }
  };