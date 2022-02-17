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
var RecordReceiptByStampTaskRequest = /** @class */ (function () {
    function RecordReceiptByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    RecordReceiptByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RecordReceiptByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RecordReceiptByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RecordReceiptByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RecordReceiptByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RecordReceiptByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RecordReceiptByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    RecordReceiptByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    RecordReceiptByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    RecordReceiptByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    RecordReceiptByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    RecordReceiptByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    RecordReceiptByStampTaskRequest.fromDict = function (data) {
        return new RecordReceiptByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    RecordReceiptByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return RecordReceiptByStampTaskRequest;
}());
exports.default = RecordReceiptByStampTaskRequest;
//# sourceMappingURL=RecordReceiptByStampTaskRequest.js.map