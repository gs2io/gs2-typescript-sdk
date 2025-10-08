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
var DeleteMessageByStampTaskRequest = /** @class */ (function () {
    function DeleteMessageByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    DeleteMessageByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteMessageByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteMessageByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteMessageByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteMessageByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteMessageByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteMessageByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    DeleteMessageByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    DeleteMessageByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    DeleteMessageByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    DeleteMessageByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    DeleteMessageByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    DeleteMessageByStampTaskRequest.fromDict = function (data) {
        return new DeleteMessageByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    DeleteMessageByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return DeleteMessageByStampTaskRequest;
}());
exports.default = DeleteMessageByStampTaskRequest;
//# sourceMappingURL=DeleteMessageByStampTaskRequest.js.map