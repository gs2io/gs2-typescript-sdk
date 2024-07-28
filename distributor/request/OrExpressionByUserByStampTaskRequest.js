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
var OrExpressionByUserByStampTaskRequest = /** @class */ (function () {
    function OrExpressionByUserByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    OrExpressionByUserByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    OrExpressionByUserByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    OrExpressionByUserByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    OrExpressionByUserByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    OrExpressionByUserByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    OrExpressionByUserByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    OrExpressionByUserByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    OrExpressionByUserByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    OrExpressionByUserByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    OrExpressionByUserByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    OrExpressionByUserByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    OrExpressionByUserByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    OrExpressionByUserByStampTaskRequest.fromDict = function (data) {
        return new OrExpressionByUserByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    OrExpressionByUserByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return OrExpressionByUserByStampTaskRequest;
}());
exports.default = OrExpressionByUserByStampTaskRequest;
//# sourceMappingURL=OrExpressionByUserByStampTaskRequest.js.map