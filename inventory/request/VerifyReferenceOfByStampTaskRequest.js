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
var VerifyReferenceOfByStampTaskRequest = /** @class */ (function () {
    function VerifyReferenceOfByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    VerifyReferenceOfByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyReferenceOfByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyReferenceOfByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyReferenceOfByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyReferenceOfByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyReferenceOfByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyReferenceOfByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    VerifyReferenceOfByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyReferenceOfByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyReferenceOfByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    VerifyReferenceOfByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyReferenceOfByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyReferenceOfByStampTaskRequest.fromDict = function (data) {
        return new VerifyReferenceOfByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    VerifyReferenceOfByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return VerifyReferenceOfByStampTaskRequest;
}());
exports.default = VerifyReferenceOfByStampTaskRequest;
//# sourceMappingURL=VerifyReferenceOfByStampTaskRequest.js.map