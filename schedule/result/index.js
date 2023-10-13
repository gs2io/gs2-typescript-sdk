"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurrentEventMasterFromGitHubResult = exports.UpdateCurrentEventMasterResult = exports.GetCurrentEventMasterResult = exports.ExportMasterResult = exports.GetRawEventResult = exports.GetEventByUserIdResult = exports.GetEventResult = exports.DescribeRawEventsResult = exports.DescribeEventsByUserIdResult = exports.DescribeEventsResult = exports.DeleteTriggerByStampTaskResult = exports.DeleteTriggerByUserIdResult = exports.DeleteTriggerResult = exports.TriggerByStampSheetResult = exports.TriggerByUserIdResult = exports.GetTriggerByUserIdResult = exports.GetTriggerResult = exports.DescribeTriggersByUserIdResult = exports.DescribeTriggersResult = exports.DeleteEventMasterResult = exports.UpdateEventMasterResult = exports.GetEventMasterResult = exports.CreateEventMasterResult = exports.DescribeEventMastersResult = exports.CheckImportUserDataByUserIdResult = exports.ImportUserDataByUserIdResult = exports.PrepareImportUserDataByUserIdResult = exports.CheckCleanUserDataByUserIdResult = exports.CleanUserDataByUserIdResult = exports.CheckDumpUserDataByUserIdResult = exports.DumpUserDataByUserIdResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
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
var DumpUserDataByUserIdResult_1 = tslib_1.__importDefault(require("./DumpUserDataByUserIdResult"));
exports.DumpUserDataByUserIdResult = DumpUserDataByUserIdResult_1.default;
var CheckDumpUserDataByUserIdResult_1 = tslib_1.__importDefault(require("./CheckDumpUserDataByUserIdResult"));
exports.CheckDumpUserDataByUserIdResult = CheckDumpUserDataByUserIdResult_1.default;
var CleanUserDataByUserIdResult_1 = tslib_1.__importDefault(require("./CleanUserDataByUserIdResult"));
exports.CleanUserDataByUserIdResult = CleanUserDataByUserIdResult_1.default;
var CheckCleanUserDataByUserIdResult_1 = tslib_1.__importDefault(require("./CheckCleanUserDataByUserIdResult"));
exports.CheckCleanUserDataByUserIdResult = CheckCleanUserDataByUserIdResult_1.default;
var PrepareImportUserDataByUserIdResult_1 = tslib_1.__importDefault(require("./PrepareImportUserDataByUserIdResult"));
exports.PrepareImportUserDataByUserIdResult = PrepareImportUserDataByUserIdResult_1.default;
var ImportUserDataByUserIdResult_1 = tslib_1.__importDefault(require("./ImportUserDataByUserIdResult"));
exports.ImportUserDataByUserIdResult = ImportUserDataByUserIdResult_1.default;
var CheckImportUserDataByUserIdResult_1 = tslib_1.__importDefault(require("./CheckImportUserDataByUserIdResult"));
exports.CheckImportUserDataByUserIdResult = CheckImportUserDataByUserIdResult_1.default;
var DescribeEventMastersResult_1 = tslib_1.__importDefault(require("./DescribeEventMastersResult"));
exports.DescribeEventMastersResult = DescribeEventMastersResult_1.default;
var CreateEventMasterResult_1 = tslib_1.__importDefault(require("./CreateEventMasterResult"));
exports.CreateEventMasterResult = CreateEventMasterResult_1.default;
var GetEventMasterResult_1 = tslib_1.__importDefault(require("./GetEventMasterResult"));
exports.GetEventMasterResult = GetEventMasterResult_1.default;
var UpdateEventMasterResult_1 = tslib_1.__importDefault(require("./UpdateEventMasterResult"));
exports.UpdateEventMasterResult = UpdateEventMasterResult_1.default;
var DeleteEventMasterResult_1 = tslib_1.__importDefault(require("./DeleteEventMasterResult"));
exports.DeleteEventMasterResult = DeleteEventMasterResult_1.default;
var DescribeTriggersResult_1 = tslib_1.__importDefault(require("./DescribeTriggersResult"));
exports.DescribeTriggersResult = DescribeTriggersResult_1.default;
var DescribeTriggersByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeTriggersByUserIdResult"));
exports.DescribeTriggersByUserIdResult = DescribeTriggersByUserIdResult_1.default;
var GetTriggerResult_1 = tslib_1.__importDefault(require("./GetTriggerResult"));
exports.GetTriggerResult = GetTriggerResult_1.default;
var GetTriggerByUserIdResult_1 = tslib_1.__importDefault(require("./GetTriggerByUserIdResult"));
exports.GetTriggerByUserIdResult = GetTriggerByUserIdResult_1.default;
var TriggerByUserIdResult_1 = tslib_1.__importDefault(require("./TriggerByUserIdResult"));
exports.TriggerByUserIdResult = TriggerByUserIdResult_1.default;
var TriggerByStampSheetResult_1 = tslib_1.__importDefault(require("./TriggerByStampSheetResult"));
exports.TriggerByStampSheetResult = TriggerByStampSheetResult_1.default;
var DeleteTriggerResult_1 = tslib_1.__importDefault(require("./DeleteTriggerResult"));
exports.DeleteTriggerResult = DeleteTriggerResult_1.default;
var DeleteTriggerByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteTriggerByUserIdResult"));
exports.DeleteTriggerByUserIdResult = DeleteTriggerByUserIdResult_1.default;
var DeleteTriggerByStampTaskResult_1 = tslib_1.__importDefault(require("./DeleteTriggerByStampTaskResult"));
exports.DeleteTriggerByStampTaskResult = DeleteTriggerByStampTaskResult_1.default;
var DescribeEventsResult_1 = tslib_1.__importDefault(require("./DescribeEventsResult"));
exports.DescribeEventsResult = DescribeEventsResult_1.default;
var DescribeEventsByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeEventsByUserIdResult"));
exports.DescribeEventsByUserIdResult = DescribeEventsByUserIdResult_1.default;
var DescribeRawEventsResult_1 = tslib_1.__importDefault(require("./DescribeRawEventsResult"));
exports.DescribeRawEventsResult = DescribeRawEventsResult_1.default;
var GetEventResult_1 = tslib_1.__importDefault(require("./GetEventResult"));
exports.GetEventResult = GetEventResult_1.default;
var GetEventByUserIdResult_1 = tslib_1.__importDefault(require("./GetEventByUserIdResult"));
exports.GetEventByUserIdResult = GetEventByUserIdResult_1.default;
var GetRawEventResult_1 = tslib_1.__importDefault(require("./GetRawEventResult"));
exports.GetRawEventResult = GetRawEventResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentEventMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentEventMasterResult"));
exports.GetCurrentEventMasterResult = GetCurrentEventMasterResult_1.default;
var UpdateCurrentEventMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentEventMasterResult"));
exports.UpdateCurrentEventMasterResult = UpdateCurrentEventMasterResult_1.default;
var UpdateCurrentEventMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentEventMasterFromGitHubResult"));
exports.UpdateCurrentEventMasterFromGitHubResult = UpdateCurrentEventMasterFromGitHubResult_1.default;
//# sourceMappingURL=index.js.map