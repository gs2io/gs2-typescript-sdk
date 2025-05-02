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
var UpdateDataOwnerByUserIdRequest = /** @class */ (function () {
    function UpdateDataOwnerByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.dataOwnerName = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    UpdateDataOwnerByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateDataOwnerByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateDataOwnerByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateDataOwnerByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateDataOwnerByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateDataOwnerByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateDataOwnerByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateDataOwnerByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateDataOwnerByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateDataOwnerByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    UpdateDataOwnerByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UpdateDataOwnerByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UpdateDataOwnerByUserIdRequest.prototype.getDataOwnerName = function () {
        return this.dataOwnerName;
    };
    UpdateDataOwnerByUserIdRequest.prototype.setDataOwnerName = function (dataOwnerName) {
        this.dataOwnerName = dataOwnerName;
        return this;
    };
    UpdateDataOwnerByUserIdRequest.prototype.withDataOwnerName = function (dataOwnerName) {
        this.dataOwnerName = dataOwnerName;
        return this;
    };
    UpdateDataOwnerByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    UpdateDataOwnerByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    UpdateDataOwnerByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    UpdateDataOwnerByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    UpdateDataOwnerByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateDataOwnerByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateDataOwnerByUserIdRequest.fromDict = function (data) {
        return new UpdateDataOwnerByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withDataOwnerName(data["dataOwnerName"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    UpdateDataOwnerByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "dataOwnerName": this.getDataOwnerName(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return UpdateDataOwnerByUserIdRequest;
}());
exports.default = UpdateDataOwnerByUserIdRequest;
//# sourceMappingURL=UpdateDataOwnerByUserIdRequest.js.map