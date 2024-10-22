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
var DetachGuardRequest = /** @class */ (function () {
    function DetachGuardRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userName = null;
        this.clientId = null;
        this.guardNamespaceId = null;
    }
    DetachGuardRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DetachGuardRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DetachGuardRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DetachGuardRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DetachGuardRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DetachGuardRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DetachGuardRequest.prototype.getUserName = function () {
        return this.userName;
    };
    DetachGuardRequest.prototype.setUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    DetachGuardRequest.prototype.withUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    DetachGuardRequest.prototype.getClientId = function () {
        return this.clientId;
    };
    DetachGuardRequest.prototype.setClientId = function (clientId) {
        this.clientId = clientId;
        return this;
    };
    DetachGuardRequest.prototype.withClientId = function (clientId) {
        this.clientId = clientId;
        return this;
    };
    DetachGuardRequest.prototype.getGuardNamespaceId = function () {
        return this.guardNamespaceId;
    };
    DetachGuardRequest.prototype.setGuardNamespaceId = function (guardNamespaceId) {
        this.guardNamespaceId = guardNamespaceId;
        return this;
    };
    DetachGuardRequest.prototype.withGuardNamespaceId = function (guardNamespaceId) {
        this.guardNamespaceId = guardNamespaceId;
        return this;
    };
    DetachGuardRequest.fromDict = function (data) {
        return new DetachGuardRequest()
            .withUserName(data["userName"])
            .withClientId(data["clientId"])
            .withGuardNamespaceId(data["guardNamespaceId"]);
    };
    DetachGuardRequest.prototype.toDict = function () {
        return {
            "userName": this.getUserName(),
            "clientId": this.getClientId(),
            "guardNamespaceId": this.getGuardNamespaceId(),
        };
    };
    return DetachGuardRequest;
}());
exports.default = DetachGuardRequest;
//# sourceMappingURL=DetachGuardRequest.js.map