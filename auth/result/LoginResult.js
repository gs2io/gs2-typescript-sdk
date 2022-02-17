"use strict";
/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginResult = void 0;
var LoginResult = /** @class */ (function () {
    function LoginResult() {
        this.token = null;
        this.userId = null;
        this.expire = null;
    }
    LoginResult.prototype.getToken = function () {
        return this.token;
    };
    LoginResult.prototype.setToken = function (token) {
        this.token = token;
        return this;
    };
    LoginResult.prototype.withToken = function (token) {
        this.token = token;
        return this;
    };
    LoginResult.prototype.getUserId = function () {
        return this.userId;
    };
    LoginResult.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    LoginResult.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    LoginResult.prototype.getExpire = function () {
        return this.expire;
    };
    LoginResult.prototype.setExpire = function (expire) {
        this.expire = expire;
        return this;
    };
    LoginResult.prototype.withExpire = function (expire) {
        this.expire = expire;
        return this;
    };
    LoginResult.fromDict = function (data) {
        return new LoginResult()
            .withToken(data["token"])
            .withUserId(data["userId"])
            .withExpire(data["expire"]);
    };
    LoginResult.prototype.toDict = function () {
        return {
            "token": this.getToken(),
            "userId": this.getUserId(),
            "expire": this.getExpire(),
        };
    };
    return LoginResult;
}());
exports.LoginResult = LoginResult;
//# sourceMappingURL=LoginResult.js.map