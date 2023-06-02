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
var FriendNamespaceAcceptByUserDistribution_1 = tslib_1.__importDefault(require("./FriendNamespaceAcceptByUserDistribution"));
var FriendNamespaceRejectByUserDistribution_1 = tslib_1.__importDefault(require("./FriendNamespaceRejectByUserDistribution"));
var FriendNamespaceSendRequestByUserDistribution_1 = tslib_1.__importDefault(require("./FriendNamespaceSendRequestByUserDistribution"));
var FriendNamespaceNewFollowByUserDistribution_1 = tslib_1.__importDefault(require("./FriendNamespaceNewFollowByUserDistribution"));
var FriendNamespaceDistributions = /** @class */ (function () {
    function FriendNamespaceDistributions() {
        this.acceptByUser = null;
        this.rejectByUser = null;
        this.sendRequestByUser = null;
        this.newFollowByUser = null;
    }
    FriendNamespaceDistributions.prototype.getAcceptByUser = function () {
        return this.acceptByUser;
    };
    FriendNamespaceDistributions.prototype.setAcceptByUser = function (acceptByUser) {
        this.acceptByUser = acceptByUser;
        return this;
    };
    FriendNamespaceDistributions.prototype.withAcceptByUser = function (acceptByUser) {
        this.acceptByUser = acceptByUser;
        return this;
    };
    FriendNamespaceDistributions.prototype.getRejectByUser = function () {
        return this.rejectByUser;
    };
    FriendNamespaceDistributions.prototype.setRejectByUser = function (rejectByUser) {
        this.rejectByUser = rejectByUser;
        return this;
    };
    FriendNamespaceDistributions.prototype.withRejectByUser = function (rejectByUser) {
        this.rejectByUser = rejectByUser;
        return this;
    };
    FriendNamespaceDistributions.prototype.getSendRequestByUser = function () {
        return this.sendRequestByUser;
    };
    FriendNamespaceDistributions.prototype.setSendRequestByUser = function (sendRequestByUser) {
        this.sendRequestByUser = sendRequestByUser;
        return this;
    };
    FriendNamespaceDistributions.prototype.withSendRequestByUser = function (sendRequestByUser) {
        this.sendRequestByUser = sendRequestByUser;
        return this;
    };
    FriendNamespaceDistributions.prototype.getNewFollowByUser = function () {
        return this.newFollowByUser;
    };
    FriendNamespaceDistributions.prototype.setNewFollowByUser = function (newFollowByUser) {
        this.newFollowByUser = newFollowByUser;
        return this;
    };
    FriendNamespaceDistributions.prototype.withNewFollowByUser = function (newFollowByUser) {
        this.newFollowByUser = newFollowByUser;
        return this;
    };
    FriendNamespaceDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FriendNamespaceDistributions()
            .withAcceptByUser(FriendNamespaceAcceptByUserDistribution_1.default.fromDict(data["acceptByUser"]))
            .withRejectByUser(FriendNamespaceRejectByUserDistribution_1.default.fromDict(data["rejectByUser"]))
            .withSendRequestByUser(FriendNamespaceSendRequestByUserDistribution_1.default.fromDict(data["sendRequestByUser"]))
            .withNewFollowByUser(FriendNamespaceNewFollowByUserDistribution_1.default.fromDict(data["newFollowByUser"]));
    };
    FriendNamespaceDistributions.prototype.toDict = function () {
        var _a, _b, _c, _d;
        return {
            "acceptByUser": (_a = this.getAcceptByUser()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "rejectByUser": (_b = this.getRejectByUser()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "sendRequestByUser": (_c = this.getSendRequestByUser()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "newFollowByUser": (_d = this.getNewFollowByUser()) === null || _d === void 0 ? void 0 : _d.toDict(),
        };
    };
    return FriendNamespaceDistributions;
}());
exports.default = FriendNamespaceDistributions;
//# sourceMappingURL=FriendNamespaceDistributions.js.map