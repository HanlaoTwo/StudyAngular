/**
 * Created by hanqian18790 on 2017/2/14.
 */
(function() {
    'use strict';

    angular
        .module('module1')
        .controller('Module1Ctrl', Module1Ctrl);

    function Module1Ctrl() {
        var vm = this;
        vm.hello = 'hello AngularJS';
        vm.module1 = [];
    }
})();
