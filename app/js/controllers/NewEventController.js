'use strict';

eventsApp.controller('NewEventController', function ($scope) {
  $scope.saveEvent = (event) => {
    if (newEventForm.$valid) {
      this.event = event;
    }
  };
  $scope.cancelAdd = () => window.location = '/EventDetails.html';
});
