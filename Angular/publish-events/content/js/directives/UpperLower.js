function upperLower(){
    return{
        require: 'ngModel',
        link:function($scope, $element, $attrs, $ctrl){
            var ngModelCtrl = $ctrl;
            ngModelCtrl.$formatters.unshift(function(value){
                newUserName = '';
                var ran = Math.random();
                console.log(ran);
                var parameter = 0;
                if(ran < 0.5){
                    parameter = 0;
                }else{
                    parameter = 1;
                }
                angular.forEach(value, function(obj, key) {
                    if (key%2 == parameter){
                        newUserName = newUserName +obj.toUpperCase();
                    }else
                    {
                        newUserName = newUserName +obj.toLowerCase();
                    }                    
                });                
                return newUserName;
            });
        }
    }
}

angular
    .module('app')
    .directive('upperLower',upperLower)