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
var AttachGuardRequest = /** @class */ (function () {
    function AttachGuardRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userName = null;
        this.clientId = null;
        this.guardNamespaceId = null;
    }
    AttachGuardRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AttachGuardRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AttachGuardRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AttachGuardRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AttachGuardRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AttachGuardRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AttachGuardRequest.prototype.getUserName = function () {
        return this.userName;
    };
    AttachGuardRequest.prototype.setUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    AttachGuardRequest.prototype.withUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    AttachGuardRequest.prototype.getClientId = function () {
        return this.clientId;
    };
    AttachGuardRequest.prototype.setClientId = function (clientId) {
        this.clientId = clientId;
        return this;
    };
    AttachGuardRequest.prototype.withClientId = function (clientId) {
        this.clientId = clientId;
        return this;
    };
    AttachGuardRequest.prototype.getGuardNamespaceId = function () {
        return this.guardNamespaceId;
    };
    AttachGuardRequest.prototype.setGuardNamespaceId = function (guardNamespaceId) {
        this.guardNamespaceId = guardNamespaceId;
        return this;
    };
    AttachGuardRequest.prototype.withGuardNamespaceId = function (guardNamespaceId) {
        this.guardNamespaceId = guardNamespaceId;
        return this;
    };
    AttachGuardRequest.fromDict = function (data) {
        return new AttachGuardRequest()
            .withUserName(data["userName"])
            .withClientId(data["clientId"])
            .withGuardNamespaceId(data["guardNamespaceId"]);
    };
    AttachGuardRequest.prototype.toDict = function () {
        return {
            "userName": this.getUserName(),
            "clientId": this.getClientId(),
            "guardNamespaceId": this.getGuardNamespaceId(),
        };
    };
    return AttachGuardRequest;
}());
exports.default = AttachGuardRequest;
//# sourceMappingURL=AttachGuardRequest.js.map