/**
 * Created by apium on 01/08/2015.
 */
define([
        'config',
        'services/Guid',
        'services/AuthService',
        'controllers/IndexController',
        'controllers/LoginController'
    ],
    function(
        config, Guid, AuthService, IndexController, LoginController
    ) {
        'use strict';

        var app = angular.module('vtsolutionBackend', [
            'ngRoute'
        ]);

        app.config(config);
        app.controller('IndexController', IndexController);
        app.controller('LoginController', LoginController);
        app.factory('Guid', Guid);
        app.factory('AuthService', AuthService);
        app.run(function(AuthService, $location) {
            if(!AuthService.isAuthenticated()) {
                $location.path('/login');
            }
        });
    });
