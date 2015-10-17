/**
 * Created by apium on 22/08/2015.
 */
function LoginController($scope, RestAPI, Guid) {
    this.data = $scope.data = {};
    this.fn = $scope.fn = {};
    this.event = $scope.event = {};

    this.guid = Guid;
    this.restAPI = RestAPI;

    this.event.onLoad = this.onLoad.bind(this);

    return this;
}

LoginController.prototype.onLoad = function() {
    this.initData();
};

LoginController.prototype.initData = function() {
    this.data.id = this.guid;
};

app.controller('LoginController', LoginController);