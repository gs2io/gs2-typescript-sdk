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
var tslib_1 = require("tslib");
var Gs2Ranking2 = tslib_1.__importStar(require("../model"));
var CreateClusterRankingReceivedRewardByStampTaskResult = /** @class */ (function () {
    function CreateClusterRankingReceivedRewardByStampTaskResult() {
        this.item = null;
        this.newContextStack = null;
    }
    CreateClusterRankingReceivedRewardByStampTaskResult.prototype.getItem = function () {
        return this.item;
    };
    CreateClusterRankingReceivedRewardByStampTaskResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    CreateClusterRankingReceivedRewardByStampTaskResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    CreateClusterRankingReceivedRewardByStampTaskResult.prototype.getNewContextStack = function () {
        return this.newContextStack;
    };
    CreateClusterRankingReceivedRewardByStampTaskResult.prototype.setNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    CreateClusterRankingReceivedRewardByStampTaskResult.prototype.withNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    CreateClusterRankingReceivedRewardByStampTaskResult.fromDict = function (data) {
        return new CreateClusterRankingReceivedRewardByStampTaskResult()
            .withItem(Gs2Ranking2.ClusterRankingReceivedReward.fromDict(data["item"]))
            .withNewContextStack(data["newContextStack"]);
    };
    CreateClusterRankingReceivedRewardByStampTaskResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "newContextStack": this.getNewContextStack(),
        };
    };
    return CreateClusterRankingReceivedRewardByStampTaskResult;
}());
exports.default = CreateClusterRankingReceivedRewardByStampTaskResult;
//# sourceMappingURL=CreateClusterRankingReceivedRewardByStampTaskResult.js.map