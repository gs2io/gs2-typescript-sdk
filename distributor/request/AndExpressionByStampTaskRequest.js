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
var AndExpressionByStampTaskRequest = /** @class */ (function () {
    function AndExpressionByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    AndExpressionByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AndExpressionByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AndExpressionByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AndExpressionByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AndExpressionByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AndExpressionByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AndExpressionByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    AndExpressionByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    AndExpressionByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    AndExpressionByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    AndExpressionByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AndExpressionByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AndExpressionByStampTaskRequest.fromDict = function (data) {
        return new AndExpressionByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    AndExpressionByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return AndExpressionByStampTaskRequest;
}());
exports.default = AndExpressionByStampTaskRequest;
//# sourceMappingURL=AndExpressionByStampTaskRequest.js.map