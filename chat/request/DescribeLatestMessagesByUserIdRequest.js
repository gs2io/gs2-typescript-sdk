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
var DescribeLatestMessagesByUserIdRequest = /** @class */ (function () {
    function DescribeLatestMessagesByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.roomName = null;
        this.password = null;
        this.category = null;
        this.userId = null;
        this.limit = null;
        this.timeOffsetToken = null;
    }
    DescribeLatestMessagesByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.getRoomName = function () {
        return this.roomName;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.setRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.withRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.getPassword = function () {
        return this.password;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.getCategory = function () {
        return this.category;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.setCategory = function (category) {
        this.category = category;
        return this;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.withCategory = function (category) {
        this.category = category;
        return this;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeLatestMessagesByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeLatestMessagesByUserIdRequest.fromDict = function (data) {
        return new DescribeLatestMessagesByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRoomName(data["roomName"])
            .withPassword(data["password"])
            .withCategory(data["category"])
            .withUserId(data["userId"])
            .withLimit(data["limit"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DescribeLatestMessagesByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "roomName": this.getRoomName(),
            "password": this.getPassword(),
            "category": this.getCategory(),
            "userId": this.getUserId(),
            "limit": this.getLimit(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DescribeLatestMessagesByUserIdRequest;
}());
exports.default = DescribeLatestMessagesByUserIdRequest;
//# sourceMappingURL=DescribeLatestMessagesByUserIdRequest.js.map