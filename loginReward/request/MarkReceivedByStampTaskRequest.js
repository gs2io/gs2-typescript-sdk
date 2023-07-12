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
var MarkReceivedByStampTaskRequest = /** @class */ (function () {
    function MarkReceivedByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    MarkReceivedByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    MarkReceivedByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    MarkReceivedByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    MarkReceivedByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    MarkReceivedByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    MarkReceivedByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    MarkReceivedByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    MarkReceivedByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    MarkReceivedByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    MarkReceivedByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    MarkReceivedByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    MarkReceivedByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    MarkReceivedByStampTaskRequest.fromDict = function (data) {
        return new MarkReceivedByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    MarkReceivedByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return MarkReceivedByStampTaskRequest;
}());
exports.default = MarkReceivedByStampTaskRequest;
//# sourceMappingURL=MarkReceivedByStampTaskRequest.js.map