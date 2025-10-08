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
var DescribeLatestMessagesRequest = /** @class */ (function () {
    function DescribeLatestMessagesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.roomName = null;
        this.password = null;
        this.category = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeLatestMessagesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeLatestMessagesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeLatestMessagesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeLatestMessagesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeLatestMessagesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeLatestMessagesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeLatestMessagesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeLatestMessagesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeLatestMessagesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeLatestMessagesRequest.prototype.getRoomName = function () {
        return this.roomName;
    };
    DescribeLatestMessagesRequest.prototype.setRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    DescribeLatestMessagesRequest.prototype.withRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    DescribeLatestMessagesRequest.prototype.getPassword = function () {
        return this.password;
    };
    DescribeLatestMessagesRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    DescribeLatestMessagesRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    DescribeLatestMessagesRequest.prototype.getCategory = function () {
        return this.category;
    };
    DescribeLatestMessagesRequest.prototype.setCategory = function (category) {
        this.category = category;
        return this;
    };
    DescribeLatestMessagesRequest.prototype.withCategory = function (category) {
        this.category = category;
        return this;
    };
    DescribeLatestMessagesRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeLatestMessagesRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeLatestMessagesRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeLatestMessagesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeLatestMessagesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeLatestMessagesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeLatestMessagesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeLatestMessagesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeLatestMessagesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeLatestMessagesRequest.fromDict = function (data) {
        return new DescribeLatestMessagesRequest()
            .withNamespaceName(data["namespaceName"])
            .withRoomName(data["roomName"])
            .withPassword(data["password"])
            .withCategory(data["category"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeLatestMessagesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "roomName": this.getRoomName(),
            "password": this.getPassword(),
            "category": this.getCategory(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeLatestMessagesRequest;
}());
exports.default = DescribeLatestMessagesRequest;
//# sourceMappingURL=DescribeLatestMessagesRequest.js.map