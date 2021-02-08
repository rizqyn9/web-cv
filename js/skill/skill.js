// import $ from 'jquery'
$(document).ready(function() {
    if(!$('#myCanvas').tagcanvas({
      textColour: '#33D6FF',
      outlineColour: 'transparent',
      reverse: true,
      depth: .11,
      maxSpeed: 0.05,
      textFont: null,
      weightMode:'both',
      // weight: true,
      // weightGradient: {
      //  0:    '#f00', // red
      //  0.33: '#ff0', // yellow
      //  0.66: '#0f0', // green
      //  1:    '#00f'  // blue
      // }
    },'tags')) {
      // something went wrong, hide the canvas container
      $('#myCanvasContainer').hide();
    }
  });

