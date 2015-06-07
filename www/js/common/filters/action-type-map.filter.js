angular.module('alt')
  .filter('actionTypeMap', function () {
    var map = {
      'boardgames'  : 'img/activities/boardgames.svg',
      'cinema'  : 'img/activities/cinema.svg',
      'darts'   : 'img/activities/darts.svg',
      'drinks'  : 'img/activities/drinks.svg',
      'gaming'  : 'img/activities/gaming.svg',
      'event'   : 'img/activities/event.svg',
      'pool'  : 'img/activities/pool.svg',
      'tv'  : 'img/activities/tv.svg',
      'working'   : 'img/activities/working.svg',
      'reading'   : 'img/activities/reading.svg',
      'food'  : 'img/activities/food.svg'
    };

    return function(value) {
      return map[value];
    }

  })