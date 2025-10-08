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
var ConsumeSimpleItemsByStampTaskRequest = /** @class */ (function () {
    function ConsumeSimpleItemsByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    ConsumeSimpleItemsByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ConsumeSimpleItemsByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumeSimpleItemsByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumeSimpleItemsByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ConsumeSimpleItemsByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumeSimpleItemsByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumeSimpleItemsByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    ConsumeSimpleItemsByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    ConsumeSimpleItemsByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    ConsumeSimpleItemsByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    ConsumeSimpleItemsByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    ConsumeSimpleItemsByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    ConsumeSimpleItemsByStampTaskRequest.fromDict = function (data) {
        return new ConsumeSimpleItemsByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    ConsumeSimpleItemsByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return ConsumeSimpleItemsByStampTaskRequest;
}());
exports.default = ConsumeSimpleItemsByStampTaskRequest;
//# sourceMappingURL=ConsumeSimpleItemsByStampTaskRequest.js.map