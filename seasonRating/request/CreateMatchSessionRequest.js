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
var CreateMatchSessionRequest = /** @class */ (function () {
    function CreateMatchSessionRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.sessionName = null;
        this.ttlSeconds = null;
    }
    CreateMatchSessionRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateMatchSessionRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateMatchSessionRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateMatchSessionRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateMatchSessionRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateMatchSessionRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateMatchSessionRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateMatchSessionRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateMatchSessionRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateMatchSessionRequest.prototype.getSessionName = function () {
        return this.sessionName;
    };
    CreateMatchSessionRequest.prototype.setSessionName = function (sessionName) {
        this.sessionName = sessionName;
        return this;
    };
    CreateMatchSessionRequest.prototype.withSessionName = function (sessionName) {
        this.sessionName = sessionName;
        return this;
    };
    CreateMatchSessionRequest.prototype.getTtlSeconds = function () {
        return this.ttlSeconds;
    };
    CreateMatchSessionRequest.prototype.setTtlSeconds = function (ttlSeconds) {
        this.ttlSeconds = ttlSeconds;
        return this;
    };
    CreateMatchSessionRequest.prototype.withTtlSeconds = function (ttlSeconds) {
        this.ttlSeconds = ttlSeconds;
        return this;
    };
    CreateMatchSessionRequest.fromDict = function (data) {
        return new CreateMatchSessionRequest()
            .withNamespaceName(data["namespaceName"])
            .withSessionName(data["sessionName"])
            .withTtlSeconds(data["ttlSeconds"]);
    };
    CreateMatchSessionRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "sessionName": this.getSessionName(),
            "ttlSeconds": this.getTtlSeconds(),
        };
    };
    return CreateMatchSessionRequest;
}());
exports.default = CreateMatchSessionRequest;
//# sourceMappingURL=CreateMatchSessionRequest.js.map