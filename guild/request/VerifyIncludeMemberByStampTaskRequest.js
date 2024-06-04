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
var VerifyIncludeMemberByStampTaskRequest = /** @class */ (function () {
    function VerifyIncludeMemberByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    VerifyIncludeMemberByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyIncludeMemberByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyIncludeMemberByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyIncludeMemberByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyIncludeMemberByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyIncludeMemberByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyIncludeMemberByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    VerifyIncludeMemberByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyIncludeMemberByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyIncludeMemberByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    VerifyIncludeMemberByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyIncludeMemberByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyIncludeMemberByStampTaskRequest.fromDict = function (data) {
        return new VerifyIncludeMemberByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    VerifyIncludeMemberByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return VerifyIncludeMemberByStampTaskRequest;
}());
exports.default = VerifyIncludeMemberByStampTaskRequest;
//# sourceMappingURL=VerifyIncludeMemberByStampTaskRequest.js.map