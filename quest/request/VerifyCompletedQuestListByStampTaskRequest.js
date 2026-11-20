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
var VerifyCompletedQuestListByStampTaskRequest = /** @class */ (function () {
    function VerifyCompletedQuestListByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    VerifyCompletedQuestListByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyCompletedQuestListByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCompletedQuestListByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCompletedQuestListByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyCompletedQuestListByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCompletedQuestListByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCompletedQuestListByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    VerifyCompletedQuestListByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyCompletedQuestListByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyCompletedQuestListByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    VerifyCompletedQuestListByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyCompletedQuestListByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyCompletedQuestListByStampTaskRequest.fromDict = function (data) {
        return new VerifyCompletedQuestListByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    VerifyCompletedQuestListByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return VerifyCompletedQuestListByStampTaskRequest;
}());
exports.default = VerifyCompletedQuestListByStampTaskRequest;
//# sourceMappingURL=VerifyCompletedQuestListByStampTaskRequest.js.map