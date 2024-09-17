"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurrentEventMasterFromGitHubRequest = exports.UpdateCurrentEventMasterRequest = exports.GetCurrentEventMasterRequest = exports.ExportMasterRequest = exports.VerifyEventByStampTaskRequest = exports.VerifyEventByUserIdRequest = exports.VerifyEventRequest = exports.GetRawEventRequest = exports.GetEventByUserIdRequest = exports.GetEventRequest = exports.DescribeRawEventsRequest = exports.DescribeEventsByUserIdRequest = exports.DescribeEventsRequest = exports.VerifyTriggerByStampTaskRequest = exports.DeleteTriggerByStampTaskRequest = exports.VerifyTriggerByUserIdRequest = exports.VerifyTriggerRequest = exports.DeleteTriggerByUserIdRequest = exports.DeleteTriggerRequest = exports.TriggerByStampSheetRequest = exports.TriggerByUserIdRequest = exports.GetTriggerByUserIdRequest = exports.GetTriggerRequest = exports.DescribeTriggersByUserIdRequest = exports.DescribeTriggersRequest = exports.DeleteEventMasterRequest = exports.UpdateEventMasterRequest = exports.GetEventMasterRequest = exports.CreateEventMasterRequest = exports.DescribeEventMastersRequest = exports.CheckImportUserDataByUserIdRequest = exports.ImportUserDataByUserIdRequest = exports.PrepareImportUserDataByUserIdRequest = exports.CheckCleanUserDataByUserIdRequest = exports.CleanUserDataByUserIdRequest = exports.CheckDumpUserDataByUserIdRequest = exports.DumpUserDataByUserIdRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
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
var DescribeNamespacesRequest_1 = tslib_1.__importDefault(require("./DescribeNamespacesRequest"));
exports.DescribeNamespacesRequest = DescribeNamespacesRequest_1.default;
var CreateNamespaceRequest_1 = tslib_1.__importDefault(require("./CreateNamespaceRequest"));
exports.CreateNamespaceRequest = CreateNamespaceRequest_1.default;
var GetNamespaceStatusRequest_1 = tslib_1.__importDefault(require("./GetNamespaceStatusRequest"));
exports.GetNamespaceStatusRequest = GetNamespaceStatusRequest_1.default;
var GetNamespaceRequest_1 = tslib_1.__importDefault(require("./GetNamespaceRequest"));
exports.GetNamespaceRequest = GetNamespaceRequest_1.default;
var UpdateNamespaceRequest_1 = tslib_1.__importDefault(require("./UpdateNamespaceRequest"));
exports.UpdateNamespaceRequest = UpdateNamespaceRequest_1.default;
var DeleteNamespaceRequest_1 = tslib_1.__importDefault(require("./DeleteNamespaceRequest"));
exports.DeleteNamespaceRequest = DeleteNamespaceRequest_1.default;
var DumpUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./DumpUserDataByUserIdRequest"));
exports.DumpUserDataByUserIdRequest = DumpUserDataByUserIdRequest_1.default;
var CheckDumpUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./CheckDumpUserDataByUserIdRequest"));
exports.CheckDumpUserDataByUserIdRequest = CheckDumpUserDataByUserIdRequest_1.default;
var CleanUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./CleanUserDataByUserIdRequest"));
exports.CleanUserDataByUserIdRequest = CleanUserDataByUserIdRequest_1.default;
var CheckCleanUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./CheckCleanUserDataByUserIdRequest"));
exports.CheckCleanUserDataByUserIdRequest = CheckCleanUserDataByUserIdRequest_1.default;
var PrepareImportUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./PrepareImportUserDataByUserIdRequest"));
exports.PrepareImportUserDataByUserIdRequest = PrepareImportUserDataByUserIdRequest_1.default;
var ImportUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./ImportUserDataByUserIdRequest"));
exports.ImportUserDataByUserIdRequest = ImportUserDataByUserIdRequest_1.default;
var CheckImportUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./CheckImportUserDataByUserIdRequest"));
exports.CheckImportUserDataByUserIdRequest = CheckImportUserDataByUserIdRequest_1.default;
var DescribeEventMastersRequest_1 = tslib_1.__importDefault(require("./DescribeEventMastersRequest"));
exports.DescribeEventMastersRequest = DescribeEventMastersRequest_1.default;
var CreateEventMasterRequest_1 = tslib_1.__importDefault(require("./CreateEventMasterRequest"));
exports.CreateEventMasterRequest = CreateEventMasterRequest_1.default;
var GetEventMasterRequest_1 = tslib_1.__importDefault(require("./GetEventMasterRequest"));
exports.GetEventMasterRequest = GetEventMasterRequest_1.default;
var UpdateEventMasterRequest_1 = tslib_1.__importDefault(require("./UpdateEventMasterRequest"));
exports.UpdateEventMasterRequest = UpdateEventMasterRequest_1.default;
var DeleteEventMasterRequest_1 = tslib_1.__importDefault(require("./DeleteEventMasterRequest"));
exports.DeleteEventMasterRequest = DeleteEventMasterRequest_1.default;
var DescribeTriggersRequest_1 = tslib_1.__importDefault(require("./DescribeTriggersRequest"));
exports.DescribeTriggersRequest = DescribeTriggersRequest_1.default;
var DescribeTriggersByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeTriggersByUserIdRequest"));
exports.DescribeTriggersByUserIdRequest = DescribeTriggersByUserIdRequest_1.default;
var GetTriggerRequest_1 = tslib_1.__importDefault(require("./GetTriggerRequest"));
exports.GetTriggerRequest = GetTriggerRequest_1.default;
var GetTriggerByUserIdRequest_1 = tslib_1.__importDefault(require("./GetTriggerByUserIdRequest"));
exports.GetTriggerByUserIdRequest = GetTriggerByUserIdRequest_1.default;
var TriggerByUserIdRequest_1 = tslib_1.__importDefault(require("./TriggerByUserIdRequest"));
exports.TriggerByUserIdRequest = TriggerByUserIdRequest_1.default;
var TriggerByStampSheetRequest_1 = tslib_1.__importDefault(require("./TriggerByStampSheetRequest"));
exports.TriggerByStampSheetRequest = TriggerByStampSheetRequest_1.default;
var DeleteTriggerRequest_1 = tslib_1.__importDefault(require("./DeleteTriggerRequest"));
exports.DeleteTriggerRequest = DeleteTriggerRequest_1.default;
var DeleteTriggerByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteTriggerByUserIdRequest"));
exports.DeleteTriggerByUserIdRequest = DeleteTriggerByUserIdRequest_1.default;
var VerifyTriggerRequest_1 = tslib_1.__importDefault(require("./VerifyTriggerRequest"));
exports.VerifyTriggerRequest = VerifyTriggerRequest_1.default;
var VerifyTriggerByUserIdRequest_1 = tslib_1.__importDefault(require("./VerifyTriggerByUserIdRequest"));
exports.VerifyTriggerByUserIdRequest = VerifyTriggerByUserIdRequest_1.default;
var DeleteTriggerByStampTaskRequest_1 = tslib_1.__importDefault(require("./DeleteTriggerByStampTaskRequest"));
exports.DeleteTriggerByStampTaskRequest = DeleteTriggerByStampTaskRequest_1.default;
var VerifyTriggerByStampTaskRequest_1 = tslib_1.__importDefault(require("./VerifyTriggerByStampTaskRequest"));
exports.VerifyTriggerByStampTaskRequest = VerifyTriggerByStampTaskRequest_1.default;
var DescribeEventsRequest_1 = tslib_1.__importDefault(require("./DescribeEventsRequest"));
exports.DescribeEventsRequest = DescribeEventsRequest_1.default;
var DescribeEventsByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeEventsByUserIdRequest"));
exports.DescribeEventsByUserIdRequest = DescribeEventsByUserIdRequest_1.default;
var DescribeRawEventsRequest_1 = tslib_1.__importDefault(require("./DescribeRawEventsRequest"));
exports.DescribeRawEventsRequest = DescribeRawEventsRequest_1.default;
var GetEventRequest_1 = tslib_1.__importDefault(require("./GetEventRequest"));
exports.GetEventRequest = GetEventRequest_1.default;
var GetEventByUserIdRequest_1 = tslib_1.__importDefault(require("./GetEventByUserIdRequest"));
exports.GetEventByUserIdRequest = GetEventByUserIdRequest_1.default;
var GetRawEventRequest_1 = tslib_1.__importDefault(require("./GetRawEventRequest"));
exports.GetRawEventRequest = GetRawEventRequest_1.default;
var VerifyEventRequest_1 = tslib_1.__importDefault(require("./VerifyEventRequest"));
exports.VerifyEventRequest = VerifyEventRequest_1.default;
var VerifyEventByUserIdRequest_1 = tslib_1.__importDefault(require("./VerifyEventByUserIdRequest"));
exports.VerifyEventByUserIdRequest = VerifyEventByUserIdRequest_1.default;
var VerifyEventByStampTaskRequest_1 = tslib_1.__importDefault(require("./VerifyEventByStampTaskRequest"));
exports.VerifyEventByStampTaskRequest = VerifyEventByStampTaskRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentEventMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentEventMasterRequest"));
exports.GetCurrentEventMasterRequest = GetCurrentEventMasterRequest_1.default;
var UpdateCurrentEventMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentEventMasterRequest"));
exports.UpdateCurrentEventMasterRequest = UpdateCurrentEventMasterRequest_1.default;
var UpdateCurrentEventMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentEventMasterFromGitHubRequest"));
exports.UpdateCurrentEventMasterFromGitHubRequest = UpdateCurrentEventMasterFromGitHubRequest_1.default;
//# sourceMappingURL=index.js.map