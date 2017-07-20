this.crashWith = function(otherobj) {
    if (otherobj.width > 300) {
      var myleft = this.x;
      var myright = this.x + (this.width) - 40;
      var mytop = this.y - 20;
      var mybottom = this.y + (this.height) - 40;
      var otherleft = otherobj.x;
      var otherright = otherobj.x + (otherobj.width) - 45;
      var othertop = otherobj.y;
      var otherbottom = otherobj.y + (otherobj.height) - 40;
      var crash = true;
      if ((mybottom < othertop) ||
      (mytop > otherbottom) ||
      (myright < otherleft) ||
      (myleft > otherright)) {
        crash = false;
      }
    } else {
      var myleft = this.x;
      var myright = this.x + (this.width) - 40;
      var mytop = this.y - 20;
      var mybottom = this.y + (this.height) - 40;
      var otherleft = otherobj.x;
      var otherright = otherobj.x + (otherobj.width) - 45;
      var othertop = otherobj.y;
      var otherbottom = otherobj.y + (otherobj.height) - 40;
      var crash = true;
      if ((mybottom < othertop) ||
      (mytop > otherbottom) ||
      (myright < otherleft) ||
      (myleft > otherright)) {
        crash = false;
      }
    }
  }
  return crash;
}


// this.crashWith = function(otherobj) {
//     var myleft = this.x;
//     var myright = this.x + (this.width) - 40;
//     var mytop = this.y - 20;
//     var mybottom = this.y + (this.height) - 40;
//     var otherleft = otherobj.x;
//     var otherright = otherobj.x + (otherobj.width) - 45;
//     var othertop = otherobj.y;
//     var otherbottom = otherobj.y + (otherobj.height) - 40;
//     var crash = true;
//     if ((mybottom < othertop) ||
//     (mytop > otherbottom) ||
//     (myright < otherleft) ||
//     (myleft > otherright)) {
//       crash = false;
//     }
//     return crash;
// }
