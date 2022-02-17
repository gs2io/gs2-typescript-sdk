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
import * as Gs2Quest from '../model';
var EndByUserIdRequest = /** @class */ (function () {
    function EndByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.transactionId = null;
        this.rewards = null;
        this.isComplete = null;
        this.config = null;
    }
    EndByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    EndByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    EndByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    EndByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    EndByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    EndByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    EndByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    EndByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    EndByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    EndByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    EndByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    EndByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    EndByUserIdRequest.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    EndByUserIdRequest.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    EndByUserIdRequest.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    EndByUserIdRequest.prototype.getRewards = function () {
        return this.rewards;
    };
    EndByUserIdRequest.prototype.setRewards = function (rewards) {
        this.rewards = rewards;
        return this;
    };
    EndByUserIdRequest.prototype.withRewards = function (rewards) {
        this.rewards = rewards;
        return this;
    };
    EndByUserIdRequest.prototype.getIsComplete = function () {
        return this.isComplete;
    };
    EndByUserIdRequest.prototype.setIsComplete = function (isComplete) {
        this.isComplete = isComplete;
        return this;
    };
    EndByUserIdRequest.prototype.withIsComplete = function (isComplete) {
        this.isComplete = isComplete;
        return this;
    };
    EndByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    EndByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    EndByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    EndByUserIdRequest.fromDict = function (data) {
        return new EndByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTransactionId(data["transactionId"])
            .withRewards(data.rewards ?
            data.rewards.map(function (item) {
                return Gs2Quest.Reward.fromDict(item);
            }) : [])
            .withIsComplete(data["isComplete"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Quest.Config.fromDict(item);
            }) : []);
    };
    EndByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "transactionId": this.getTransactionId(),
            "rewards": this.getRewards() ?
                this.getRewards().map(function (item) {
                    return item.toDict();
                }) : [],
            "isComplete": this.getIsComplete(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return EndByUserIdRequest;
}());
export default EndByUserIdRequest;
//# sourceMappingURL=EndByUserIdRequest.js.map