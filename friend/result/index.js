"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetReceiveRequestResult = exports.DescribeReceiveRequestsByUserIdResult = exports.DescribeReceiveRequestsResult = exports.DeleteRequestByUserIdResult = exports.DeleteRequestResult = exports.SendRequestByUserIdResult = exports.SendRequestResult = exports.GetSendRequestByUserIdResult = exports.GetSendRequestResult = exports.DescribeSendRequestsByUserIdResult = exports.DescribeSendRequestsResult = exports.DeleteFriendByUserIdResult = exports.DeleteFriendResult = exports.GetFriendByUserIdResult = exports.GetFriendResult = exports.UnfollowByUserIdResult = exports.UnfollowResult = exports.FollowByUserIdResult = exports.FollowResult = exports.GetFollowByUserIdResult = exports.GetFollowResult = exports.DescribeFollowsByUserIdResult = exports.DescribeFollowsResult = exports.UnregisterBlackListByUserIdResult = exports.UnregisterBlackListResult = exports.RegisterBlackListByUserIdResult = exports.RegisterBlackListResult = exports.DescribeBlackListByUserIdResult = exports.DescribeBlackListResult = exports.DescribeFriendsByUserIdResult = exports.DescribeFriendsResult = exports.UpdateProfileByStampSheetResult = exports.DeleteProfileByUserIdResult = exports.UpdateProfileByUserIdResult = exports.UpdateProfileResult = exports.GetProfileByUserIdResult = exports.GetProfileResult = exports.CheckImportUserDataByUserIdResult = exports.ImportUserDataByUserIdResult = exports.PrepareImportUserDataByUserIdResult = exports.CheckCleanUserDataByUserIdResult = exports.CleanUserDataByUserIdResult = exports.CheckDumpUserDataByUserIdResult = exports.DumpUserDataByUserIdResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
exports.GetPublicProfileResult = exports.RejectRequestByUserIdResult = exports.RejectRequestResult = exports.AcceptRequestByUserIdResult = exports.AcceptRequestResult = exports.GetReceiveRequestByUserIdResult = void 0;
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
var GetProfileResult_1 = tslib_1.__importDefault(require("./GetProfileResult"));
exports.GetProfileResult = GetProfileResult_1.default;
var GetProfileByUserIdResult_1 = tslib_1.__importDefault(require("./GetProfileByUserIdResult"));
exports.GetProfileByUserIdResult = GetProfileByUserIdResult_1.default;
var UpdateProfileResult_1 = tslib_1.__importDefault(require("./UpdateProfileResult"));
exports.UpdateProfileResult = UpdateProfileResult_1.default;
var UpdateProfileByUserIdResult_1 = tslib_1.__importDefault(require("./UpdateProfileByUserIdResult"));
exports.UpdateProfileByUserIdResult = UpdateProfileByUserIdResult_1.default;
var DeleteProfileByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteProfileByUserIdResult"));
exports.DeleteProfileByUserIdResult = DeleteProfileByUserIdResult_1.default;
var UpdateProfileByStampSheetResult_1 = tslib_1.__importDefault(require("./UpdateProfileByStampSheetResult"));
exports.UpdateProfileByStampSheetResult = UpdateProfileByStampSheetResult_1.default;
var DescribeFriendsResult_1 = tslib_1.__importDefault(require("./DescribeFriendsResult"));
exports.DescribeFriendsResult = DescribeFriendsResult_1.default;
var DescribeFriendsByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeFriendsByUserIdResult"));
exports.DescribeFriendsByUserIdResult = DescribeFriendsByUserIdResult_1.default;
var DescribeBlackListResult_1 = tslib_1.__importDefault(require("./DescribeBlackListResult"));
exports.DescribeBlackListResult = DescribeBlackListResult_1.default;
var DescribeBlackListByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeBlackListByUserIdResult"));
exports.DescribeBlackListByUserIdResult = DescribeBlackListByUserIdResult_1.default;
var RegisterBlackListResult_1 = tslib_1.__importDefault(require("./RegisterBlackListResult"));
exports.RegisterBlackListResult = RegisterBlackListResult_1.default;
var RegisterBlackListByUserIdResult_1 = tslib_1.__importDefault(require("./RegisterBlackListByUserIdResult"));
exports.RegisterBlackListByUserIdResult = RegisterBlackListByUserIdResult_1.default;
var UnregisterBlackListResult_1 = tslib_1.__importDefault(require("./UnregisterBlackListResult"));
exports.UnregisterBlackListResult = UnregisterBlackListResult_1.default;
var UnregisterBlackListByUserIdResult_1 = tslib_1.__importDefault(require("./UnregisterBlackListByUserIdResult"));
exports.UnregisterBlackListByUserIdResult = UnregisterBlackListByUserIdResult_1.default;
var DescribeFollowsResult_1 = tslib_1.__importDefault(require("./DescribeFollowsResult"));
exports.DescribeFollowsResult = DescribeFollowsResult_1.default;
var DescribeFollowsByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeFollowsByUserIdResult"));
exports.DescribeFollowsByUserIdResult = DescribeFollowsByUserIdResult_1.default;
var GetFollowResult_1 = tslib_1.__importDefault(require("./GetFollowResult"));
exports.GetFollowResult = GetFollowResult_1.default;
var GetFollowByUserIdResult_1 = tslib_1.__importDefault(require("./GetFollowByUserIdResult"));
exports.GetFollowByUserIdResult = GetFollowByUserIdResult_1.default;
var FollowResult_1 = tslib_1.__importDefault(require("./FollowResult"));
exports.FollowResult = FollowResult_1.default;
var FollowByUserIdResult_1 = tslib_1.__importDefault(require("./FollowByUserIdResult"));
exports.FollowByUserIdResult = FollowByUserIdResult_1.default;
var UnfollowResult_1 = tslib_1.__importDefault(require("./UnfollowResult"));
exports.UnfollowResult = UnfollowResult_1.default;
var UnfollowByUserIdResult_1 = tslib_1.__importDefault(require("./UnfollowByUserIdResult"));
exports.UnfollowByUserIdResult = UnfollowByUserIdResult_1.default;
var GetFriendResult_1 = tslib_1.__importDefault(require("./GetFriendResult"));
exports.GetFriendResult = GetFriendResult_1.default;
var GetFriendByUserIdResult_1 = tslib_1.__importDefault(require("./GetFriendByUserIdResult"));
exports.GetFriendByUserIdResult = GetFriendByUserIdResult_1.default;
var DeleteFriendResult_1 = tslib_1.__importDefault(require("./DeleteFriendResult"));
exports.DeleteFriendResult = DeleteFriendResult_1.default;
var DeleteFriendByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteFriendByUserIdResult"));
exports.DeleteFriendByUserIdResult = DeleteFriendByUserIdResult_1.default;
var DescribeSendRequestsResult_1 = tslib_1.__importDefault(require("./DescribeSendRequestsResult"));
exports.DescribeSendRequestsResult = DescribeSendRequestsResult_1.default;
var DescribeSendRequestsByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeSendRequestsByUserIdResult"));
exports.DescribeSendRequestsByUserIdResult = DescribeSendRequestsByUserIdResult_1.default;
var GetSendRequestResult_1 = tslib_1.__importDefault(require("./GetSendRequestResult"));
exports.GetSendRequestResult = GetSendRequestResult_1.default;
var GetSendRequestByUserIdResult_1 = tslib_1.__importDefault(require("./GetSendRequestByUserIdResult"));
exports.GetSendRequestByUserIdResult = GetSendRequestByUserIdResult_1.default;
var SendRequestResult_1 = tslib_1.__importDefault(require("./SendRequestResult"));
exports.SendRequestResult = SendRequestResult_1.default;
var SendRequestByUserIdResult_1 = tslib_1.__importDefault(require("./SendRequestByUserIdResult"));
exports.SendRequestByUserIdResult = SendRequestByUserIdResult_1.default;
var DeleteRequestResult_1 = tslib_1.__importDefault(require("./DeleteRequestResult"));
exports.DeleteRequestResult = DeleteRequestResult_1.default;
var DeleteRequestByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteRequestByUserIdResult"));
exports.DeleteRequestByUserIdResult = DeleteRequestByUserIdResult_1.default;
var DescribeReceiveRequestsResult_1 = tslib_1.__importDefault(require("./DescribeReceiveRequestsResult"));
exports.DescribeReceiveRequestsResult = DescribeReceiveRequestsResult_1.default;
var DescribeReceiveRequestsByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeReceiveRequestsByUserIdResult"));
exports.DescribeReceiveRequestsByUserIdResult = DescribeReceiveRequestsByUserIdResult_1.default;
var GetReceiveRequestResult_1 = tslib_1.__importDefault(require("./GetReceiveRequestResult"));
exports.GetReceiveRequestResult = GetReceiveRequestResult_1.default;
var GetReceiveRequestByUserIdResult_1 = tslib_1.__importDefault(require("./GetReceiveRequestByUserIdResult"));
exports.GetReceiveRequestByUserIdResult = GetReceiveRequestByUserIdResult_1.default;
var AcceptRequestResult_1 = tslib_1.__importDefault(require("./AcceptRequestResult"));
exports.AcceptRequestResult = AcceptRequestResult_1.default;
var AcceptRequestByUserIdResult_1 = tslib_1.__importDefault(require("./AcceptRequestByUserIdResult"));
exports.AcceptRequestByUserIdResult = AcceptRequestByUserIdResult_1.default;
var RejectRequestResult_1 = tslib_1.__importDefault(require("./RejectRequestResult"));
exports.RejectRequestResult = RejectRequestResult_1.default;
var RejectRequestByUserIdResult_1 = tslib_1.__importDefault(require("./RejectRequestByUserIdResult"));
exports.RejectRequestByUserIdResult = RejectRequestByUserIdResult_1.default;
var GetPublicProfileResult_1 = tslib_1.__importDefault(require("./GetPublicProfileResult"));
exports.GetPublicProfileResult = GetPublicProfileResult_1.default;
//# sourceMappingURL=index.js.map