/**
 * Created by THANH BINH on 10/17/2015.
 */
define([], function() {
    function config($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: true
        });

        $routeProvider
            .when('/login', {
                templateUrl: '/templates/login.html'
            })
            .when('/register', {
                templateUrl: '/templates/register.html'
            })
            .otherwise({
                templateUrl: '/templates/index.html'
            });
    }

    config.$inject = ['$routeProvider', '$locationProvider'];

    return config;
});