/**
 * Created by apium on 01/08/2015.
 */
define(function(require) {
    'use strict';

    var LocalStorageService = require('services/LocalStorageService');

    function IndexController($scope) {
        this.data = $scope.data = {};
        this.event = $scope.event = {};
        this.localStorageService = LocalStorageService.newInstance();

        this.event.onLoad = this.onLoad.bind(this);
    }

    IndexController.prototype.onLoad = function() {
        this.localStorageService.set('test', 'Mother Fucker');
        console.log('hello world', this.localStorageService.get('test'));
    };

    return IndexController;
});