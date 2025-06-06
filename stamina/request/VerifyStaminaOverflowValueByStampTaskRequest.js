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
var VerifyStaminaOverflowValueByStampTaskRequest = /** @class */ (function () {
    function VerifyStaminaOverflowValueByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    VerifyStaminaOverflowValueByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyStaminaOverflowValueByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStaminaOverflowValueByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStaminaOverflowValueByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyStaminaOverflowValueByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStaminaOverflowValueByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStaminaOverflowValueByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    VerifyStaminaOverflowValueByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyStaminaOverflowValueByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyStaminaOverflowValueByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    VerifyStaminaOverflowValueByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyStaminaOverflowValueByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyStaminaOverflowValueByStampTaskRequest.fromDict = function (data) {
        return new VerifyStaminaOverflowValueByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    VerifyStaminaOverflowValueByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return VerifyStaminaOverflowValueByStampTaskRequest;
}());
exports.default = VerifyStaminaOverflowValueByStampTaskRequest;
//# sourceMappingURL=VerifyStaminaOverflowValueByStampTaskRequest.js.map