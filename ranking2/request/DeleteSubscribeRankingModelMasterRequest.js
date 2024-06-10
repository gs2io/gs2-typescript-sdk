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
var DeleteSubscribeRankingModelMasterRequest = /** @class */ (function () {
    function DeleteSubscribeRankingModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
    }
    DeleteSubscribeRankingModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteSubscribeRankingModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteSubscribeRankingModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteSubscribeRankingModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteSubscribeRankingModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteSubscribeRankingModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteSubscribeRankingModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteSubscribeRankingModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteSubscribeRankingModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteSubscribeRankingModelMasterRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    DeleteSubscribeRankingModelMasterRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DeleteSubscribeRankingModelMasterRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DeleteSubscribeRankingModelMasterRequest.fromDict = function (data) {
        return new DeleteSubscribeRankingModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"]);
    };
    DeleteSubscribeRankingModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
        };
    };
    return DeleteSubscribeRankingModelMasterRequest;
}());
exports.default = DeleteSubscribeRankingModelMasterRequest;
//# sourceMappingURL=DeleteSubscribeRankingModelMasterRequest.js.map