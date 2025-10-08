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
var GetStatusRequest = /** @class */ (function () {
    function GetStatusRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.statusName = null;
    }
    GetStatusRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetStatusRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStatusRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStatusRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetStatusRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStatusRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStatusRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetStatusRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStatusRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStatusRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetStatusRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetStatusRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetStatusRequest.prototype.getStatusName = function () {
        return this.statusName;
    };
    GetStatusRequest.prototype.setStatusName = function (statusName) {
        this.statusName = statusName;
        return this;
    };
    GetStatusRequest.prototype.withStatusName = function (statusName) {
        this.statusName = statusName;
        return this;
    };
    GetStatusRequest.fromDict = function (data) {
        return new GetStatusRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withStatusName(data["statusName"]);
    };
    GetStatusRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "statusName": this.getStatusName(),
        };
    };
    return GetStatusRequest;
}());
exports.default = GetStatusRequest;
//# sourceMappingURL=GetStatusRequest.js.map