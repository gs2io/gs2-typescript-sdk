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
var AddLikesByUserIdRequest = /** @class */ (function () {
    function AddLikesByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.entryModelNames = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    AddLikesByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AddLikesByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddLikesByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddLikesByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AddLikesByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddLikesByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddLikesByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AddLikesByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddLikesByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddLikesByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AddLikesByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AddLikesByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AddLikesByUserIdRequest.prototype.getEntryModelNames = function () {
        return this.entryModelNames;
    };
    AddLikesByUserIdRequest.prototype.setEntryModelNames = function (entryModelNames) {
        this.entryModelNames = entryModelNames;
        return this;
    };
    AddLikesByUserIdRequest.prototype.withEntryModelNames = function (entryModelNames) {
        this.entryModelNames = entryModelNames;
        return this;
    };
    AddLikesByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    AddLikesByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AddLikesByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AddLikesByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AddLikesByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AddLikesByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AddLikesByUserIdRequest.fromDict = function (data) {
        return new AddLikesByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withEntryModelNames(data.entryModelNames ?
            data.entryModelNames.map(function (item) {
                return item;
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    AddLikesByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "entryModelNames": this.getEntryModelNames() ?
                this.getEntryModelNames().map(function (item) {
                    return item;
                }) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return AddLikesByUserIdRequest;
}());
exports.default = AddLikesByUserIdRequest;
//# sourceMappingURL=AddLikesByUserIdRequest.js.map