// http://xahlee.info/SpecialPlaneCurves_dir/Cardioid_dir/cardioid.html
// ^^ at least one person on the internet has useful information -__-
// https://youtu.be/qhbuKbxJsk8 < this guy is awesome wowowowow
// apparently this is a times table

var HEIGHT = 400;
var WIDTH = 400;
var COORDS = 400;
var INTERVAL = 80;

var trochoid = {

  canvas: null,
  ctx: null,
  r: null,
  cx: null,
  cy: null,
  coords: [],
  multiplier: 0,

  generateCoords: function(numPoints) {
    with(this) {
      with(Math) {
        var idx = 0;
        while(idx < COORDS) {
          var theta = idx * 2 * PI / COORDS;
          var x = cx + r * cos(theta);
          var y = cy + r * sin(theta);
          coords.push([x, y]);
          ++idx;
        }
      }
    }
    return;
  },

  drawCircle: function() {
    with(this) {
      with(Math) {
        ctx.beginPath();
        ctx.arc(
          cx,           // x-center
          cy,           // y-center
          r,            // radius
          0,            // start angle radians
          2*PI          // end angle radians
        );
        ctx.stroke();
      }
    }
    return;
  },

  drawLines: function() {
    with(this) {
      coords.forEach(function(pt1, i, arr) {
        var mult = i * multiplier;
        var nextIdx = mult >= arr.length
          ? (mult % arr.length)
          : mult;
        var pt2 = arr[nextIdx];
        ctx.beginPath();
        ctx.moveTo(pt1[0], pt1[1]);
        ctx.lineTo(pt2[0], pt2[1]);
        ctx.stroke();
      });
    }
    return;
  },

  render: function() {
    with(this) {
      if (document.body.querySelector('canvas') === null) { init(); }
      ctx.clearRect(
        0,                  // start x
        0,                  // start y
        WIDTH,              // end x
        HEIGHT              // end y
      );
      drawCircle();
      drawLines();

      if (multiplier < COORDS) {
        window.setTimeout(function() {
          render();
          multiplier++;
        }.bind(this), INTERVAL);
      }

    }
    return;
  },

  init: function() {
    with(this) {
      with(Math) {
        canvas = document.createElement('canvas');
        ctx = canvas.getContext('2d');
        canvas.width = WIDTH;
        canvas.height = HEIGHT;
        r = min(WIDTH, HEIGHT)/2;
        cx = WIDTH/2;
        cy = HEIGHT/2;
        generateCoords(COORDS);
        document.body.appendChild(canvas);
      }
    }
    return;
  }
};

void function() {
  trochoid.render.call(trochoid);
}();

