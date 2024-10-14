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
var VerifySubscribeRankingScoreByStampTaskRequest = /** @class */ (function () {
    function VerifySubscribeRankingScoreByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    VerifySubscribeRankingScoreByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifySubscribeRankingScoreByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifySubscribeRankingScoreByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifySubscribeRankingScoreByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifySubscribeRankingScoreByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifySubscribeRankingScoreByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifySubscribeRankingScoreByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    VerifySubscribeRankingScoreByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifySubscribeRankingScoreByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifySubscribeRankingScoreByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    VerifySubscribeRankingScoreByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifySubscribeRankingScoreByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifySubscribeRankingScoreByStampTaskRequest.fromDict = function (data) {
        return new VerifySubscribeRankingScoreByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    VerifySubscribeRankingScoreByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return VerifySubscribeRankingScoreByStampTaskRequest;
}());
exports.default = VerifySubscribeRankingScoreByStampTaskRequest;
//# sourceMappingURL=VerifySubscribeRankingScoreByStampTaskRequest.js.map