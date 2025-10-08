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
var ConsumeBigItemByStampTaskRequest = /** @class */ (function () {
    function ConsumeBigItemByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    ConsumeBigItemByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ConsumeBigItemByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumeBigItemByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumeBigItemByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ConsumeBigItemByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumeBigItemByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumeBigItemByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    ConsumeBigItemByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    ConsumeBigItemByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    ConsumeBigItemByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    ConsumeBigItemByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    ConsumeBigItemByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    ConsumeBigItemByStampTaskRequest.fromDict = function (data) {
        return new ConsumeBigItemByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    ConsumeBigItemByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return ConsumeBigItemByStampTaskRequest;
}());
exports.default = ConsumeBigItemByStampTaskRequest;
//# sourceMappingURL=ConsumeBigItemByStampTaskRequest.js.map