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
import * as Gs2Lottery from '../model';
var DrawByUserIdRequest = /** @class */ (function () {
    function DrawByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.lotteryName = null;
        this.userId = null;
        this.count = null;
        this.config = null;
    }
    DrawByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DrawByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DrawByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DrawByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DrawByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DrawByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DrawByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DrawByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DrawByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DrawByUserIdRequest.prototype.getLotteryName = function () {
        return this.lotteryName;
    };
    DrawByUserIdRequest.prototype.setLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    DrawByUserIdRequest.prototype.withLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    DrawByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DrawByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DrawByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DrawByUserIdRequest.prototype.getCount = function () {
        return this.count;
    };
    DrawByUserIdRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    DrawByUserIdRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    DrawByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    DrawByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    DrawByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    DrawByUserIdRequest.fromDict = function (data) {
        return new DrawByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withLotteryName(data["lotteryName"])
            .withUserId(data["userId"])
            .withCount(data["count"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Lottery.Config.fromDict(item);
            }) : []);
    };
    DrawByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "lotteryName": this.getLotteryName(),
            "userId": this.getUserId(),
            "count": this.getCount(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return DrawByUserIdRequest;
}());
export default DrawByUserIdRequest;
//# sourceMappingURL=DrawByUserIdRequest.js.map