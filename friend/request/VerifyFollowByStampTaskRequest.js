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
var VerifyFollowByStampTaskRequest = /** @class */ (function () {
    function VerifyFollowByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    VerifyFollowByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyFollowByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyFollowByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyFollowByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyFollowByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyFollowByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyFollowByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    VerifyFollowByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyFollowByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyFollowByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    VerifyFollowByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyFollowByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyFollowByStampTaskRequest.fromDict = function (data) {
        return new VerifyFollowByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    VerifyFollowByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return VerifyFollowByStampTaskRequest;
}());
exports.default = VerifyFollowByStampTaskRequest;
//# sourceMappingURL=VerifyFollowByStampTaskRequest.js.map