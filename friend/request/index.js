"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetReceiveRequestRequest = exports.DescribeReceiveRequestsByUserIdRequest = exports.DescribeReceiveRequestsRequest = exports.DeleteRequestByUserIdRequest = exports.DeleteRequestRequest = exports.SendRequestByUserIdRequest = exports.SendRequestRequest = exports.GetSendRequestByUserIdRequest = exports.GetSendRequestRequest = exports.DescribeSendRequestsByUserIdRequest = exports.DescribeSendRequestsRequest = exports.DeleteFriendByUserIdRequest = exports.DeleteFriendRequest = exports.GetFriendByUserIdRequest = exports.GetFriendRequest = exports.UnfollowByUserIdRequest = exports.UnfollowRequest = exports.FollowByUserIdRequest = exports.FollowRequest = exports.GetFollowByUserIdRequest = exports.GetFollowRequest = exports.DescribeFollowsByUserIdRequest = exports.DescribeFollowsRequest = exports.UnregisterBlackListByUserIdRequest = exports.UnregisterBlackListRequest = exports.RegisterBlackListByUserIdRequest = exports.RegisterBlackListRequest = exports.DescribeBlackListByUserIdRequest = exports.DescribeBlackListRequest = exports.DescribeFriendsByUserIdRequest = exports.DescribeFriendsRequest = exports.UpdateProfileByStampSheetRequest = exports.DeleteProfileByUserIdRequest = exports.UpdateProfileByUserIdRequest = exports.UpdateProfileRequest = exports.GetProfileByUserIdRequest = exports.GetProfileRequest = exports.CheckImportUserDataByUserIdRequest = exports.ImportUserDataByUserIdRequest = exports.PrepareImportUserDataByUserIdRequest = exports.CheckCleanUserDataByUserIdRequest = exports.CleanUserDataByUserIdRequest = exports.CheckDumpUserDataByUserIdRequest = exports.DumpUserDataByUserIdRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
exports.GetPublicProfileRequest = exports.RejectRequestByUserIdRequest = exports.RejectRequestRequest = exports.AcceptRequestByUserIdRequest = exports.AcceptRequestRequest = exports.GetReceiveRequestByUserIdRequest = void 0;
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
var GetProfileRequest_1 = tslib_1.__importDefault(require("./GetProfileRequest"));
exports.GetProfileRequest = GetProfileRequest_1.default;
var GetProfileByUserIdRequest_1 = tslib_1.__importDefault(require("./GetProfileByUserIdRequest"));
exports.GetProfileByUserIdRequest = GetProfileByUserIdRequest_1.default;
var UpdateProfileRequest_1 = tslib_1.__importDefault(require("./UpdateProfileRequest"));
exports.UpdateProfileRequest = UpdateProfileRequest_1.default;
var UpdateProfileByUserIdRequest_1 = tslib_1.__importDefault(require("./UpdateProfileByUserIdRequest"));
exports.UpdateProfileByUserIdRequest = UpdateProfileByUserIdRequest_1.default;
var DeleteProfileByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteProfileByUserIdRequest"));
exports.DeleteProfileByUserIdRequest = DeleteProfileByUserIdRequest_1.default;
var UpdateProfileByStampSheetRequest_1 = tslib_1.__importDefault(require("./UpdateProfileByStampSheetRequest"));
exports.UpdateProfileByStampSheetRequest = UpdateProfileByStampSheetRequest_1.default;
var DescribeFriendsRequest_1 = tslib_1.__importDefault(require("./DescribeFriendsRequest"));
exports.DescribeFriendsRequest = DescribeFriendsRequest_1.default;
var DescribeFriendsByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeFriendsByUserIdRequest"));
exports.DescribeFriendsByUserIdRequest = DescribeFriendsByUserIdRequest_1.default;
var DescribeBlackListRequest_1 = tslib_1.__importDefault(require("./DescribeBlackListRequest"));
exports.DescribeBlackListRequest = DescribeBlackListRequest_1.default;
var DescribeBlackListByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeBlackListByUserIdRequest"));
exports.DescribeBlackListByUserIdRequest = DescribeBlackListByUserIdRequest_1.default;
var RegisterBlackListRequest_1 = tslib_1.__importDefault(require("./RegisterBlackListRequest"));
exports.RegisterBlackListRequest = RegisterBlackListRequest_1.default;
var RegisterBlackListByUserIdRequest_1 = tslib_1.__importDefault(require("./RegisterBlackListByUserIdRequest"));
exports.RegisterBlackListByUserIdRequest = RegisterBlackListByUserIdRequest_1.default;
var UnregisterBlackListRequest_1 = tslib_1.__importDefault(require("./UnregisterBlackListRequest"));
exports.UnregisterBlackListRequest = UnregisterBlackListRequest_1.default;
var UnregisterBlackListByUserIdRequest_1 = tslib_1.__importDefault(require("./UnregisterBlackListByUserIdRequest"));
exports.UnregisterBlackListByUserIdRequest = UnregisterBlackListByUserIdRequest_1.default;
var DescribeFollowsRequest_1 = tslib_1.__importDefault(require("./DescribeFollowsRequest"));
exports.DescribeFollowsRequest = DescribeFollowsRequest_1.default;
var DescribeFollowsByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeFollowsByUserIdRequest"));
exports.DescribeFollowsByUserIdRequest = DescribeFollowsByUserIdRequest_1.default;
var GetFollowRequest_1 = tslib_1.__importDefault(require("./GetFollowRequest"));
exports.GetFollowRequest = GetFollowRequest_1.default;
var GetFollowByUserIdRequest_1 = tslib_1.__importDefault(require("./GetFollowByUserIdRequest"));
exports.GetFollowByUserIdRequest = GetFollowByUserIdRequest_1.default;
var FollowRequest_1 = tslib_1.__importDefault(require("./FollowRequest"));
exports.FollowRequest = FollowRequest_1.default;
var FollowByUserIdRequest_1 = tslib_1.__importDefault(require("./FollowByUserIdRequest"));
exports.FollowByUserIdRequest = FollowByUserIdRequest_1.default;
var UnfollowRequest_1 = tslib_1.__importDefault(require("./UnfollowRequest"));
exports.UnfollowRequest = UnfollowRequest_1.default;
var UnfollowByUserIdRequest_1 = tslib_1.__importDefault(require("./UnfollowByUserIdRequest"));
exports.UnfollowByUserIdRequest = UnfollowByUserIdRequest_1.default;
var GetFriendRequest_1 = tslib_1.__importDefault(require("./GetFriendRequest"));
exports.GetFriendRequest = GetFriendRequest_1.default;
var GetFriendByUserIdRequest_1 = tslib_1.__importDefault(require("./GetFriendByUserIdRequest"));
exports.GetFriendByUserIdRequest = GetFriendByUserIdRequest_1.default;
var DeleteFriendRequest_1 = tslib_1.__importDefault(require("./DeleteFriendRequest"));
exports.DeleteFriendRequest = DeleteFriendRequest_1.default;
var DeleteFriendByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteFriendByUserIdRequest"));
exports.DeleteFriendByUserIdRequest = DeleteFriendByUserIdRequest_1.default;
var DescribeSendRequestsRequest_1 = tslib_1.__importDefault(require("./DescribeSendRequestsRequest"));
exports.DescribeSendRequestsRequest = DescribeSendRequestsRequest_1.default;
var DescribeSendRequestsByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeSendRequestsByUserIdRequest"));
exports.DescribeSendRequestsByUserIdRequest = DescribeSendRequestsByUserIdRequest_1.default;
var GetSendRequestRequest_1 = tslib_1.__importDefault(require("./GetSendRequestRequest"));
exports.GetSendRequestRequest = GetSendRequestRequest_1.default;
var GetSendRequestByUserIdRequest_1 = tslib_1.__importDefault(require("./GetSendRequestByUserIdRequest"));
exports.GetSendRequestByUserIdRequest = GetSendRequestByUserIdRequest_1.default;
var SendRequestRequest_1 = tslib_1.__importDefault(require("./SendRequestRequest"));
exports.SendRequestRequest = SendRequestRequest_1.default;
var SendRequestByUserIdRequest_1 = tslib_1.__importDefault(require("./SendRequestByUserIdRequest"));
exports.SendRequestByUserIdRequest = SendRequestByUserIdRequest_1.default;
var DeleteRequestRequest_1 = tslib_1.__importDefault(require("./DeleteRequestRequest"));
exports.DeleteRequestRequest = DeleteRequestRequest_1.default;
var DeleteRequestByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteRequestByUserIdRequest"));
exports.DeleteRequestByUserIdRequest = DeleteRequestByUserIdRequest_1.default;
var DescribeReceiveRequestsRequest_1 = tslib_1.__importDefault(require("./DescribeReceiveRequestsRequest"));
exports.DescribeReceiveRequestsRequest = DescribeReceiveRequestsRequest_1.default;
var DescribeReceiveRequestsByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeReceiveRequestsByUserIdRequest"));
exports.DescribeReceiveRequestsByUserIdRequest = DescribeReceiveRequestsByUserIdRequest_1.default;
var GetReceiveRequestRequest_1 = tslib_1.__importDefault(require("./GetReceiveRequestRequest"));
exports.GetReceiveRequestRequest = GetReceiveRequestRequest_1.default;
var GetReceiveRequestByUserIdRequest_1 = tslib_1.__importDefault(require("./GetReceiveRequestByUserIdRequest"));
exports.GetReceiveRequestByUserIdRequest = GetReceiveRequestByUserIdRequest_1.default;
var AcceptRequestRequest_1 = tslib_1.__importDefault(require("./AcceptRequestRequest"));
exports.AcceptRequestRequest = AcceptRequestRequest_1.default;
var AcceptRequestByUserIdRequest_1 = tslib_1.__importDefault(require("./AcceptRequestByUserIdRequest"));
exports.AcceptRequestByUserIdRequest = AcceptRequestByUserIdRequest_1.default;
var RejectRequestRequest_1 = tslib_1.__importDefault(require("./RejectRequestRequest"));
exports.RejectRequestRequest = RejectRequestRequest_1.default;
var RejectRequestByUserIdRequest_1 = tslib_1.__importDefault(require("./RejectRequestByUserIdRequest"));
exports.RejectRequestByUserIdRequest = RejectRequestByUserIdRequest_1.default;
var GetPublicProfileRequest_1 = tslib_1.__importDefault(require("./GetPublicProfileRequest"));
exports.GetPublicProfileRequest = GetPublicProfileRequest_1.default;
//# sourceMappingURL=index.js.map