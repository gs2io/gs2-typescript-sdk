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
var IssueTimeOffsetTokenByUserIdResult = /** @class */ (function () {
    function IssueTimeOffsetTokenByUserIdResult() {
        this.token = null;
        this.userId = null;
        this.expire = null;
    }
    IssueTimeOffsetTokenByUserIdResult.prototype.getToken = function () {
        return this.token;
    };
    IssueTimeOffsetTokenByUserIdResult.prototype.setToken = function (token) {
        this.token = token;
        return this;
    };
    IssueTimeOffsetTokenByUserIdResult.prototype.withToken = function (token) {
        this.token = token;
        return this;
    };
    IssueTimeOffsetTokenByUserIdResult.prototype.getUserId = function () {
        return this.userId;
    };
    IssueTimeOffsetTokenByUserIdResult.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    IssueTimeOffsetTokenByUserIdResult.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    IssueTimeOffsetTokenByUserIdResult.prototype.getExpire = function () {
        return this.expire;
    };
    IssueTimeOffsetTokenByUserIdResult.prototype.setExpire = function (expire) {
        this.expire = expire;
        return this;
    };
    IssueTimeOffsetTokenByUserIdResult.prototype.withExpire = function (expire) {
        this.expire = expire;
        return this;
    };
    IssueTimeOffsetTokenByUserIdResult.fromDict = function (data) {
        return new IssueTimeOffsetTokenByUserIdResult()
            .withToken(data["token"])
            .withUserId(data["userId"])
            .withExpire(data["expire"]);
    };
    IssueTimeOffsetTokenByUserIdResult.prototype.toDict = function () {
        return {
            "token": this.getToken(),
            "userId": this.getUserId(),
            "expire": this.getExpire(),
        };
    };
    return IssueTimeOffsetTokenByUserIdResult;
}());
exports.default = IssueTimeOffsetTokenByUserIdResult;
//# sourceMappingURL=IssueTimeOffsetTokenByUserIdResult.js.map