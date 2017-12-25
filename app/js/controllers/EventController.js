'use strict';

eventsApp.controller('EventController', function ($scope) {
  $scope.event = {
    name: 'Angular Bootcamp',
    date: '12/12/2012',
    time: '9:00am',
    location: {
      address: 'Google Headquarters',
      city: 'Mountain View',
      province: 'CA'
    },
    imageUrl: '/img/angularjs-logo.png',
    sessions: [
      {
        name: 'Introduction to MVC',
        host: 'Bob Smith',
        duration: '1h',
        level: 'Basic',
        abstract: 'Lets introducte some people to mvc.',
        votes: 12
      },
      {
        name: 'Mastering the scope',
        host: 'John Null',
        duration: '2h',
        level: 'Advanced',
        abstract: 'Scope is something.',
        votes: 2
      },
      {
        name: 'Angular 2.0',
        host: 'Jane Void',
        duration: '15min',
        level: 'Intermediate',
        abstract: 'Some new features.',
        votes: 21
      },
    ]
  };
  $scope.upVoteSession = (session) => session.votes++;
  $scope.downVoteSession = (session) => session.votes--;
});
