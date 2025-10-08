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
var RunVerifyTaskRequest = /** @class */ (function () {
    function RunVerifyTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.verifyTask = null;
        this.keyId = null;
    }
    RunVerifyTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RunVerifyTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RunVerifyTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RunVerifyTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RunVerifyTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunVerifyTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunVerifyTaskRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RunVerifyTaskRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RunVerifyTaskRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RunVerifyTaskRequest.prototype.getVerifyTask = function () {
        return this.verifyTask;
    };
    RunVerifyTaskRequest.prototype.setVerifyTask = function (verifyTask) {
        this.verifyTask = verifyTask;
        return this;
    };
    RunVerifyTaskRequest.prototype.withVerifyTask = function (verifyTask) {
        this.verifyTask = verifyTask;
        return this;
    };
    RunVerifyTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    RunVerifyTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    RunVerifyTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    RunVerifyTaskRequest.fromDict = function (data) {
        return new RunVerifyTaskRequest()
            .withNamespaceName(data["namespaceName"])
            .withVerifyTask(data["verifyTask"])
            .withKeyId(data["keyId"]);
    };
    RunVerifyTaskRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "verifyTask": this.getVerifyTask(),
            "keyId": this.getKeyId(),
        };
    };
    return RunVerifyTaskRequest;
}());
exports.default = RunVerifyTaskRequest;
//# sourceMappingURL=RunVerifyTaskRequest.js.map