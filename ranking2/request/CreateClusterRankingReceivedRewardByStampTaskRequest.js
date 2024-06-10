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
var CreateClusterRankingReceivedRewardByStampTaskRequest = /** @class */ (function () {
    function CreateClusterRankingReceivedRewardByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    CreateClusterRankingReceivedRewardByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateClusterRankingReceivedRewardByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateClusterRankingReceivedRewardByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateClusterRankingReceivedRewardByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateClusterRankingReceivedRewardByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateClusterRankingReceivedRewardByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateClusterRankingReceivedRewardByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    CreateClusterRankingReceivedRewardByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    CreateClusterRankingReceivedRewardByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    CreateClusterRankingReceivedRewardByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    CreateClusterRankingReceivedRewardByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    CreateClusterRankingReceivedRewardByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    CreateClusterRankingReceivedRewardByStampTaskRequest.fromDict = function (data) {
        return new CreateClusterRankingReceivedRewardByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    CreateClusterRankingReceivedRewardByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return CreateClusterRankingReceivedRewardByStampTaskRequest;
}());
exports.default = CreateClusterRankingReceivedRewardByStampTaskRequest;
//# sourceMappingURL=CreateClusterRankingReceivedRewardByStampTaskRequest.js.map