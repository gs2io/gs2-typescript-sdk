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
exports.LoginBySignatureResult = void 0;
var LoginBySignatureResult = /** @class */ (function () {
    function LoginBySignatureResult() {
        this.token = null;
        this.userId = null;
        this.expire = null;
    }
    LoginBySignatureResult.prototype.getToken = function () {
        return this.token;
    };
    LoginBySignatureResult.prototype.setToken = function (token) {
        this.token = token;
        return this;
    };
    LoginBySignatureResult.prototype.withToken = function (token) {
        this.token = token;
        return this;
    };
    LoginBySignatureResult.prototype.getUserId = function () {
        return this.userId;
    };
    LoginBySignatureResult.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    LoginBySignatureResult.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    LoginBySignatureResult.prototype.getExpire = function () {
        return this.expire;
    };
    LoginBySignatureResult.prototype.setExpire = function (expire) {
        this.expire = expire;
        return this;
    };
    LoginBySignatureResult.prototype.withExpire = function (expire) {
        this.expire = expire;
        return this;
    };
    LoginBySignatureResult.fromDict = function (data) {
        return new LoginBySignatureResult()
            .withToken(data["token"])
            .withUserId(data["userId"])
            .withExpire(data["expire"]);
    };
    LoginBySignatureResult.prototype.toDict = function () {
        return {
            "token": this.getToken(),
            "userId": this.getUserId(),
            "expire": this.getExpire(),
        };
    };
    return LoginBySignatureResult;
}());
exports.LoginBySignatureResult = LoginBySignatureResult;
//# sourceMappingURL=LoginBySignatureResult.js.map