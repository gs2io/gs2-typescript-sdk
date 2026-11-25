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
var VerifyEntryCountByStampTaskRequest = /** @class */ (function () {
    function VerifyEntryCountByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    VerifyEntryCountByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyEntryCountByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyEntryCountByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyEntryCountByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyEntryCountByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyEntryCountByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyEntryCountByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    VerifyEntryCountByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyEntryCountByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyEntryCountByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    VerifyEntryCountByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyEntryCountByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyEntryCountByStampTaskRequest.fromDict = function (data) {
        return new VerifyEntryCountByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    VerifyEntryCountByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return VerifyEntryCountByStampTaskRequest;
}());
exports.default = VerifyEntryCountByStampTaskRequest;
//# sourceMappingURL=VerifyEntryCountByStampTaskRequest.js.map