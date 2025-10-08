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
var DescribeMessagesRequest = /** @class */ (function () {
    function DescribeMessagesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.roomName = null;
        this.password = null;
        this.category = null;
        this.accessToken = null;
        this.startAt = null;
        this.limit = null;
    }
    DescribeMessagesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeMessagesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeMessagesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeMessagesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeMessagesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeMessagesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeMessagesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeMessagesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeMessagesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeMessagesRequest.prototype.getRoomName = function () {
        return this.roomName;
    };
    DescribeMessagesRequest.prototype.setRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    DescribeMessagesRequest.prototype.withRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    DescribeMessagesRequest.prototype.getPassword = function () {
        return this.password;
    };
    DescribeMessagesRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    DescribeMessagesRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    DescribeMessagesRequest.prototype.getCategory = function () {
        return this.category;
    };
    DescribeMessagesRequest.prototype.setCategory = function (category) {
        this.category = category;
        return this;
    };
    DescribeMessagesRequest.prototype.withCategory = function (category) {
        this.category = category;
        return this;
    };
    DescribeMessagesRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeMessagesRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeMessagesRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeMessagesRequest.prototype.getStartAt = function () {
        return this.startAt;
    };
    DescribeMessagesRequest.prototype.setStartAt = function (startAt) {
        this.startAt = startAt;
        return this;
    };
    DescribeMessagesRequest.prototype.withStartAt = function (startAt) {
        this.startAt = startAt;
        return this;
    };
    DescribeMessagesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeMessagesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeMessagesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeMessagesRequest.fromDict = function (data) {
        return new DescribeMessagesRequest()
            .withNamespaceName(data["namespaceName"])
            .withRoomName(data["roomName"])
            .withPassword(data["password"])
            .withCategory(data["category"])
            .withAccessToken(data["accessToken"])
            .withStartAt(data["startAt"])
            .withLimit(data["limit"]);
    };
    DescribeMessagesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "roomName": this.getRoomName(),
            "password": this.getPassword(),
            "category": this.getCategory(),
            "accessToken": this.getAccessToken(),
            "startAt": this.getStartAt(),
            "limit": this.getLimit(),
        };
    };
    return DescribeMessagesRequest;
}());
exports.default = DescribeMessagesRequest;
//# sourceMappingURL=DescribeMessagesRequest.js.map