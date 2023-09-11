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
var MarkRestrainByStampTaskRequest = /** @class */ (function () {
    function MarkRestrainByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    MarkRestrainByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    MarkRestrainByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    MarkRestrainByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    MarkRestrainByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    MarkRestrainByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    MarkRestrainByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    MarkRestrainByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    MarkRestrainByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    MarkRestrainByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    MarkRestrainByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    MarkRestrainByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    MarkRestrainByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    MarkRestrainByStampTaskRequest.fromDict = function (data) {
        return new MarkRestrainByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    MarkRestrainByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return MarkRestrainByStampTaskRequest;
}());
exports.default = MarkRestrainByStampTaskRequest;
//# sourceMappingURL=MarkRestrainByStampTaskRequest.js.map