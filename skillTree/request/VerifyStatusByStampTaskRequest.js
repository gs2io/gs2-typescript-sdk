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
var VerifyStatusByStampTaskRequest = /** @class */ (function () {
    function VerifyStatusByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    VerifyStatusByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyStatusByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStatusByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStatusByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyStatusByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStatusByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStatusByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    VerifyStatusByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyStatusByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyStatusByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    VerifyStatusByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyStatusByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyStatusByStampTaskRequest.fromDict = function (data) {
        return new VerifyStatusByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    VerifyStatusByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return VerifyStatusByStampTaskRequest;
}());
exports.default = VerifyStatusByStampTaskRequest;
//# sourceMappingURL=VerifyStatusByStampTaskRequest.js.map