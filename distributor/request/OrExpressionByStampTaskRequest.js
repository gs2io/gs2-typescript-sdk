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
var OrExpressionByStampTaskRequest = /** @class */ (function () {
    function OrExpressionByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    OrExpressionByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    OrExpressionByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    OrExpressionByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    OrExpressionByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    OrExpressionByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    OrExpressionByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    OrExpressionByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    OrExpressionByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    OrExpressionByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    OrExpressionByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    OrExpressionByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    OrExpressionByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    OrExpressionByStampTaskRequest.fromDict = function (data) {
        return new OrExpressionByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    OrExpressionByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return OrExpressionByStampTaskRequest;
}());
exports.default = OrExpressionByStampTaskRequest;
//# sourceMappingURL=OrExpressionByStampTaskRequest.js.map