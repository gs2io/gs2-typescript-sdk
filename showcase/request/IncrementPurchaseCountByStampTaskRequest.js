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
var IncrementPurchaseCountByStampTaskRequest = /** @class */ (function () {
    function IncrementPurchaseCountByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    IncrementPurchaseCountByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    IncrementPurchaseCountByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IncrementPurchaseCountByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IncrementPurchaseCountByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    IncrementPurchaseCountByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IncrementPurchaseCountByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IncrementPurchaseCountByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    IncrementPurchaseCountByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    IncrementPurchaseCountByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    IncrementPurchaseCountByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    IncrementPurchaseCountByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    IncrementPurchaseCountByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    IncrementPurchaseCountByStampTaskRequest.fromDict = function (data) {
        return new IncrementPurchaseCountByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    IncrementPurchaseCountByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return IncrementPurchaseCountByStampTaskRequest;
}());
exports.default = IncrementPurchaseCountByStampTaskRequest;
//# sourceMappingURL=IncrementPurchaseCountByStampTaskRequest.js.map