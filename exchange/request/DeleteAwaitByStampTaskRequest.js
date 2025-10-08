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
var DeleteAwaitByStampTaskRequest = /** @class */ (function () {
    function DeleteAwaitByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    DeleteAwaitByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteAwaitByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteAwaitByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteAwaitByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteAwaitByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteAwaitByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteAwaitByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    DeleteAwaitByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    DeleteAwaitByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    DeleteAwaitByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    DeleteAwaitByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    DeleteAwaitByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    DeleteAwaitByStampTaskRequest.fromDict = function (data) {
        return new DeleteAwaitByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    DeleteAwaitByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return DeleteAwaitByStampTaskRequest;
}());
exports.default = DeleteAwaitByStampTaskRequest;
//# sourceMappingURL=DeleteAwaitByStampTaskRequest.js.map