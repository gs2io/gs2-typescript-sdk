"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogSetting = exports.ScriptSetting = exports.GitHubCheckoutSetting = exports.GooglePlayContent = exports.AppleAppStoreContent = exports.GooglePlayVerifyReceiptEvent = exports.AppleAppStoreVerifyReceiptEvent = exports.WithdrawEvent = exports.DepositEvent = exports.VerifyReceiptEvent = exports.DepositTransaction = exports.WalletSummary = exports.FakeSetting = exports.GooglePlaySetting = exports.AppleAppStoreSetting = exports.PlatformSetting = exports.Receipt = exports.CurrentModelMaster = exports.StoreContentModelMaster = exports.StoreContentModel = exports.Event = exports.Wallet = exports.Namespace = void 0;
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
var Wallet_1 = tslib_1.__importDefault(require("./Wallet"));
exports.Wallet = Wallet_1.default;
var Event_1 = tslib_1.__importDefault(require("./Event"));
exports.Event = Event_1.default;
var StoreContentModel_1 = tslib_1.__importDefault(require("./StoreContentModel"));
exports.StoreContentModel = StoreContentModel_1.default;
var StoreContentModelMaster_1 = tslib_1.__importDefault(require("./StoreContentModelMaster"));
exports.StoreContentModelMaster = StoreContentModelMaster_1.default;
var CurrentModelMaster_1 = tslib_1.__importDefault(require("./CurrentModelMaster"));
exports.CurrentModelMaster = CurrentModelMaster_1.default;
var Receipt_1 = tslib_1.__importDefault(require("./Receipt"));
exports.Receipt = Receipt_1.default;
var PlatformSetting_1 = tslib_1.__importDefault(require("./PlatformSetting"));
exports.PlatformSetting = PlatformSetting_1.default;
var AppleAppStoreSetting_1 = tslib_1.__importDefault(require("./AppleAppStoreSetting"));
exports.AppleAppStoreSetting = AppleAppStoreSetting_1.default;
var GooglePlaySetting_1 = tslib_1.__importDefault(require("./GooglePlaySetting"));
exports.GooglePlaySetting = GooglePlaySetting_1.default;
var FakeSetting_1 = tslib_1.__importDefault(require("./FakeSetting"));
exports.FakeSetting = FakeSetting_1.default;
var WalletSummary_1 = tslib_1.__importDefault(require("./WalletSummary"));
exports.WalletSummary = WalletSummary_1.default;
var DepositTransaction_1 = tslib_1.__importDefault(require("./DepositTransaction"));
exports.DepositTransaction = DepositTransaction_1.default;
var VerifyReceiptEvent_1 = tslib_1.__importDefault(require("./VerifyReceiptEvent"));
exports.VerifyReceiptEvent = VerifyReceiptEvent_1.default;
var DepositEvent_1 = tslib_1.__importDefault(require("./DepositEvent"));
exports.DepositEvent = DepositEvent_1.default;
var WithdrawEvent_1 = tslib_1.__importDefault(require("./WithdrawEvent"));
exports.WithdrawEvent = WithdrawEvent_1.default;
var AppleAppStoreVerifyReceiptEvent_1 = tslib_1.__importDefault(require("./AppleAppStoreVerifyReceiptEvent"));
exports.AppleAppStoreVerifyReceiptEvent = AppleAppStoreVerifyReceiptEvent_1.default;
var GooglePlayVerifyReceiptEvent_1 = tslib_1.__importDefault(require("./GooglePlayVerifyReceiptEvent"));
exports.GooglePlayVerifyReceiptEvent = GooglePlayVerifyReceiptEvent_1.default;
var AppleAppStoreContent_1 = tslib_1.__importDefault(require("./AppleAppStoreContent"));
exports.AppleAppStoreContent = AppleAppStoreContent_1.default;
var GooglePlayContent_1 = tslib_1.__importDefault(require("./GooglePlayContent"));
exports.GooglePlayContent = GooglePlayContent_1.default;
var GitHubCheckoutSetting_1 = tslib_1.__importDefault(require("./GitHubCheckoutSetting"));
exports.GitHubCheckoutSetting = GitHubCheckoutSetting_1.default;
var ScriptSetting_1 = tslib_1.__importDefault(require("./ScriptSetting"));
exports.ScriptSetting = ScriptSetting_1.default;
var LogSetting_1 = tslib_1.__importDefault(require("./LogSetting"));
exports.LogSetting = LogSetting_1.default;
//# sourceMappingURL=index.js.map