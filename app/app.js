/**
 * Created by apium on 01/08/2015.
 */
define([
        'config',
        'controllers/IndexController',
        'services/Guid',
        'services/AuthService'
    ],
    function(
        config, IndexController, Guid, AuthService
    ) {
        'use strict';

        var app = angular.module('vtsolutionBackend', [
            'ngRoute'
        ]);

        app.config(config);
        app.controller('IndexController', IndexController);
        app.factory('Guid', Guid);
        app.factory('AuthService', AuthService);
    });
