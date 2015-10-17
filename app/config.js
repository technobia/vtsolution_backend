/**
 * Created by THANH BINH on 10/17/2015.
 */
define([], function() {
    function Config($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: true
        });

        $routeProvider
            .when('/', {
                templateUrl: '/templates/login.html'
            })
            .when('/register', {
                templateUrl: '/templates/register.html'
            })
            .otherwise({
                templateUrl: '/templates/index.html'
            });
    }

    Config.$inject = ['$routeProvider', '$locationProvider'];

    return Config;
});