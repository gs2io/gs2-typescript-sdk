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
var VerifySimpleItemByStampTaskRequest = /** @class */ (function () {
    function VerifySimpleItemByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    VerifySimpleItemByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifySimpleItemByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifySimpleItemByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifySimpleItemByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifySimpleItemByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifySimpleItemByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifySimpleItemByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    VerifySimpleItemByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifySimpleItemByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifySimpleItemByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    VerifySimpleItemByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifySimpleItemByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifySimpleItemByStampTaskRequest.fromDict = function (data) {
        return new VerifySimpleItemByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    VerifySimpleItemByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return VerifySimpleItemByStampTaskRequest;
}());
exports.default = VerifySimpleItemByStampTaskRequest;
//# sourceMappingURL=VerifySimpleItemByStampTaskRequest.js.map