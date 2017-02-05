(function () {
    'use strict'

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.text = "";
        $scope.message = "";
        $scope.note = "";
        $scope.color = "";
        $scope.updateMessage = function () {
            $scope.message = returnMessage($scope.text);
        };

        function returnMessage(st) {
            var array = st.split(',');
            var count = 0;
            $scope.note = "";

            for (var i = 0; i < array.length; i++) {
                if (array[i] && isNotAllSpaces(array[i])) {
                    count++;
                } else {
                    $scope.note = "Empty item, i.e., , , is not counted!";
                }
            }

            $scope.color = "green";
            if (count === 0) {
                $scope.color = "red";
                return "Please enter data first";
            }
            else if (count <= 3) {
                return "Enjoy!";
            } else {
                return "Too much!";
            }
        }

        // check whether all characters are spaces
        function isNotAllSpaces(str) {
            var allSpaces = false;
            for (var i = 0; i < str.length; i++) {
                 if (str[i] !== " ") {
                     allSpaces = true;
                     break;
                 }
            }
            return allSpaces;
        }
    }

})();


