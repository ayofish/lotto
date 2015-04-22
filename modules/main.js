var xmpl = angular.module('xmpl', ['xmpl.service', 'xmpl.directive', 'xmpl.filter'])
xmpl.run(function(greeter, user) {
  // This is effectively part of the main method initialization code
  greeter.localize({
    salutation: 'Bonjour'
  });
  user.load('World');
});

xmpl.controller('XmplController', function($scope, greeter, user){
  $scope.greeting = greeter.greet(user.name);
});

var xmplService = angular.module('xmpl.service', [])

xmplService.value('greeter', {
  salutation: 'Hello',
  localize: function(localization) {
    this.salutation = localization.salutation;
  },
  greet: function(name) {
    return this.salutation + ' ' + name + '!';
  }
})

xmplService.value('user', {
  load: function(name) {
    this.name = name;
  }
});

angular.module('xmpl.directive', []);

angular.module('xmpl.filter', []);