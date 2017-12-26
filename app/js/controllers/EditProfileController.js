'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, gravatarUrlBuilder) {
        $scope.user = {};

        $scope.getGravatarUrl = (email) => gravatarUrlBuilder.getGravatarUrl(email);
    }
);
