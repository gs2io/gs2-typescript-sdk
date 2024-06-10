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
var GetGlobalRankingModelRequest = /** @class */ (function () {
    function GetGlobalRankingModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
    }
    GetGlobalRankingModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetGlobalRankingModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGlobalRankingModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGlobalRankingModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetGlobalRankingModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGlobalRankingModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGlobalRankingModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetGlobalRankingModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGlobalRankingModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGlobalRankingModelRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    GetGlobalRankingModelRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetGlobalRankingModelRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetGlobalRankingModelRequest.fromDict = function (data) {
        return new GetGlobalRankingModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"]);
    };
    GetGlobalRankingModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
        };
    };
    return GetGlobalRankingModelRequest;
}());
exports.default = GetGlobalRankingModelRequest;
//# sourceMappingURL=GetGlobalRankingModelRequest.js.map