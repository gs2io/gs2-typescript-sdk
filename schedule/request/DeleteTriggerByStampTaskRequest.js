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
var DeleteTriggerByStampTaskRequest = /** @class */ (function () {
    function DeleteTriggerByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    DeleteTriggerByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteTriggerByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteTriggerByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteTriggerByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteTriggerByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteTriggerByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteTriggerByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    DeleteTriggerByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    DeleteTriggerByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    DeleteTriggerByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    DeleteTriggerByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    DeleteTriggerByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    DeleteTriggerByStampTaskRequest.fromDict = function (data) {
        return new DeleteTriggerByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    DeleteTriggerByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return DeleteTriggerByStampTaskRequest;
}());
exports.default = DeleteTriggerByStampTaskRequest;
//# sourceMappingURL=DeleteTriggerByStampTaskRequest.js.map