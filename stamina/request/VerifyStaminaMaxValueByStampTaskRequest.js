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
var VerifyStaminaMaxValueByStampTaskRequest = /** @class */ (function () {
    function VerifyStaminaMaxValueByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    VerifyStaminaMaxValueByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyStaminaMaxValueByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStaminaMaxValueByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStaminaMaxValueByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyStaminaMaxValueByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStaminaMaxValueByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStaminaMaxValueByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    VerifyStaminaMaxValueByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyStaminaMaxValueByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyStaminaMaxValueByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    VerifyStaminaMaxValueByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyStaminaMaxValueByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyStaminaMaxValueByStampTaskRequest.fromDict = function (data) {
        return new VerifyStaminaMaxValueByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    VerifyStaminaMaxValueByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return VerifyStaminaMaxValueByStampTaskRequest;
}());
exports.default = VerifyStaminaMaxValueByStampTaskRequest;
//# sourceMappingURL=VerifyStaminaMaxValueByStampTaskRequest.js.map