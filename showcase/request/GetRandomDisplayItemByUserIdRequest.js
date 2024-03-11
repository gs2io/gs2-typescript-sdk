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
var GetRandomDisplayItemByUserIdRequest = /** @class */ (function () {
    function GetRandomDisplayItemByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.showcaseName = null;
        this.displayItemName = null;
        this.userId = null;
        this.timeOffsetToken = null;
    }
    GetRandomDisplayItemByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetRandomDisplayItemByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRandomDisplayItemByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRandomDisplayItemByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetRandomDisplayItemByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRandomDisplayItemByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRandomDisplayItemByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetRandomDisplayItemByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRandomDisplayItemByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRandomDisplayItemByUserIdRequest.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    GetRandomDisplayItemByUserIdRequest.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    GetRandomDisplayItemByUserIdRequest.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    GetRandomDisplayItemByUserIdRequest.prototype.getDisplayItemName = function () {
        return this.displayItemName;
    };
    GetRandomDisplayItemByUserIdRequest.prototype.setDisplayItemName = function (displayItemName) {
        this.displayItemName = displayItemName;
        return this;
    };
    GetRandomDisplayItemByUserIdRequest.prototype.withDisplayItemName = function (displayItemName) {
        this.displayItemName = displayItemName;
        return this;
    };
    GetRandomDisplayItemByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetRandomDisplayItemByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetRandomDisplayItemByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetRandomDisplayItemByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetRandomDisplayItemByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetRandomDisplayItemByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetRandomDisplayItemByUserIdRequest.fromDict = function (data) {
        return new GetRandomDisplayItemByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withShowcaseName(data["showcaseName"])
            .withDisplayItemName(data["displayItemName"])
            .withUserId(data["userId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetRandomDisplayItemByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcaseName": this.getShowcaseName(),
            "displayItemName": this.getDisplayItemName(),
            "userId": this.getUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetRandomDisplayItemByUserIdRequest;
}());
exports.default = GetRandomDisplayItemByUserIdRequest;
//# sourceMappingURL=GetRandomDisplayItemByUserIdRequest.js.map