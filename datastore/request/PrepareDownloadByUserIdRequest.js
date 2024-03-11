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
var PrepareDownloadByUserIdRequest = /** @class */ (function () {
    function PrepareDownloadByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.dataObjectId = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    PrepareDownloadByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PrepareDownloadByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareDownloadByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareDownloadByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PrepareDownloadByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareDownloadByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareDownloadByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PrepareDownloadByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareDownloadByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareDownloadByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    PrepareDownloadByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PrepareDownloadByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PrepareDownloadByUserIdRequest.prototype.getDataObjectId = function () {
        return this.dataObjectId;
    };
    PrepareDownloadByUserIdRequest.prototype.setDataObjectId = function (dataObjectId) {
        this.dataObjectId = dataObjectId;
        return this;
    };
    PrepareDownloadByUserIdRequest.prototype.withDataObjectId = function (dataObjectId) {
        this.dataObjectId = dataObjectId;
        return this;
    };
    PrepareDownloadByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    PrepareDownloadByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    PrepareDownloadByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    PrepareDownloadByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    PrepareDownloadByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PrepareDownloadByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PrepareDownloadByUserIdRequest.fromDict = function (data) {
        return new PrepareDownloadByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withDataObjectId(data["dataObjectId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    PrepareDownloadByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "dataObjectId": this.getDataObjectId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return PrepareDownloadByUserIdRequest;
}());
exports.default = PrepareDownloadByUserIdRequest;
//# sourceMappingURL=PrepareDownloadByUserIdRequest.js.map