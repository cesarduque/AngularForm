function ContactController($rootScope,$scope){
    var ctrl = this;
    ctrl.contacts = [];
    /*ctrl.logoutUser = function(){
        $scope.$broadcast('logout',ctrl.contacts);
    };*/
    ctrl.logoutUser = function(){
        $rootScope.$broadcast('logout',ctrl.contacts);
    };
    $scope.$on('login', function(even, data){
        ctrl.contacts.push(data);
    });
}

angular
    .module('app')
    .controller('ContactController', ContactController);