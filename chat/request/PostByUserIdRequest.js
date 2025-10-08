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
var PostByUserIdRequest = /** @class */ (function () {
    function PostByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.roomName = null;
        this.userId = null;
        this.category = null;
        this.metadata = null;
        this.password = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    PostByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PostByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PostByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PostByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PostByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PostByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PostByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PostByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PostByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PostByUserIdRequest.prototype.getRoomName = function () {
        return this.roomName;
    };
    PostByUserIdRequest.prototype.setRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    PostByUserIdRequest.prototype.withRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    PostByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    PostByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PostByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PostByUserIdRequest.prototype.getCategory = function () {
        return this.category;
    };
    PostByUserIdRequest.prototype.setCategory = function (category) {
        this.category = category;
        return this;
    };
    PostByUserIdRequest.prototype.withCategory = function (category) {
        this.category = category;
        return this;
    };
    PostByUserIdRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    PostByUserIdRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PostByUserIdRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PostByUserIdRequest.prototype.getPassword = function () {
        return this.password;
    };
    PostByUserIdRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    PostByUserIdRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    PostByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    PostByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    PostByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    PostByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    PostByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PostByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PostByUserIdRequest.fromDict = function (data) {
        return new PostByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRoomName(data["roomName"])
            .withUserId(data["userId"])
            .withCategory(data["category"])
            .withMetadata(data["metadata"])
            .withPassword(data["password"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    PostByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "roomName": this.getRoomName(),
            "userId": this.getUserId(),
            "category": this.getCategory(),
            "metadata": this.getMetadata(),
            "password": this.getPassword(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return PostByUserIdRequest;
}());
exports.default = PostByUserIdRequest;
//# sourceMappingURL=PostByUserIdRequest.js.map