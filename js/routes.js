angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.empresa', {
    url: '/page',
    views: {
      'side-menu21': {
        templateUrl: 'templates/empresa.html',
        controller: 'empresaCtrl'
      }
    }
  })

  .state('menu.contato', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contato.html',
        controller: 'contatoCtrl'
      }
    }
  })

  .state('menu.serviO', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/serviO.html',
        controller: 'serviOCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});