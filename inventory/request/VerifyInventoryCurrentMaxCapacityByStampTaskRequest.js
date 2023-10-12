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
var VerifyInventoryCurrentMaxCapacityByStampTaskRequest = /** @class */ (function () {
    function VerifyInventoryCurrentMaxCapacityByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    VerifyInventoryCurrentMaxCapacityByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyInventoryCurrentMaxCapacityByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyInventoryCurrentMaxCapacityByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    VerifyInventoryCurrentMaxCapacityByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    VerifyInventoryCurrentMaxCapacityByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityByStampTaskRequest.fromDict = function (data) {
        return new VerifyInventoryCurrentMaxCapacityByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    VerifyInventoryCurrentMaxCapacityByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return VerifyInventoryCurrentMaxCapacityByStampTaskRequest;
}());
exports.default = VerifyInventoryCurrentMaxCapacityByStampTaskRequest;
//# sourceMappingURL=VerifyInventoryCurrentMaxCapacityByStampTaskRequest.js.map