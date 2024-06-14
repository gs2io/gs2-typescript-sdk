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
var VerifyIncludeParticipantByStampTaskRequest = /** @class */ (function () {
    function VerifyIncludeParticipantByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    VerifyIncludeParticipantByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyIncludeParticipantByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyIncludeParticipantByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyIncludeParticipantByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyIncludeParticipantByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyIncludeParticipantByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyIncludeParticipantByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    VerifyIncludeParticipantByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyIncludeParticipantByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyIncludeParticipantByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    VerifyIncludeParticipantByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyIncludeParticipantByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyIncludeParticipantByStampTaskRequest.fromDict = function (data) {
        return new VerifyIncludeParticipantByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    VerifyIncludeParticipantByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return VerifyIncludeParticipantByStampTaskRequest;
}());
exports.default = VerifyIncludeParticipantByStampTaskRequest;
//# sourceMappingURL=VerifyIncludeParticipantByStampTaskRequest.js.map