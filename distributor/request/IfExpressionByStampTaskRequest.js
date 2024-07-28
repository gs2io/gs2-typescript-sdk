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
var IfExpressionByStampTaskRequest = /** @class */ (function () {
    function IfExpressionByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    IfExpressionByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    IfExpressionByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IfExpressionByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IfExpressionByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    IfExpressionByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IfExpressionByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IfExpressionByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    IfExpressionByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    IfExpressionByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    IfExpressionByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    IfExpressionByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    IfExpressionByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    IfExpressionByStampTaskRequest.fromDict = function (data) {
        return new IfExpressionByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    IfExpressionByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return IfExpressionByStampTaskRequest;
}());
exports.default = IfExpressionByStampTaskRequest;
//# sourceMappingURL=IfExpressionByStampTaskRequest.js.map