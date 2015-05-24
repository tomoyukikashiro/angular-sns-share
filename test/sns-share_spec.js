(function() {

  'use strict';

  describe('ngSnsShare', function(){

    var element, scope, spy;
    beforeEach(module('ngSnsShare'));
    beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));
    afterEach(function() {
      spy.restore();
    });

    describe('platform=twitter', function(){
      describe('url', function(){
        describe('is not sat', function(){
          it('window.open with current url', inject(function($location, $window, $compile) {
            element = angular.element('<div ng-sns-share platform="twitter" text="test"></div>');
            element = $compile(element)(scope);
            spy = sinon.spy($window, 'open');

            //expect
            var url =  $location.protocol() + '//' + $location.host(),
                text = encodeURIComponent('test' + ' ' + url),
                openParam = ['https://twitter.com/intent/tweet?text=' + text, 'ngSnsShare', 'width=600,height=400'];

            $(element).click();
            expect(spy.calledWith(openParam[0], openParam[1], openParam[2])).to.be.ok();
          }));
        });
        describe('is sat', function(){
          it('window.open with url option', inject(function($location, $window, $compile) {
            element = angular.element('<div ng-sns-share url="http://example.com" platform="twitter" text="test"></div>');
            element = $compile(element)(scope);
            spy = sinon.spy($window, 'open');

            //expect
            var url =  'http://example.com',
                text = encodeURIComponent('test' + ' ' + url),
                openParam = ['https://twitter.com/intent/tweet?text=' + text, 'ngSnsShare', 'width=600,height=400'];

            $(element).click();
            expect(spy.calledWith(openParam[0], openParam[1], openParam[2])).to.be.ok();
          }));
        });
      });
    });

    describe('facebook', function(){

      describe('url', function(){
        describe('is not sat', function(){
          it('window.open with current url', inject(function($location, $window, $compile) {
            element = angular.element('<div ng-sns-share platform="facebook"></div>');
            element = $compile(element)(scope);
            spy = sinon.spy($window, 'open');

            //expect
            var url = encodeURIComponent($location.protocol() + '//' + $location.host()),
                openParam = ['https://www.facebook.com/sharer/sharer.php?u=' + url, 'ngSnsShare', 'width=600,height=400'];

            $(element).click();
            expect(spy.calledWith(openParam[0], openParam[1], openParam[2])).to.be.ok();
          }));
        });
        describe('is sat', function(){
          it('window.open with url option', inject(function($location, $window, $compile) {
            element = angular.element('<div ng-sns-share platform="facebook" url="http://example.com"></div>');
            element = $compile(element)(scope);
            spy = sinon.spy($window, 'open');

            //expect
            var url = encodeURIComponent('http://example.com'),
                openParam = ['https://www.facebook.com/sharer/sharer.php?u=' + url, 'ngSnsShare', 'width=600,height=400'];

            $(element).click();
            expect(spy.calledWith(openParam[0], openParam[1], openParam[2])).to.be.ok();
          }));
        });
      });

    });

  });

})();
