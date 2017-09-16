var userManager ={
    bindings:{},
    controller: function($rootScope, $scope){
        var ctrl = this
        ctrl.user = {
            name:'',
            email:''
        };

        ctrl.loginUser = function(){
            $scope.$emit('login', ctrl.user);
        };
        $rootScope.$on('logout',function(event, data){
            console.log(data);
        });
        $scope.$on('logout', function(event, data){
            console.log(data);
        });

    },
    template:`
        <form ng-submit="$ctrl.loginUser();">
            <div>
                Name: <input type="text" ng-model="$ctrl.user.name">
            </div>
            <div>
                Email: <input type="text" ng-model="$ctrl.user.email">
            </div>
            <button type="submit">
                Log in
            </button>
        </form>    
    `
}

angular
    .module('app')
    .component('userManager', userManager);