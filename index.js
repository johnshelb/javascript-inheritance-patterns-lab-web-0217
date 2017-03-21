function Point(x,y){
  this.x = x;
  this.y = y;
  this.toString = function(){
    return `(${x},${y})`
  }
}

function Side(length){
  this.length = length
}

function Shape(){
  }
  Shape.prototype.addToPlane = function(x,y){
    this.position = new Point(x,y)
  }

  Shape.prototype.move = function(a,b){
    this.position = new Point(a,b)
  }

  function Circle(radius){
    Shape.call(this)
    this.radius = radius
  }
    Circle.prototype = Object.create(Shape.prototype)
    Circle.prototype.constructor = Circle
    Circle.prototype.diameter = function(){
      return (this.radius * 2)
    }

    Circle.prototype.area = function(){
      debugger;
      return (this.radius * this.radius * Math.PI)
    }

    Circle.prototype.circumference = function(){
      return (this.radius * 2 * Math.PI)
    }

    function Polygon(sides){
      Shape.call(this)
      this.sides = sides
    }
    Polygon.prototype = Object.create(Shape.prototype)
    Polygon.prototype.constructor = Polygon
    Polygon.prototype.numberOfSides = function(){
      return this.sides.length
}
    Polygon.prototype.perimeter = function(){
      var perim = 0
      for(let i = 0; i < this.sides.length; i++){
        perim += this.sides[i].length
      }
      return (perim)
    }

  function Quadrilateral(side1, side2, side3, side4){
      Polygon.call(this,[new Side(side1),new Side(side2),new Side(side3),new Side(side4)])
    }
    Quadrilateral.prototype = Object.create(Polygon.prototype)
    Quadrilateral.prototype.constructor = Quadrilateral


function Rectangle(width, height){
  Quadrilateral.call(this, width, width, height, height)
  this.width = width
  this.height = height
}
   Rectangle.prototype = Object.create(Quadrilateral.prototype)
   Rectangle.prototype.constructor = Rectangle
   Rectangle.prototype.area = function(){
     return this.width * this.height
   }


function Square(side){
  Rectangle.call(this,side,side,side,side)
  this.side = side
}
Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square
Square.prototype.listProperties = function(){
  for(var prop in Square){
    if (s.hasOwnProperty(prop)){
      return ("Square[prop]")
    }
  }
}

function Triangle(a, b, c){
  Polygon.call(this,[new Side(a),new Side(b),new Side(c)])
}
Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle
