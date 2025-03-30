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
var VerifyStaminaRecoverValueByStampTaskRequest = /** @class */ (function () {
    function VerifyStaminaRecoverValueByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    VerifyStaminaRecoverValueByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyStaminaRecoverValueByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStaminaRecoverValueByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStaminaRecoverValueByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyStaminaRecoverValueByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStaminaRecoverValueByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStaminaRecoverValueByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    VerifyStaminaRecoverValueByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyStaminaRecoverValueByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyStaminaRecoverValueByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    VerifyStaminaRecoverValueByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyStaminaRecoverValueByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyStaminaRecoverValueByStampTaskRequest.fromDict = function (data) {
        return new VerifyStaminaRecoverValueByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    VerifyStaminaRecoverValueByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return VerifyStaminaRecoverValueByStampTaskRequest;
}());
exports.default = VerifyStaminaRecoverValueByStampTaskRequest;
//# sourceMappingURL=VerifyStaminaRecoverValueByStampTaskRequest.js.map