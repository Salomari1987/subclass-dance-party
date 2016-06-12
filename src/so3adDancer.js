var so3adDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);

  makeDancer.call(this,top, left, timeBetweenSteps);

  //makeDancer.call(this,top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.bol = true;
};

so3adDancer.prototype = Object.create(makeDancer.prototype);
so3adDancer.prototype.constructor = so3adDancer;

so3adDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.oldStep = this.step;
    makeDancer.prototype.step.call(this);
    // debugger;
    //var imageUrl="http://www.clipartbest.com/cliparts/9cp/op9/9cpop96yi.png";
    if (!!this.bol){
      this.$node.append("<img src='src/so3ad.gif'>");
      this.bol = false;
    }else{
      this.$node.children("img").detach();
      this.bol = true
    }
        // if (!this.bol) {
    //   debugger;
    //   this.$node.detach();
    //   this.bol = true
    // }
    // this.$node.toggle();

  };