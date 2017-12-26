'use strict';

eventsApp.controller('EventController', function ($scope, eventData) {
  eventData
    .get()
    .$promise
    .then(event => $scope.event = event);
  $scope.upVoteSession = (session) => session.votes++;
  $scope.downVoteSession = (session) => session.votes--;
});
