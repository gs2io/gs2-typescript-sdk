"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMissionTaskModelMasterResult = exports.GetMissionTaskModelMasterResult = exports.CreateMissionTaskModelMasterResult = exports.DescribeMissionTaskModelMastersResult = exports.GetMissionTaskModelResult = exports.DescribeMissionTaskModelsResult = exports.GetMissionGroupModelResult = exports.DescribeMissionGroupModelsResult = exports.GetCounterModelResult = exports.DescribeCounterModelsResult = exports.UpdateCurrentMissionMasterFromGitHubResult = exports.UpdateCurrentMissionMasterResult = exports.GetCurrentMissionMasterResult = exports.ExportMasterResult = exports.DecreaseByStampTaskResult = exports.IncreaseByStampSheetResult = exports.DeleteCounterByUserIdResult = exports.GetCounterByUserIdResult = exports.GetCounterResult = exports.DecreaseCounterByUserIdResult = exports.IncreaseCounterByUserIdResult = exports.DescribeCountersByUserIdResult = exports.DescribeCountersResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = exports.DeleteMissionGroupModelMasterResult = exports.UpdateMissionGroupModelMasterResult = exports.GetMissionGroupModelMasterResult = exports.CreateMissionGroupModelMasterResult = exports.DescribeMissionGroupModelMastersResult = exports.DeleteCounterModelMasterResult = exports.UpdateCounterModelMasterResult = exports.GetCounterModelMasterResult = exports.CreateCounterModelMasterResult = exports.DescribeCounterModelMastersResult = exports.RevertReceiveByStampSheetResult = exports.ReceiveByStampTaskResult = exports.DeleteCompleteByUserIdResult = exports.GetCompleteByUserIdResult = exports.GetCompleteResult = exports.RevertReceiveByUserIdResult = exports.ReceiveByUserIdResult = exports.CompleteByUserIdResult = exports.CompleteResult = exports.DescribeCompletesByUserIdResult = exports.DescribeCompletesResult = void 0;
exports.DeleteMissionTaskModelMasterResult = void 0;
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
var DescribeCompletesResult_1 = tslib_1.__importDefault(require("./DescribeCompletesResult"));
exports.DescribeCompletesResult = DescribeCompletesResult_1.default;
var DescribeCompletesByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeCompletesByUserIdResult"));
exports.DescribeCompletesByUserIdResult = DescribeCompletesByUserIdResult_1.default;
var CompleteResult_1 = tslib_1.__importDefault(require("./CompleteResult"));
exports.CompleteResult = CompleteResult_1.default;
var CompleteByUserIdResult_1 = tslib_1.__importDefault(require("./CompleteByUserIdResult"));
exports.CompleteByUserIdResult = CompleteByUserIdResult_1.default;
var ReceiveByUserIdResult_1 = tslib_1.__importDefault(require("./ReceiveByUserIdResult"));
exports.ReceiveByUserIdResult = ReceiveByUserIdResult_1.default;
var RevertReceiveByUserIdResult_1 = tslib_1.__importDefault(require("./RevertReceiveByUserIdResult"));
exports.RevertReceiveByUserIdResult = RevertReceiveByUserIdResult_1.default;
var GetCompleteResult_1 = tslib_1.__importDefault(require("./GetCompleteResult"));
exports.GetCompleteResult = GetCompleteResult_1.default;
var GetCompleteByUserIdResult_1 = tslib_1.__importDefault(require("./GetCompleteByUserIdResult"));
exports.GetCompleteByUserIdResult = GetCompleteByUserIdResult_1.default;
var DeleteCompleteByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteCompleteByUserIdResult"));
exports.DeleteCompleteByUserIdResult = DeleteCompleteByUserIdResult_1.default;
var ReceiveByStampTaskResult_1 = tslib_1.__importDefault(require("./ReceiveByStampTaskResult"));
exports.ReceiveByStampTaskResult = ReceiveByStampTaskResult_1.default;
var RevertReceiveByStampSheetResult_1 = tslib_1.__importDefault(require("./RevertReceiveByStampSheetResult"));
exports.RevertReceiveByStampSheetResult = RevertReceiveByStampSheetResult_1.default;
var DescribeCounterModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeCounterModelMastersResult"));
exports.DescribeCounterModelMastersResult = DescribeCounterModelMastersResult_1.default;
var CreateCounterModelMasterResult_1 = tslib_1.__importDefault(require("./CreateCounterModelMasterResult"));
exports.CreateCounterModelMasterResult = CreateCounterModelMasterResult_1.default;
var GetCounterModelMasterResult_1 = tslib_1.__importDefault(require("./GetCounterModelMasterResult"));
exports.GetCounterModelMasterResult = GetCounterModelMasterResult_1.default;
var UpdateCounterModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateCounterModelMasterResult"));
exports.UpdateCounterModelMasterResult = UpdateCounterModelMasterResult_1.default;
var DeleteCounterModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteCounterModelMasterResult"));
exports.DeleteCounterModelMasterResult = DeleteCounterModelMasterResult_1.default;
var DescribeMissionGroupModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeMissionGroupModelMastersResult"));
exports.DescribeMissionGroupModelMastersResult = DescribeMissionGroupModelMastersResult_1.default;
var CreateMissionGroupModelMasterResult_1 = tslib_1.__importDefault(require("./CreateMissionGroupModelMasterResult"));
exports.CreateMissionGroupModelMasterResult = CreateMissionGroupModelMasterResult_1.default;
var GetMissionGroupModelMasterResult_1 = tslib_1.__importDefault(require("./GetMissionGroupModelMasterResult"));
exports.GetMissionGroupModelMasterResult = GetMissionGroupModelMasterResult_1.default;
var UpdateMissionGroupModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateMissionGroupModelMasterResult"));
exports.UpdateMissionGroupModelMasterResult = UpdateMissionGroupModelMasterResult_1.default;
var DeleteMissionGroupModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteMissionGroupModelMasterResult"));
exports.DeleteMissionGroupModelMasterResult = DeleteMissionGroupModelMasterResult_1.default;
var DescribeNamespacesResult_1 = tslib_1.__importDefault(require("./DescribeNamespacesResult"));
exports.DescribeNamespacesResult = DescribeNamespacesResult_1.default;
var CreateNamespaceResult_1 = tslib_1.__importDefault(require("./CreateNamespaceResult"));
exports.CreateNamespaceResult = CreateNamespaceResult_1.default;
var GetNamespaceStatusResult_1 = tslib_1.__importDefault(require("./GetNamespaceStatusResult"));
exports.GetNamespaceStatusResult = GetNamespaceStatusResult_1.default;
var GetNamespaceResult_1 = tslib_1.__importDefault(require("./GetNamespaceResult"));
exports.GetNamespaceResult = GetNamespaceResult_1.default;
var UpdateNamespaceResult_1 = tslib_1.__importDefault(require("./UpdateNamespaceResult"));
exports.UpdateNamespaceResult = UpdateNamespaceResult_1.default;
var DeleteNamespaceResult_1 = tslib_1.__importDefault(require("./DeleteNamespaceResult"));
exports.DeleteNamespaceResult = DeleteNamespaceResult_1.default;
var DescribeCountersResult_1 = tslib_1.__importDefault(require("./DescribeCountersResult"));
exports.DescribeCountersResult = DescribeCountersResult_1.default;
var DescribeCountersByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeCountersByUserIdResult"));
exports.DescribeCountersByUserIdResult = DescribeCountersByUserIdResult_1.default;
var IncreaseCounterByUserIdResult_1 = tslib_1.__importDefault(require("./IncreaseCounterByUserIdResult"));
exports.IncreaseCounterByUserIdResult = IncreaseCounterByUserIdResult_1.default;
var DecreaseCounterByUserIdResult_1 = tslib_1.__importDefault(require("./DecreaseCounterByUserIdResult"));
exports.DecreaseCounterByUserIdResult = DecreaseCounterByUserIdResult_1.default;
var GetCounterResult_1 = tslib_1.__importDefault(require("./GetCounterResult"));
exports.GetCounterResult = GetCounterResult_1.default;
var GetCounterByUserIdResult_1 = tslib_1.__importDefault(require("./GetCounterByUserIdResult"));
exports.GetCounterByUserIdResult = GetCounterByUserIdResult_1.default;
var DeleteCounterByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteCounterByUserIdResult"));
exports.DeleteCounterByUserIdResult = DeleteCounterByUserIdResult_1.default;
var IncreaseByStampSheetResult_1 = tslib_1.__importDefault(require("./IncreaseByStampSheetResult"));
exports.IncreaseByStampSheetResult = IncreaseByStampSheetResult_1.default;
var DecreaseByStampTaskResult_1 = tslib_1.__importDefault(require("./DecreaseByStampTaskResult"));
exports.DecreaseByStampTaskResult = DecreaseByStampTaskResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentMissionMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentMissionMasterResult"));
exports.GetCurrentMissionMasterResult = GetCurrentMissionMasterResult_1.default;
var UpdateCurrentMissionMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentMissionMasterResult"));
exports.UpdateCurrentMissionMasterResult = UpdateCurrentMissionMasterResult_1.default;
var UpdateCurrentMissionMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentMissionMasterFromGitHubResult"));
exports.UpdateCurrentMissionMasterFromGitHubResult = UpdateCurrentMissionMasterFromGitHubResult_1.default;
var DescribeCounterModelsResult_1 = tslib_1.__importDefault(require("./DescribeCounterModelsResult"));
exports.DescribeCounterModelsResult = DescribeCounterModelsResult_1.default;
var GetCounterModelResult_1 = tslib_1.__importDefault(require("./GetCounterModelResult"));
exports.GetCounterModelResult = GetCounterModelResult_1.default;
var DescribeMissionGroupModelsResult_1 = tslib_1.__importDefault(require("./DescribeMissionGroupModelsResult"));
exports.DescribeMissionGroupModelsResult = DescribeMissionGroupModelsResult_1.default;
var GetMissionGroupModelResult_1 = tslib_1.__importDefault(require("./GetMissionGroupModelResult"));
exports.GetMissionGroupModelResult = GetMissionGroupModelResult_1.default;
var DescribeMissionTaskModelsResult_1 = tslib_1.__importDefault(require("./DescribeMissionTaskModelsResult"));
exports.DescribeMissionTaskModelsResult = DescribeMissionTaskModelsResult_1.default;
var GetMissionTaskModelResult_1 = tslib_1.__importDefault(require("./GetMissionTaskModelResult"));
exports.GetMissionTaskModelResult = GetMissionTaskModelResult_1.default;
var DescribeMissionTaskModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeMissionTaskModelMastersResult"));
exports.DescribeMissionTaskModelMastersResult = DescribeMissionTaskModelMastersResult_1.default;
var CreateMissionTaskModelMasterResult_1 = tslib_1.__importDefault(require("./CreateMissionTaskModelMasterResult"));
exports.CreateMissionTaskModelMasterResult = CreateMissionTaskModelMasterResult_1.default;
var GetMissionTaskModelMasterResult_1 = tslib_1.__importDefault(require("./GetMissionTaskModelMasterResult"));
exports.GetMissionTaskModelMasterResult = GetMissionTaskModelMasterResult_1.default;
var UpdateMissionTaskModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateMissionTaskModelMasterResult"));
exports.UpdateMissionTaskModelMasterResult = UpdateMissionTaskModelMasterResult_1.default;
var DeleteMissionTaskModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteMissionTaskModelMasterResult"));
exports.DeleteMissionTaskModelMasterResult = DeleteMissionTaskModelMasterResult_1.default;
//# sourceMappingURL=index.js.map