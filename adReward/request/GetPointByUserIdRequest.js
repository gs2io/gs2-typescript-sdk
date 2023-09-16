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
var GetPointByUserIdRequest = /** @class */ (function () {
    function GetPointByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
    }
    GetPointByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetPointByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPointByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPointByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetPointByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPointByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPointByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetPointByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPointByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPointByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetPointByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetPointByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetPointByUserIdRequest.fromDict = function (data) {
        return new GetPointByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"]);
    };
    GetPointByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
        };
    };
    return GetPointByUserIdRequest;
}());
exports.default = GetPointByUserIdRequest;
//# sourceMappingURL=GetPointByUserIdRequest.js.map