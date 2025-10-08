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
var VerifyStaminaRecoverIntervalMinutesByStampTaskRequest = /** @class */ (function () {
    function VerifyStaminaRecoverIntervalMinutesByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    VerifyStaminaRecoverIntervalMinutesByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyStaminaRecoverIntervalMinutesByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyStaminaRecoverIntervalMinutesByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    VerifyStaminaRecoverIntervalMinutesByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    VerifyStaminaRecoverIntervalMinutesByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByStampTaskRequest.fromDict = function (data) {
        return new VerifyStaminaRecoverIntervalMinutesByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    VerifyStaminaRecoverIntervalMinutesByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return VerifyStaminaRecoverIntervalMinutesByStampTaskRequest;
}());
exports.default = VerifyStaminaRecoverIntervalMinutesByStampTaskRequest;
//# sourceMappingURL=VerifyStaminaRecoverIntervalMinutesByStampTaskRequest.js.map