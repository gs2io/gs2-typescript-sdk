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
var DeleteFormByUserIdRequest = /** @class */ (function () {
    function DeleteFormByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.moldModelName = null;
        this.index = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    DeleteFormByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteFormByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteFormByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteFormByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteFormByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteFormByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteFormByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteFormByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteFormByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteFormByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteFormByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteFormByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteFormByUserIdRequest.prototype.getMoldModelName = function () {
        return this.moldModelName;
    };
    DeleteFormByUserIdRequest.prototype.setMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    DeleteFormByUserIdRequest.prototype.withMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    DeleteFormByUserIdRequest.prototype.getIndex = function () {
        return this.index;
    };
    DeleteFormByUserIdRequest.prototype.setIndex = function (index) {
        this.index = index;
        return this;
    };
    DeleteFormByUserIdRequest.prototype.withIndex = function (index) {
        this.index = index;
        return this;
    };
    DeleteFormByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DeleteFormByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeleteFormByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeleteFormByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteFormByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteFormByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteFormByUserIdRequest.fromDict = function (data) {
        return new DeleteFormByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withMoldModelName(data["moldModelName"])
            .withIndex(data["index"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DeleteFormByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "moldModelName": this.getMoldModelName(),
            "index": this.getIndex(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DeleteFormByUserIdRequest;
}());
exports.default = DeleteFormByUserIdRequest;
//# sourceMappingURL=DeleteFormByUserIdRequest.js.map