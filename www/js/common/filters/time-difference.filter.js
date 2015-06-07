angular.module('alt')
  .filter('eventFormatDate', function () {
    return function (startDate, endData) {
      var startDate = moment(startDate),
          endDate = moment(endDate);
      if (startDate.format('MMMMM YY DD') === endDate.format('MMMM YY DD')) {
        return moment(startDate).format('MMMM DD| hh:mm') + ' - '+ moment(endDate).format('hh:mm');
      } else {
        return moment(startDate).format('MMMM DD | hh:mm') + ' - '+ moment(endDate).format('MMMM DD | hh:mm');
      }

    }
  })
  .filter('timeDifference', function () {
    return function(value) {
      var a = moment(value);
      var b = moment(new Date());
      var diff = b.diff(a, 'minutes');
      if (diff === 0) {
        return 'just now';
      } else {
        return diff + 'min ago';
      }

    }

  });