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
var AccessToken = /** @class */ (function () {
    function AccessToken() {
        this.token = null;
        this.userId = null;
        this.expire = null;
        this.timeOffset = null;
    }
    AccessToken.prototype.getToken = function () {
        return this.token;
    };
    AccessToken.prototype.setToken = function (token) {
        this.token = token;
        return this;
    };
    AccessToken.prototype.withToken = function (token) {
        this.token = token;
        return this;
    };
    AccessToken.prototype.getUserId = function () {
        return this.userId;
    };
    AccessToken.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AccessToken.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AccessToken.prototype.getExpire = function () {
        return this.expire;
    };
    AccessToken.prototype.setExpire = function (expire) {
        this.expire = expire;
        return this;
    };
    AccessToken.prototype.withExpire = function (expire) {
        this.expire = expire;
        return this;
    };
    AccessToken.prototype.getTimeOffset = function () {
        return this.timeOffset;
    };
    AccessToken.prototype.setTimeOffset = function (timeOffset) {
        this.timeOffset = timeOffset;
        return this;
    };
    AccessToken.prototype.withTimeOffset = function (timeOffset) {
        this.timeOffset = timeOffset;
        return this;
    };
    AccessToken.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AccessToken()
            .withToken(data["token"])
            .withUserId(data["userId"])
            .withExpire(data["expire"])
            .withTimeOffset(data["timeOffset"]);
    };
    AccessToken.prototype.toDict = function () {
        return {
            "token": this.getToken(),
            "userId": this.getUserId(),
            "expire": this.getExpire(),
            "timeOffset": this.getTimeOffset(),
        };
    };
    return AccessToken;
}());
exports.default = AccessToken;
//# sourceMappingURL=AccessToken.js.map