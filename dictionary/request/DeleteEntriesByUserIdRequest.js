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
var DeleteEntriesByUserIdRequest = /** @class */ (function () {
    function DeleteEntriesByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.entryModelNames = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    DeleteEntriesByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteEntriesByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteEntriesByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteEntriesByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteEntriesByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteEntriesByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteEntriesByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteEntriesByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteEntriesByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteEntriesByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteEntriesByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteEntriesByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteEntriesByUserIdRequest.prototype.getEntryModelNames = function () {
        return this.entryModelNames;
    };
    DeleteEntriesByUserIdRequest.prototype.setEntryModelNames = function (entryModelNames) {
        this.entryModelNames = entryModelNames;
        return this;
    };
    DeleteEntriesByUserIdRequest.prototype.withEntryModelNames = function (entryModelNames) {
        this.entryModelNames = entryModelNames;
        return this;
    };
    DeleteEntriesByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DeleteEntriesByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeleteEntriesByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeleteEntriesByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteEntriesByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteEntriesByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteEntriesByUserIdRequest.fromDict = function (data) {
        return new DeleteEntriesByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withEntryModelNames(data.entryModelNames ?
            data.entryModelNames.map(function (item) {
                return item;
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DeleteEntriesByUserIdRequest.prototype.toDict = function () {
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
    return DeleteEntriesByUserIdRequest;
}());
exports.default = DeleteEntriesByUserIdRequest;
//# sourceMappingURL=DeleteEntriesByUserIdRequest.js.map