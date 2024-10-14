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
var VerifyClusterRankingScoreByStampTaskRequest = /** @class */ (function () {
    function VerifyClusterRankingScoreByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    VerifyClusterRankingScoreByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyClusterRankingScoreByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyClusterRankingScoreByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyClusterRankingScoreByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyClusterRankingScoreByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyClusterRankingScoreByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyClusterRankingScoreByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    VerifyClusterRankingScoreByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyClusterRankingScoreByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyClusterRankingScoreByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    VerifyClusterRankingScoreByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyClusterRankingScoreByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyClusterRankingScoreByStampTaskRequest.fromDict = function (data) {
        return new VerifyClusterRankingScoreByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    VerifyClusterRankingScoreByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return VerifyClusterRankingScoreByStampTaskRequest;
}());
exports.default = VerifyClusterRankingScoreByStampTaskRequest;
//# sourceMappingURL=VerifyClusterRankingScoreByStampTaskRequest.js.map