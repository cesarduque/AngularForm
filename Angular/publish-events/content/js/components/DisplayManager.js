var displayManager ={
    bindings:{},
    controller: function($rootScope, $scope, $timeout){
        var ctrl = this;
        ctrl.changeOption;

        ctrl.user = {
            name:'',
            lastName:'',
            userName:'',
            password:'',
            email:''
        };
        
        $rootScope.$on('createUser',function(event, data){
            ctrl.user = data;
        });
        
        ctrl.changeUserName = function (){
            if(!ctrl.changeOption){
                ctrl.changeOption = true;                
                ctrl.user.userName = ctrl.user.name + "." + ctrl.user.lastName;                                       
            }
            else{
                ctrl.changeOption = false;
                ctrl.user.userName = ctrl.user.name[0] + ctrl.user.lastName;                                 
            }         
        }       
        
    },
    template:`
        <form name="form" ng-submit="$ctrl.changeUserName();">
            <div>
                <label for="inputName">Name:</label>
                <input name="inputName" type="text" ng-model="$ctrl.user.name" ng-disabled="true" upper-case-letter>
            </div>
            
            <div>
                <label for="inputLastName">Last Name:</label>
                <input name="inputLastName" type="text" ng-model="$ctrl.user.lastName" ng-disabled="true" upper-case-letter>
            </div>           

            <div>
                <label for="inputUserName">User Name:</label>
                <input name="inputUserName" type="text" ng-model="$ctrl.user.userName" ng-disabled="true" upper-lower>
            </div>            

            <div>
                <label for="inputPassword">Password:</label>
                <input name="inputPassword" type="text" ng-model="$ctrl.user.password" ng-disabled="true">
            </div>
            
            <div>
                <label for="inputEmail" >Email:</label>
                <input name="inputEmail" type="text" ng-model="$ctrl.user.email" ng-disabled="true">
            </div>
            
            <button type="submit" ng-disabled="form.$invalid">
                Change User Name
            </button>
        </form>    
    `
}

angular
    .module('app')
    .component('displayManager', displayManager);