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
var RunVerifyTaskWithoutNamespaceRequest = /** @class */ (function () {
    function RunVerifyTaskWithoutNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.verifyTask = null;
        this.keyId = null;
    }
    RunVerifyTaskWithoutNamespaceRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RunVerifyTaskWithoutNamespaceRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RunVerifyTaskWithoutNamespaceRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RunVerifyTaskWithoutNamespaceRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RunVerifyTaskWithoutNamespaceRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunVerifyTaskWithoutNamespaceRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunVerifyTaskWithoutNamespaceRequest.prototype.getVerifyTask = function () {
        return this.verifyTask;
    };
    RunVerifyTaskWithoutNamespaceRequest.prototype.setVerifyTask = function (verifyTask) {
        this.verifyTask = verifyTask;
        return this;
    };
    RunVerifyTaskWithoutNamespaceRequest.prototype.withVerifyTask = function (verifyTask) {
        this.verifyTask = verifyTask;
        return this;
    };
    RunVerifyTaskWithoutNamespaceRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    RunVerifyTaskWithoutNamespaceRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    RunVerifyTaskWithoutNamespaceRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    RunVerifyTaskWithoutNamespaceRequest.fromDict = function (data) {
        return new RunVerifyTaskWithoutNamespaceRequest()
            .withVerifyTask(data["verifyTask"])
            .withKeyId(data["keyId"]);
    };
    RunVerifyTaskWithoutNamespaceRequest.prototype.toDict = function () {
        return {
            "verifyTask": this.getVerifyTask(),
            "keyId": this.getKeyId(),
        };
    };
    return RunVerifyTaskWithoutNamespaceRequest;
}());
exports.default = RunVerifyTaskWithoutNamespaceRequest;
//# sourceMappingURL=RunVerifyTaskWithoutNamespaceRequest.js.map