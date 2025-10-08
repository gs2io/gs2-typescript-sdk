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
var AssumeResult = /** @class */ (function () {
    function AssumeResult() {
        this.token = null;
        this.userId = null;
        this.expire = null;
    }
    AssumeResult.prototype.getToken = function () {
        return this.token;
    };
    AssumeResult.prototype.setToken = function (token) {
        this.token = token;
        return this;
    };
    AssumeResult.prototype.withToken = function (token) {
        this.token = token;
        return this;
    };
    AssumeResult.prototype.getUserId = function () {
        return this.userId;
    };
    AssumeResult.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AssumeResult.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AssumeResult.prototype.getExpire = function () {
        return this.expire;
    };
    AssumeResult.prototype.setExpire = function (expire) {
        this.expire = expire;
        return this;
    };
    AssumeResult.prototype.withExpire = function (expire) {
        this.expire = expire;
        return this;
    };
    AssumeResult.fromDict = function (data) {
        return new AssumeResult()
            .withToken(data["token"])
            .withUserId(data["userId"])
            .withExpire(data["expire"]);
    };
    AssumeResult.prototype.toDict = function () {
        return {
            "token": this.getToken(),
            "userId": this.getUserId(),
            "expire": this.getExpire(),
        };
    };
    return AssumeResult;
}());
exports.default = AssumeResult;
//# sourceMappingURL=AssumeResult.js.map