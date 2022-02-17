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
var GetPasswordRequest = /** @class */ (function () {
    function GetPasswordRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userName = null;
    }
    GetPasswordRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetPasswordRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPasswordRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPasswordRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetPasswordRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPasswordRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPasswordRequest.prototype.getUserName = function () {
        return this.userName;
    };
    GetPasswordRequest.prototype.setUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    GetPasswordRequest.prototype.withUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    GetPasswordRequest.fromDict = function (data) {
        return new GetPasswordRequest()
            .withUserName(data["userName"]);
    };
    GetPasswordRequest.prototype.toDict = function () {
        return {
            "userName": this.getUserName(),
        };
    };
    return GetPasswordRequest;
}());
exports.default = GetPasswordRequest;
//# sourceMappingURL=GetPasswordRequest.js.map