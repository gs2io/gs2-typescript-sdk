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
var GetSubscribeRankingModelRequest = /** @class */ (function () {
    function GetSubscribeRankingModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
    }
    GetSubscribeRankingModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetSubscribeRankingModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSubscribeRankingModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSubscribeRankingModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetSubscribeRankingModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSubscribeRankingModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSubscribeRankingModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetSubscribeRankingModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSubscribeRankingModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSubscribeRankingModelRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    GetSubscribeRankingModelRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetSubscribeRankingModelRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetSubscribeRankingModelRequest.fromDict = function (data) {
        return new GetSubscribeRankingModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"]);
    };
    GetSubscribeRankingModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
        };
    };
    return GetSubscribeRankingModelRequest;
}());
exports.default = GetSubscribeRankingModelRequest;
//# sourceMappingURL=GetSubscribeRankingModelRequest.js.map