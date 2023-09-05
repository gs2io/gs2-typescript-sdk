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
var DecreaseMaximumIdleMinutesByStampTaskRequest = /** @class */ (function () {
    function DecreaseMaximumIdleMinutesByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    DecreaseMaximumIdleMinutesByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DecreaseMaximumIdleMinutesByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecreaseMaximumIdleMinutesByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecreaseMaximumIdleMinutesByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DecreaseMaximumIdleMinutesByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecreaseMaximumIdleMinutesByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecreaseMaximumIdleMinutesByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    DecreaseMaximumIdleMinutesByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    DecreaseMaximumIdleMinutesByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    DecreaseMaximumIdleMinutesByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    DecreaseMaximumIdleMinutesByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    DecreaseMaximumIdleMinutesByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    DecreaseMaximumIdleMinutesByStampTaskRequest.fromDict = function (data) {
        return new DecreaseMaximumIdleMinutesByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    DecreaseMaximumIdleMinutesByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return DecreaseMaximumIdleMinutesByStampTaskRequest;
}());
exports.default = DecreaseMaximumIdleMinutesByStampTaskRequest;
//# sourceMappingURL=DecreaseMaximumIdleMinutesByStampTaskRequest.js.map