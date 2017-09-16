var OuterComponent = {
    bindings:{},
    controller: function($rootScope){
         $rootScope.$on('logout',function(event, data){
            console.log(data);
        });
    },
    template:`
       <div>
        I am the outer $scope component!
       </div>
    `
};

angular
    .module('app')
    .component('OuterComponent',OuterComponent);