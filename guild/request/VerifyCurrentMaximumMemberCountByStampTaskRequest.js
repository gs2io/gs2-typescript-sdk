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
var VerifyCurrentMaximumMemberCountByStampTaskRequest = /** @class */ (function () {
    function VerifyCurrentMaximumMemberCountByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    VerifyCurrentMaximumMemberCountByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyCurrentMaximumMemberCountByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCurrentMaximumMemberCountByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCurrentMaximumMemberCountByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyCurrentMaximumMemberCountByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCurrentMaximumMemberCountByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCurrentMaximumMemberCountByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    VerifyCurrentMaximumMemberCountByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyCurrentMaximumMemberCountByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyCurrentMaximumMemberCountByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    VerifyCurrentMaximumMemberCountByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyCurrentMaximumMemberCountByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyCurrentMaximumMemberCountByStampTaskRequest.fromDict = function (data) {
        return new VerifyCurrentMaximumMemberCountByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    VerifyCurrentMaximumMemberCountByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return VerifyCurrentMaximumMemberCountByStampTaskRequest;
}());
exports.default = VerifyCurrentMaximumMemberCountByStampTaskRequest;
//# sourceMappingURL=VerifyCurrentMaximumMemberCountByStampTaskRequest.js.map