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
var GetPointRequest = /** @class */ (function () {
    function GetPointRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
    }
    GetPointRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetPointRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPointRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPointRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetPointRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPointRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPointRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetPointRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPointRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPointRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetPointRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetPointRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetPointRequest.fromDict = function (data) {
        return new GetPointRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"]);
    };
    GetPointRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return GetPointRequest;
}());
exports.default = GetPointRequest;
//# sourceMappingURL=GetPointRequest.js.map