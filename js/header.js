var header = {};

header.triangularize = function() {

  var pattern = Trianglify({
    width: 2000, // window.innerWidth, 
    height: 220,
    cell_size: 60, 
    x_colors: 'random'
  });

  pattern.canvas(document.getElementById('triangle-canvas'));
}

header.triangularize();
