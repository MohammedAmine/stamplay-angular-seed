angular.module("app").factory("UserFactory", ["$stamplay", "$q", "$rootScope", function($stamplay, $q, $rootScope){
  return {
    login : function(credentials) {
      var user = new $stamplay.User().Model;
      user.login(credentials.email, credentials.password)
      .then(function() {
        $rootScope.user = user.instance;
        $rootScope.$apply()
      })
    },
    signup : function(credentials) {
      var user = new $stamplay.User().Model;
      user.signup({ email: credentials.email, password : credentials.password})
      .then(function() {
        $rootScope.user = user.instance;
        $rootScope.$apply()
      })
    },
    logout : function() {
      var user = new $stamplay.User().Model;
      user.logout();
    }
  }
}])
