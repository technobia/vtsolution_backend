/**
 * Created by apium on 22/08/2015.
 */
function RegisterController($scope, RestAPI, Guid) {
    this.data = $scope.data = {};
    this.fn = $scope.fn = {};
    this.event = $scope.event = {};

    this.guid = Guid;

    this.event.onLoad = this.onLoad.bind(this);

    return this;
}

RegisterController.prototype.onLoad = function() {
    this.initData();
};

RegisterController.prototype.initData = function() {
    this.data.id = this.guid;
};

app.controller('RegisterController', RegisterController);