"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = exports.AcquireAction = exports.GitHubCheckoutSetting = exports.LogSetting = exports.TransactionSetting = exports.RankingReward = exports.SubscribeUser = exports.CurrentRankingMaster = exports.SubscribeRankingData = exports.SubscribeRankingScore = exports.Subscribe = exports.SubscribeRankingModelMaster = exports.SubscribeRankingModel = exports.ClusterRankingData = exports.ClusterRankingReceivedReward = exports.ClusterRankingScore = exports.ClusterRankingModelMaster = exports.ClusterRankingModel = exports.GlobalRankingData = exports.GlobalRankingReceivedReward = exports.GlobalRankingScore = exports.GlobalRankingModelMaster = exports.GlobalRankingModel = exports.Namespace = void 0;
var tslib_1 = require("tslib");
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
var Namespace_1 = tslib_1.__importDefault(require("./Namespace"));
exports.Namespace = Namespace_1.default;
var GlobalRankingModel_1 = tslib_1.__importDefault(require("./GlobalRankingModel"));
exports.GlobalRankingModel = GlobalRankingModel_1.default;
var GlobalRankingModelMaster_1 = tslib_1.__importDefault(require("./GlobalRankingModelMaster"));
exports.GlobalRankingModelMaster = GlobalRankingModelMaster_1.default;
var GlobalRankingScore_1 = tslib_1.__importDefault(require("./GlobalRankingScore"));
exports.GlobalRankingScore = GlobalRankingScore_1.default;
var GlobalRankingReceivedReward_1 = tslib_1.__importDefault(require("./GlobalRankingReceivedReward"));
exports.GlobalRankingReceivedReward = GlobalRankingReceivedReward_1.default;
var GlobalRankingData_1 = tslib_1.__importDefault(require("./GlobalRankingData"));
exports.GlobalRankingData = GlobalRankingData_1.default;
var ClusterRankingModel_1 = tslib_1.__importDefault(require("./ClusterRankingModel"));
exports.ClusterRankingModel = ClusterRankingModel_1.default;
var ClusterRankingModelMaster_1 = tslib_1.__importDefault(require("./ClusterRankingModelMaster"));
exports.ClusterRankingModelMaster = ClusterRankingModelMaster_1.default;
var ClusterRankingScore_1 = tslib_1.__importDefault(require("./ClusterRankingScore"));
exports.ClusterRankingScore = ClusterRankingScore_1.default;
var ClusterRankingReceivedReward_1 = tslib_1.__importDefault(require("./ClusterRankingReceivedReward"));
exports.ClusterRankingReceivedReward = ClusterRankingReceivedReward_1.default;
var ClusterRankingData_1 = tslib_1.__importDefault(require("./ClusterRankingData"));
exports.ClusterRankingData = ClusterRankingData_1.default;
var SubscribeRankingModel_1 = tslib_1.__importDefault(require("./SubscribeRankingModel"));
exports.SubscribeRankingModel = SubscribeRankingModel_1.default;
var SubscribeRankingModelMaster_1 = tslib_1.__importDefault(require("./SubscribeRankingModelMaster"));
exports.SubscribeRankingModelMaster = SubscribeRankingModelMaster_1.default;
var Subscribe_1 = tslib_1.__importDefault(require("./Subscribe"));
exports.Subscribe = Subscribe_1.default;
var SubscribeRankingScore_1 = tslib_1.__importDefault(require("./SubscribeRankingScore"));
exports.SubscribeRankingScore = SubscribeRankingScore_1.default;
var SubscribeRankingData_1 = tslib_1.__importDefault(require("./SubscribeRankingData"));
exports.SubscribeRankingData = SubscribeRankingData_1.default;
var CurrentRankingMaster_1 = tslib_1.__importDefault(require("./CurrentRankingMaster"));
exports.CurrentRankingMaster = CurrentRankingMaster_1.default;
var SubscribeUser_1 = tslib_1.__importDefault(require("./SubscribeUser"));
exports.SubscribeUser = SubscribeUser_1.default;
var RankingReward_1 = tslib_1.__importDefault(require("./RankingReward"));
exports.RankingReward = RankingReward_1.default;
var TransactionSetting_1 = tslib_1.__importDefault(require("./TransactionSetting"));
exports.TransactionSetting = TransactionSetting_1.default;
var LogSetting_1 = tslib_1.__importDefault(require("./LogSetting"));
exports.LogSetting = LogSetting_1.default;
var GitHubCheckoutSetting_1 = tslib_1.__importDefault(require("./GitHubCheckoutSetting"));
exports.GitHubCheckoutSetting = GitHubCheckoutSetting_1.default;
var AcquireAction_1 = tslib_1.__importDefault(require("./AcquireAction"));
exports.AcquireAction = AcquireAction_1.default;
var Config_1 = tslib_1.__importDefault(require("./Config"));
exports.Config = Config_1.default;
//# sourceMappingURL=index.js.map