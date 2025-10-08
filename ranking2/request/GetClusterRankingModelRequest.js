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
var GetClusterRankingModelRequest = /** @class */ (function () {
    function GetClusterRankingModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
    }
    GetClusterRankingModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetClusterRankingModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetClusterRankingModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetClusterRankingModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetClusterRankingModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetClusterRankingModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetClusterRankingModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetClusterRankingModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetClusterRankingModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetClusterRankingModelRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    GetClusterRankingModelRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetClusterRankingModelRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetClusterRankingModelRequest.fromDict = function (data) {
        return new GetClusterRankingModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"]);
    };
    GetClusterRankingModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
        };
    };
    return GetClusterRankingModelRequest;
}());
exports.default = GetClusterRankingModelRequest;
//# sourceMappingURL=GetClusterRankingModelRequest.js.map