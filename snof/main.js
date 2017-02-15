/**
 * Created by hanqian18790 on 2017/2/15.
 */

require.config({

    //path映射那些不直接放置于baseUrl下的模块名
    paths: {
        "angular":"lib/angular/angular.min",
        "angularRoute":"lib/angular-route/angular-route",
        //"bootstrap":"",
        "app":"app.module",
        "appConfig":"app.config",
        "module1Module":"module1/module1.module",
        "module1Ctrl":"module1/module1",
        "module2Module":"module2/module2.module",
        //"module2Ctrl":"module2/module2",

    },
    //shim: 为那些没有使用define()来声明依赖关系、设置模块的"浏览器全局变量注入"型脚本做依赖和导出配置。
    shim: {
        "angular": {
            exports: "angular"
        },
        "angularRoute": {
            deps: ['angular'],
            exports: "angularRoute"
        },


        "app": {
            deps: ['angular','angularRoute'],
            exports: "app"
        },
        "appConfig": {
            deps: ['app'],
            exports: "appConfig"
        },
        "module1Module": {
            exports: "module1Module"
        },
        "module1Ctrl": {
            exports: "module1Ctrl"
        },
        "module2Module": {
            exports: "module2Module"
        }
    }
});

require(
    [
        "angular",
        "angularRoute",

        "app",
        "appConfig",
        "module1Module",
        "module1Ctrl",
        "module2Module",
    ], function (angular) {
        console.log("----------");
        angular.bootstrap(document, ["app"]);
    });