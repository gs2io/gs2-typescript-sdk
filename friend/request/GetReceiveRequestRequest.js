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
var GetReceiveRequestRequest = /** @class */ (function () {
    function GetReceiveRequestRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.fromUserId = null;
    }
    GetReceiveRequestRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetReceiveRequestRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetReceiveRequestRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetReceiveRequestRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetReceiveRequestRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetReceiveRequestRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetReceiveRequestRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetReceiveRequestRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetReceiveRequestRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetReceiveRequestRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetReceiveRequestRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetReceiveRequestRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetReceiveRequestRequest.prototype.getFromUserId = function () {
        return this.fromUserId;
    };
    GetReceiveRequestRequest.prototype.setFromUserId = function (fromUserId) {
        this.fromUserId = fromUserId;
        return this;
    };
    GetReceiveRequestRequest.prototype.withFromUserId = function (fromUserId) {
        this.fromUserId = fromUserId;
        return this;
    };
    GetReceiveRequestRequest.fromDict = function (data) {
        return new GetReceiveRequestRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withFromUserId(data["fromUserId"]);
    };
    GetReceiveRequestRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "fromUserId": this.getFromUserId(),
        };
    };
    return GetReceiveRequestRequest;
}());
exports.default = GetReceiveRequestRequest;
//# sourceMappingURL=GetReceiveRequestRequest.js.map