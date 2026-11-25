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
var VerifyFriendCountByStampTaskRequest = /** @class */ (function () {
    function VerifyFriendCountByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    VerifyFriendCountByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyFriendCountByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyFriendCountByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyFriendCountByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyFriendCountByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyFriendCountByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyFriendCountByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    VerifyFriendCountByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyFriendCountByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyFriendCountByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    VerifyFriendCountByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyFriendCountByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyFriendCountByStampTaskRequest.fromDict = function (data) {
        return new VerifyFriendCountByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    VerifyFriendCountByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return VerifyFriendCountByStampTaskRequest;
}());
exports.default = VerifyFriendCountByStampTaskRequest;
//# sourceMappingURL=VerifyFriendCountByStampTaskRequest.js.map