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
var Gs2Account = tslib_1.__importStar(require("../model"));
var AddBanRequest = /** @class */ (function () {
    function AddBanRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.banStatus = null;
        this.duplicationAvoider = null;
    }
    AddBanRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AddBanRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddBanRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddBanRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AddBanRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddBanRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddBanRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AddBanRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddBanRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddBanRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AddBanRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AddBanRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AddBanRequest.prototype.getBanStatus = function () {
        return this.banStatus;
    };
    AddBanRequest.prototype.setBanStatus = function (banStatus) {
        this.banStatus = banStatus;
        return this;
    };
    AddBanRequest.prototype.withBanStatus = function (banStatus) {
        this.banStatus = banStatus;
        return this;
    };
    AddBanRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AddBanRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AddBanRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AddBanRequest.fromDict = function (data) {
        return new AddBanRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withBanStatus(Gs2Account.BanStatus.fromDict(data["banStatus"]));
    };
    AddBanRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "banStatus": (_a = this.getBanStatus()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return AddBanRequest;
}());
exports.default = AddBanRequest;
//# sourceMappingURL=AddBanRequest.js.map