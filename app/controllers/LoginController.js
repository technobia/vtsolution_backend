/**
 * Created by apium on 22/08/2015.
 */
define(function(require) {
    'use strict';

    function LoginController($scope) {
        this.data = $scope.data = {};
        this.event = $scope.event = {};

        this.event.onLoad = this.onLoad.bind(this);
    }

    LoginController.prototype.onLoad = function() {

    };

    return LoginController;
});