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
var AndExpressionByUserByStampTaskRequest = /** @class */ (function () {
    function AndExpressionByUserByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    AndExpressionByUserByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AndExpressionByUserByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AndExpressionByUserByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AndExpressionByUserByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AndExpressionByUserByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AndExpressionByUserByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AndExpressionByUserByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    AndExpressionByUserByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    AndExpressionByUserByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    AndExpressionByUserByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    AndExpressionByUserByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AndExpressionByUserByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AndExpressionByUserByStampTaskRequest.fromDict = function (data) {
        return new AndExpressionByUserByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    AndExpressionByUserByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return AndExpressionByUserByStampTaskRequest;
}());
exports.default = AndExpressionByUserByStampTaskRequest;
//# sourceMappingURL=AndExpressionByUserByStampTaskRequest.js.map