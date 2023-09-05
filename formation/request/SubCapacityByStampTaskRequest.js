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
var SubCapacityByStampTaskRequest = /** @class */ (function () {
    function SubCapacityByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    SubCapacityByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SubCapacityByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubCapacityByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubCapacityByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SubCapacityByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubCapacityByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubCapacityByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    SubCapacityByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    SubCapacityByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    SubCapacityByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    SubCapacityByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SubCapacityByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SubCapacityByStampTaskRequest.fromDict = function (data) {
        return new SubCapacityByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    SubCapacityByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return SubCapacityByStampTaskRequest;
}());
exports.default = SubCapacityByStampTaskRequest;
//# sourceMappingURL=SubCapacityByStampTaskRequest.js.map