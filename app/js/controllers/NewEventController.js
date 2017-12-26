'use strict';

eventsApp.controller('NewEventController', function ($scope, eventData) {
  $scope.saveEvent = (event, newEventForm) => {
    if (newEventForm.$valid) {
      eventData
        .save(event)
        .$promise
        .then(response => console.log(response))
    }
  };
  $scope.cancelAdd = () => window.location = '/EventDetails.html';
});
