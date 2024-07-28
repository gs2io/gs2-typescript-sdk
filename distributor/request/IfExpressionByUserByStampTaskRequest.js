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
var IfExpressionByUserByStampTaskRequest = /** @class */ (function () {
    function IfExpressionByUserByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    IfExpressionByUserByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    IfExpressionByUserByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IfExpressionByUserByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IfExpressionByUserByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    IfExpressionByUserByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IfExpressionByUserByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IfExpressionByUserByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    IfExpressionByUserByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    IfExpressionByUserByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    IfExpressionByUserByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    IfExpressionByUserByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    IfExpressionByUserByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    IfExpressionByUserByStampTaskRequest.fromDict = function (data) {
        return new IfExpressionByUserByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    IfExpressionByUserByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return IfExpressionByUserByStampTaskRequest;
}());
exports.default = IfExpressionByUserByStampTaskRequest;
//# sourceMappingURL=IfExpressionByUserByStampTaskRequest.js.map