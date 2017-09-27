function upperCaseLetter(){
    return{
        require: 'ngModel',
        link:function($scope, $element, $attrs, $ctrl){
            var ngModelCtrl = $ctrl;
            ngModelCtrl.$formatters.unshift(function(value){
                return value.toUpperCase();
            });
        }
    }
}

angular
    .module('app')
    .directive('upperCaseLetter',upperCaseLetter)