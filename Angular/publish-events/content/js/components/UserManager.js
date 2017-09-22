var userManager ={
    bindings:{},
    controller: function($rootScope, $scope, $timeout){
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
        ctrl.$onInit = function(){
            $timeout(function(){
                console.log($scope.form);
            }, 1000);
            
        }

    },
    template:`
        <form name="form" ng-submit="$ctrl.loginUser();">
            <div>
                <label for="inputName">Name:</label>
                <input name="inputName" type="text" ng-model="$ctrl.user.name" required minlength="3">
            </div>
            <div ng-if="form.inputName.$touched" ng-messages="form.inputName.$error" ng-messages-multiple>
                <label ng-message="required">
                    This field is required!!
                </label>
                <label ng-message="minlength">
                 This field must have at least 3 characters!!!
            </label>
            
            </div>

            <div>
                <label for="inputEmail" >Email:</label>
                <input name="inputEmail" type="text" ng-model="$ctrl.user.email" required>
            </div>
            <button type="submit" ng-disabled="form.$invalid">
                Log in
            </button>
        </form>    
    `
}

angular
    .module('app')
    .component('userManager', userManager);