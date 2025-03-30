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
var VerifyStaminaValueByStampTaskRequest = /** @class */ (function () {
    function VerifyStaminaValueByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    VerifyStaminaValueByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyStaminaValueByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStaminaValueByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStaminaValueByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyStaminaValueByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStaminaValueByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStaminaValueByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    VerifyStaminaValueByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyStaminaValueByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyStaminaValueByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    VerifyStaminaValueByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyStaminaValueByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyStaminaValueByStampTaskRequest.fromDict = function (data) {
        return new VerifyStaminaValueByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    VerifyStaminaValueByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return VerifyStaminaValueByStampTaskRequest;
}());
exports.default = VerifyStaminaValueByStampTaskRequest;
//# sourceMappingURL=VerifyStaminaValueByStampTaskRequest.js.map