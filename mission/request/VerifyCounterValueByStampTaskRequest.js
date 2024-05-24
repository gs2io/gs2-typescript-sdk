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
var VerifyCounterValueByStampTaskRequest = /** @class */ (function () {
    function VerifyCounterValueByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    VerifyCounterValueByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyCounterValueByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCounterValueByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCounterValueByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyCounterValueByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCounterValueByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCounterValueByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    VerifyCounterValueByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyCounterValueByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyCounterValueByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    VerifyCounterValueByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyCounterValueByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyCounterValueByStampTaskRequest.fromDict = function (data) {
        return new VerifyCounterValueByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    VerifyCounterValueByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return VerifyCounterValueByStampTaskRequest;
}());
exports.default = VerifyCounterValueByStampTaskRequest;
//# sourceMappingURL=VerifyCounterValueByStampTaskRequest.js.map