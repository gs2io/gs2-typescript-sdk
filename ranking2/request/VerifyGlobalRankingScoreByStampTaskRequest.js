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
var VerifyGlobalRankingScoreByStampTaskRequest = /** @class */ (function () {
    function VerifyGlobalRankingScoreByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    VerifyGlobalRankingScoreByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyGlobalRankingScoreByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyGlobalRankingScoreByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyGlobalRankingScoreByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyGlobalRankingScoreByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyGlobalRankingScoreByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyGlobalRankingScoreByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    VerifyGlobalRankingScoreByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyGlobalRankingScoreByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyGlobalRankingScoreByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    VerifyGlobalRankingScoreByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyGlobalRankingScoreByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyGlobalRankingScoreByStampTaskRequest.fromDict = function (data) {
        return new VerifyGlobalRankingScoreByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    VerifyGlobalRankingScoreByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return VerifyGlobalRankingScoreByStampTaskRequest;
}());
exports.default = VerifyGlobalRankingScoreByStampTaskRequest;
//# sourceMappingURL=VerifyGlobalRankingScoreByStampTaskRequest.js.map