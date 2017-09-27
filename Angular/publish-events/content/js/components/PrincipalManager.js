var principalManager ={
    bindings:{},
    controller: function($rootScope, $scope, $timeout){                

    },
    template:`
        <user-manager></user-manager>
        <display-manager></display-manager>        
    `
}

angular
    .module('app')
    .component('principalManager', principalManager);