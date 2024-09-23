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
var BatchReceiveByStampTaskRequest = /** @class */ (function () {
    function BatchReceiveByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    BatchReceiveByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    BatchReceiveByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BatchReceiveByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BatchReceiveByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    BatchReceiveByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    BatchReceiveByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    BatchReceiveByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    BatchReceiveByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    BatchReceiveByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    BatchReceiveByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    BatchReceiveByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    BatchReceiveByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    BatchReceiveByStampTaskRequest.fromDict = function (data) {
        return new BatchReceiveByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    BatchReceiveByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return BatchReceiveByStampTaskRequest;
}());
exports.default = BatchReceiveByStampTaskRequest;
//# sourceMappingURL=BatchReceiveByStampTaskRequest.js.map