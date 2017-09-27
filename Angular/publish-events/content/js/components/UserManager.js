var userManager ={
    bindings:{},
    controller: function($rootScope, $scope, $timeout){
        var ctrl = this
        ctrl.user = {
            name:'',
            lastName:'',
            userName:'',
            password:'',
            email:''
        };

        ctrl.loginUser = function(){
            $scope.$emit('createUser', ctrl.user);
        };       
    },
    template:`
        <form name="form" ng-submit="$ctrl.loginUser();">
            <div>
                <label for="inputName">Name:</label>
                <input name="inputName" type="text" ng-model="$ctrl.user.name" required>
            </div>
            <div ng-if="form.inputName.$touched" ng-messages="form.inputName.$error" >
                <label ng-message="required">
                    This field is required!!
                </label>                         
            </div>

            <div>
                <label for="inputLastName">Last Name:</label>
                <input name="inputLastName" type="text" ng-model="$ctrl.user.lastName" required>
            </div>
            <div ng-if="form.inputLastName.$touched" ng-messages="form.inputLastName.$error" >
                <label ng-message="required">
                    This field is required!!
                </label>                         
            </div>

            <div>
                <label for="inputUserName">User Name:</label>
                <input name="inputUserName" type="text" ng-model="$ctrl.user.userName" required>
            </div>
            <div ng-if="form.inputUserName.$touched" ng-messages="form.inputUserName.$error" >
                <label ng-message="required">
                    This field is required!!
                </label>                         
            </div>

            <div>
                <label for="inputPassword">Password:</label>
                <input name="inputPassword" type="password" ng-model="$ctrl.user.password" required>
            </div>
            <div ng-if="form.inputPassword.$touched" ng-messages="form.inputPassword.$error" >
                <label ng-message="required">
                    This field is required!!
                </label>                         
            </div>

            <div>
                <label for="inputEmail" >Email:</label>
                <input name="inputEmail" type="text" ng-model="$ctrl.user.email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$">
            </div>
            <div ng-if="form.inputEmail.$touched" ng-messages="form.inputEmail.$error" ng-messages-multiple>
                <label ng-message="required">
                    This field is required!!
                </label>
                <label ng-message="pattern">
                    Please enter a valid email address!!!
                </label>            
            </div>
            <button type="submit" ng-disabled="form.$invalid">
                Create User
            </button>
        </form>    
    `
}

angular
    .module('app')
    .component('userManager', userManager);