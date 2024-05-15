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
var DecreaseMaximumCurrentMaximumMemberCountByStampTaskRequest = /** @class */ (function () {
    function DecreaseMaximumCurrentMaximumMemberCountByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    DecreaseMaximumCurrentMaximumMemberCountByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DecreaseMaximumCurrentMaximumMemberCountByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecreaseMaximumCurrentMaximumMemberCountByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecreaseMaximumCurrentMaximumMemberCountByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DecreaseMaximumCurrentMaximumMemberCountByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecreaseMaximumCurrentMaximumMemberCountByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecreaseMaximumCurrentMaximumMemberCountByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    DecreaseMaximumCurrentMaximumMemberCountByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    DecreaseMaximumCurrentMaximumMemberCountByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    DecreaseMaximumCurrentMaximumMemberCountByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    DecreaseMaximumCurrentMaximumMemberCountByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    DecreaseMaximumCurrentMaximumMemberCountByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    DecreaseMaximumCurrentMaximumMemberCountByStampTaskRequest.fromDict = function (data) {
        return new DecreaseMaximumCurrentMaximumMemberCountByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    DecreaseMaximumCurrentMaximumMemberCountByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return DecreaseMaximumCurrentMaximumMemberCountByStampTaskRequest;
}());
exports.default = DecreaseMaximumCurrentMaximumMemberCountByStampTaskRequest;
//# sourceMappingURL=DecreaseMaximumCurrentMaximumMemberCountByStampTaskRequest.js.map