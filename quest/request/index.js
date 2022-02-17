"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetQuestModelRequest = exports.DescribeQuestModelsRequest = exports.GetQuestGroupModelRequest = exports.DescribeQuestGroupModelsRequest = exports.DeleteCompletedQuestListByUserIdRequest = exports.GetCompletedQuestListByUserIdRequest = exports.GetCompletedQuestListRequest = exports.DescribeCompletedQuestListsByUserIdRequest = exports.DescribeCompletedQuestListsRequest = exports.DeleteProgressByStampTaskRequest = exports.CreateProgressByStampSheetRequest = exports.DeleteProgressByUserIdRequest = exports.DeleteProgressRequest = exports.EndByUserIdRequest = exports.EndRequest = exports.StartByUserIdRequest = exports.StartRequest = exports.GetProgressByUserIdRequest = exports.GetProgressRequest = exports.CreateProgressByUserIdRequest = exports.DescribeProgressesByUserIdRequest = exports.UpdateCurrentQuestMasterFromGitHubRequest = exports.UpdateCurrentQuestMasterRequest = exports.GetCurrentQuestMasterRequest = exports.ExportMasterRequest = exports.DeleteQuestModelMasterRequest = exports.UpdateQuestModelMasterRequest = exports.GetQuestModelMasterRequest = exports.CreateQuestModelMasterRequest = exports.DescribeQuestModelMastersRequest = exports.DeleteQuestGroupModelMasterRequest = exports.UpdateQuestGroupModelMasterRequest = exports.GetQuestGroupModelMasterRequest = exports.CreateQuestGroupModelMasterRequest = exports.DescribeQuestGroupModelMastersRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
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
var DescribeNamespacesRequest_1 = (0, tslib_1.__importDefault)(require("./DescribeNamespacesRequest"));
exports.DescribeNamespacesRequest = DescribeNamespacesRequest_1.default;
var CreateNamespaceRequest_1 = (0, tslib_1.__importDefault)(require("./CreateNamespaceRequest"));
exports.CreateNamespaceRequest = CreateNamespaceRequest_1.default;
var GetNamespaceStatusRequest_1 = (0, tslib_1.__importDefault)(require("./GetNamespaceStatusRequest"));
exports.GetNamespaceStatusRequest = GetNamespaceStatusRequest_1.default;
var GetNamespaceRequest_1 = (0, tslib_1.__importDefault)(require("./GetNamespaceRequest"));
exports.GetNamespaceRequest = GetNamespaceRequest_1.default;
var UpdateNamespaceRequest_1 = (0, tslib_1.__importDefault)(require("./UpdateNamespaceRequest"));
exports.UpdateNamespaceRequest = UpdateNamespaceRequest_1.default;
var DeleteNamespaceRequest_1 = (0, tslib_1.__importDefault)(require("./DeleteNamespaceRequest"));
exports.DeleteNamespaceRequest = DeleteNamespaceRequest_1.default;
var DescribeQuestGroupModelMastersRequest_1 = (0, tslib_1.__importDefault)(require("./DescribeQuestGroupModelMastersRequest"));
exports.DescribeQuestGroupModelMastersRequest = DescribeQuestGroupModelMastersRequest_1.default;
var CreateQuestGroupModelMasterRequest_1 = (0, tslib_1.__importDefault)(require("./CreateQuestGroupModelMasterRequest"));
exports.CreateQuestGroupModelMasterRequest = CreateQuestGroupModelMasterRequest_1.default;
var GetQuestGroupModelMasterRequest_1 = (0, tslib_1.__importDefault)(require("./GetQuestGroupModelMasterRequest"));
exports.GetQuestGroupModelMasterRequest = GetQuestGroupModelMasterRequest_1.default;
var UpdateQuestGroupModelMasterRequest_1 = (0, tslib_1.__importDefault)(require("./UpdateQuestGroupModelMasterRequest"));
exports.UpdateQuestGroupModelMasterRequest = UpdateQuestGroupModelMasterRequest_1.default;
var DeleteQuestGroupModelMasterRequest_1 = (0, tslib_1.__importDefault)(require("./DeleteQuestGroupModelMasterRequest"));
exports.DeleteQuestGroupModelMasterRequest = DeleteQuestGroupModelMasterRequest_1.default;
var DescribeQuestModelMastersRequest_1 = (0, tslib_1.__importDefault)(require("./DescribeQuestModelMastersRequest"));
exports.DescribeQuestModelMastersRequest = DescribeQuestModelMastersRequest_1.default;
var CreateQuestModelMasterRequest_1 = (0, tslib_1.__importDefault)(require("./CreateQuestModelMasterRequest"));
exports.CreateQuestModelMasterRequest = CreateQuestModelMasterRequest_1.default;
var GetQuestModelMasterRequest_1 = (0, tslib_1.__importDefault)(require("./GetQuestModelMasterRequest"));
exports.GetQuestModelMasterRequest = GetQuestModelMasterRequest_1.default;
var UpdateQuestModelMasterRequest_1 = (0, tslib_1.__importDefault)(require("./UpdateQuestModelMasterRequest"));
exports.UpdateQuestModelMasterRequest = UpdateQuestModelMasterRequest_1.default;
var DeleteQuestModelMasterRequest_1 = (0, tslib_1.__importDefault)(require("./DeleteQuestModelMasterRequest"));
exports.DeleteQuestModelMasterRequest = DeleteQuestModelMasterRequest_1.default;
var ExportMasterRequest_1 = (0, tslib_1.__importDefault)(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentQuestMasterRequest_1 = (0, tslib_1.__importDefault)(require("./GetCurrentQuestMasterRequest"));
exports.GetCurrentQuestMasterRequest = GetCurrentQuestMasterRequest_1.default;
var UpdateCurrentQuestMasterRequest_1 = (0, tslib_1.__importDefault)(require("./UpdateCurrentQuestMasterRequest"));
exports.UpdateCurrentQuestMasterRequest = UpdateCurrentQuestMasterRequest_1.default;
var UpdateCurrentQuestMasterFromGitHubRequest_1 = (0, tslib_1.__importDefault)(require("./UpdateCurrentQuestMasterFromGitHubRequest"));
exports.UpdateCurrentQuestMasterFromGitHubRequest = UpdateCurrentQuestMasterFromGitHubRequest_1.default;
var DescribeProgressesByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./DescribeProgressesByUserIdRequest"));
exports.DescribeProgressesByUserIdRequest = DescribeProgressesByUserIdRequest_1.default;
var CreateProgressByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./CreateProgressByUserIdRequest"));
exports.CreateProgressByUserIdRequest = CreateProgressByUserIdRequest_1.default;
var GetProgressRequest_1 = (0, tslib_1.__importDefault)(require("./GetProgressRequest"));
exports.GetProgressRequest = GetProgressRequest_1.default;
var GetProgressByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./GetProgressByUserIdRequest"));
exports.GetProgressByUserIdRequest = GetProgressByUserIdRequest_1.default;
var StartRequest_1 = (0, tslib_1.__importDefault)(require("./StartRequest"));
exports.StartRequest = StartRequest_1.default;
var StartByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./StartByUserIdRequest"));
exports.StartByUserIdRequest = StartByUserIdRequest_1.default;
var EndRequest_1 = (0, tslib_1.__importDefault)(require("./EndRequest"));
exports.EndRequest = EndRequest_1.default;
var EndByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./EndByUserIdRequest"));
exports.EndByUserIdRequest = EndByUserIdRequest_1.default;
var DeleteProgressRequest_1 = (0, tslib_1.__importDefault)(require("./DeleteProgressRequest"));
exports.DeleteProgressRequest = DeleteProgressRequest_1.default;
var DeleteProgressByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./DeleteProgressByUserIdRequest"));
exports.DeleteProgressByUserIdRequest = DeleteProgressByUserIdRequest_1.default;
var CreateProgressByStampSheetRequest_1 = (0, tslib_1.__importDefault)(require("./CreateProgressByStampSheetRequest"));
exports.CreateProgressByStampSheetRequest = CreateProgressByStampSheetRequest_1.default;
var DeleteProgressByStampTaskRequest_1 = (0, tslib_1.__importDefault)(require("./DeleteProgressByStampTaskRequest"));
exports.DeleteProgressByStampTaskRequest = DeleteProgressByStampTaskRequest_1.default;
var DescribeCompletedQuestListsRequest_1 = (0, tslib_1.__importDefault)(require("./DescribeCompletedQuestListsRequest"));
exports.DescribeCompletedQuestListsRequest = DescribeCompletedQuestListsRequest_1.default;
var DescribeCompletedQuestListsByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./DescribeCompletedQuestListsByUserIdRequest"));
exports.DescribeCompletedQuestListsByUserIdRequest = DescribeCompletedQuestListsByUserIdRequest_1.default;
var GetCompletedQuestListRequest_1 = (0, tslib_1.__importDefault)(require("./GetCompletedQuestListRequest"));
exports.GetCompletedQuestListRequest = GetCompletedQuestListRequest_1.default;
var GetCompletedQuestListByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./GetCompletedQuestListByUserIdRequest"));
exports.GetCompletedQuestListByUserIdRequest = GetCompletedQuestListByUserIdRequest_1.default;
var DeleteCompletedQuestListByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./DeleteCompletedQuestListByUserIdRequest"));
exports.DeleteCompletedQuestListByUserIdRequest = DeleteCompletedQuestListByUserIdRequest_1.default;
var DescribeQuestGroupModelsRequest_1 = (0, tslib_1.__importDefault)(require("./DescribeQuestGroupModelsRequest"));
exports.DescribeQuestGroupModelsRequest = DescribeQuestGroupModelsRequest_1.default;
var GetQuestGroupModelRequest_1 = (0, tslib_1.__importDefault)(require("./GetQuestGroupModelRequest"));
exports.GetQuestGroupModelRequest = GetQuestGroupModelRequest_1.default;
var DescribeQuestModelsRequest_1 = (0, tslib_1.__importDefault)(require("./DescribeQuestModelsRequest"));
exports.DescribeQuestModelsRequest = DescribeQuestModelsRequest_1.default;
var GetQuestModelRequest_1 = (0, tslib_1.__importDefault)(require("./GetQuestModelRequest"));
exports.GetQuestModelRequest = GetQuestModelRequest_1.default;
//# sourceMappingURL=index.js.map