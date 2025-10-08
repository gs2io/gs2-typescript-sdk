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
var GetClusterRankingModelMasterRequest = /** @class */ (function () {
    function GetClusterRankingModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
    }
    GetClusterRankingModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetClusterRankingModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetClusterRankingModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetClusterRankingModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetClusterRankingModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetClusterRankingModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetClusterRankingModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetClusterRankingModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetClusterRankingModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetClusterRankingModelMasterRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    GetClusterRankingModelMasterRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetClusterRankingModelMasterRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetClusterRankingModelMasterRequest.fromDict = function (data) {
        return new GetClusterRankingModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"]);
    };
    GetClusterRankingModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
        };
    };
    return GetClusterRankingModelMasterRequest;
}());
exports.default = GetClusterRankingModelMasterRequest;
//# sourceMappingURL=GetClusterRankingModelMasterRequest.js.map