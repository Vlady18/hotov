if($(window).width() > 1024)
{
   $('body').parallax({
      'elements': [
        {
          'selector': '.birds',
          'properties': {
            'x': {
              'right': {
                'initial': 0,
                'multiplier': 0.1,
                'unit': 'px',
                'invert': false
              }
            },
            'y': {
              'top': {
                'initial': -650,
                'multiplier': 0.04,
                'unit': 'px',
                'invert': false
              }
            }
          }
        },
        {
          'selector': '.cloud',
          'properties': {
            'x': {
              'right': {
                'initial': 0,
                'multiplier': 0.06,
                'unit': 'px',
                'invert': false
              }
            },
            'y': {
              'top': {
                'initial': -650,
                'multiplier': 0.03,
                'unit': 'px',
                'invert': false
              }
            }
          }
        }
      ]
    });
} else {
   // change functionality for larger screens
}

