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
var GetUserRequest = /** @class */ (function () {
    function GetUserRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userName = null;
    }
    GetUserRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetUserRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetUserRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetUserRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetUserRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetUserRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetUserRequest.prototype.getUserName = function () {
        return this.userName;
    };
    GetUserRequest.prototype.setUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    GetUserRequest.prototype.withUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    GetUserRequest.fromDict = function (data) {
        return new GetUserRequest()
            .withUserName(data["userName"]);
    };
    GetUserRequest.prototype.toDict = function () {
        return {
            "userName": this.getUserName(),
        };
    };
    return GetUserRequest;
}());
exports.default = GetUserRequest;
//# sourceMappingURL=GetUserRequest.js.map