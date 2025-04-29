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
var DescribeMessagesByUserIdRequest = /** @class */ (function () {
    function DescribeMessagesByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.roomName = null;
        this.password = null;
        this.category = null;
        this.userId = null;
        this.startAt = null;
        this.limit = null;
        this.timeOffsetToken = null;
    }
    DescribeMessagesByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeMessagesByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeMessagesByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeMessagesByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeMessagesByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeMessagesByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeMessagesByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeMessagesByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeMessagesByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeMessagesByUserIdRequest.prototype.getRoomName = function () {
        return this.roomName;
    };
    DescribeMessagesByUserIdRequest.prototype.setRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    DescribeMessagesByUserIdRequest.prototype.withRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    DescribeMessagesByUserIdRequest.prototype.getPassword = function () {
        return this.password;
    };
    DescribeMessagesByUserIdRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    DescribeMessagesByUserIdRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    DescribeMessagesByUserIdRequest.prototype.getCategory = function () {
        return this.category;
    };
    DescribeMessagesByUserIdRequest.prototype.setCategory = function (category) {
        this.category = category;
        return this;
    };
    DescribeMessagesByUserIdRequest.prototype.withCategory = function (category) {
        this.category = category;
        return this;
    };
    DescribeMessagesByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeMessagesByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeMessagesByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeMessagesByUserIdRequest.prototype.getStartAt = function () {
        return this.startAt;
    };
    DescribeMessagesByUserIdRequest.prototype.setStartAt = function (startAt) {
        this.startAt = startAt;
        return this;
    };
    DescribeMessagesByUserIdRequest.prototype.withStartAt = function (startAt) {
        this.startAt = startAt;
        return this;
    };
    DescribeMessagesByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeMessagesByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeMessagesByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeMessagesByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DescribeMessagesByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeMessagesByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeMessagesByUserIdRequest.fromDict = function (data) {
        return new DescribeMessagesByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRoomName(data["roomName"])
            .withPassword(data["password"])
            .withCategory(data["category"])
            .withUserId(data["userId"])
            .withStartAt(data["startAt"])
            .withLimit(data["limit"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DescribeMessagesByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "roomName": this.getRoomName(),
            "password": this.getPassword(),
            "category": this.getCategory(),
            "userId": this.getUserId(),
            "startAt": this.getStartAt(),
            "limit": this.getLimit(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DescribeMessagesByUserIdRequest;
}());
exports.default = DescribeMessagesByUserIdRequest;
//# sourceMappingURL=DescribeMessagesByUserIdRequest.js.map