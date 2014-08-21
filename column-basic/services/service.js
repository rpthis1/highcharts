(function () {


    function ReportService($http, $q) {

        return({
            getReport: getReport,
            getSelections: getSelections,
            removeFriend: removeFriend
        });


        function getReport() {
            var request = $http({
                method: "post",
                url: "http://localhost:3000"
            });
            return( request.then(handleSuccess, handleError) );
        }

        function getSelections() {
            var request = $http({
                method: "post",
                url: "http://localhost:3000/api/selections"
            });
            return( request.then(handleSuccess, handleError) );

        }

        function removeFriend(id) {

            var request = $http({
                method: "delete",
                url: "api/index.cfm",
                params: {
                    action: "delete"
                },
                data: {
                    id: id
                }
            });

            return( request.then(handleSuccess, handleError) );

        }


        // ---
        // PRIVATE METHODS.
        // ---


        // I transform the error response, unwrapping the application dta from
        // the API response payload.
        function handleError(response) {

            // The API response from the server should be returned in a
            // nomralized format. However, if the request was not handled by the
            // server (or what not handles properly - ex. server error), then we
            // may have to normalize it on our end, as best we can.
            if (
                !angular.isObject(response.data) || !response.data.message
                ) {

                return( $q.reject("An unknown error occurred.") );

            }

            // Otherwise, use expected error message.
            return( $q.reject(response.data.message) );

        }


        // I transform the successful response, unwrapping the application data
        // from the API response payload.
        function handleSuccess(response) {

            return( response.data );
        }
    };

    var app = angular.module("guthub.services", []);
    ReportService.$inject = ["$http", "$q"];
    app.service("ReportService", ReportService);


}());


