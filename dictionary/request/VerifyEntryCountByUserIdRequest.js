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
var VerifyEntryCountByUserIdRequest = /** @class */ (function () {
    function VerifyEntryCountByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.entryModelNames = null;
        this.verifyType = null;
        this.count = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    VerifyEntryCountByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyEntryCountByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyEntryCountByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyEntryCountByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyEntryCountByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyEntryCountByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyEntryCountByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyEntryCountByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyEntryCountByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyEntryCountByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyEntryCountByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyEntryCountByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyEntryCountByUserIdRequest.prototype.getEntryModelNames = function () {
        return this.entryModelNames;
    };
    VerifyEntryCountByUserIdRequest.prototype.setEntryModelNames = function (entryModelNames) {
        this.entryModelNames = entryModelNames;
        return this;
    };
    VerifyEntryCountByUserIdRequest.prototype.withEntryModelNames = function (entryModelNames) {
        this.entryModelNames = entryModelNames;
        return this;
    };
    VerifyEntryCountByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyEntryCountByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyEntryCountByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyEntryCountByUserIdRequest.prototype.getCount = function () {
        return this.count;
    };
    VerifyEntryCountByUserIdRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    VerifyEntryCountByUserIdRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    VerifyEntryCountByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    VerifyEntryCountByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyEntryCountByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyEntryCountByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyEntryCountByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyEntryCountByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyEntryCountByUserIdRequest.fromDict = function (data) {
        return new VerifyEntryCountByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withEntryModelNames(data.entryModelNames ?
            data.entryModelNames.map(function (item) {
                return item;
            }) : null)
            .withVerifyType(data["verifyType"])
            .withCount(data["count"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    VerifyEntryCountByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "entryModelNames": this.getEntryModelNames() ?
                this.getEntryModelNames().map(function (item) {
                    return item;
                }) : null,
            "verifyType": this.getVerifyType(),
            "count": this.getCount(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return VerifyEntryCountByUserIdRequest;
}());
exports.default = VerifyEntryCountByUserIdRequest;
//# sourceMappingURL=VerifyEntryCountByUserIdRequest.js.map