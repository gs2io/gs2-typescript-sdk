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
var GetGlobalRankingModelMasterRequest = /** @class */ (function () {
    function GetGlobalRankingModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
    }
    GetGlobalRankingModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetGlobalRankingModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGlobalRankingModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGlobalRankingModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetGlobalRankingModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGlobalRankingModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGlobalRankingModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetGlobalRankingModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGlobalRankingModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGlobalRankingModelMasterRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    GetGlobalRankingModelMasterRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetGlobalRankingModelMasterRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetGlobalRankingModelMasterRequest.fromDict = function (data) {
        return new GetGlobalRankingModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"]);
    };
    GetGlobalRankingModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
        };
    };
    return GetGlobalRankingModelMasterRequest;
}());
exports.default = GetGlobalRankingModelMasterRequest;
//# sourceMappingURL=GetGlobalRankingModelMasterRequest.js.map