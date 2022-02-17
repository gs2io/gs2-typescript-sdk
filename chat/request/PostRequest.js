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
var PostRequest = /** @class */ (function () {
    function PostRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.roomName = null;
        this.accessToken = null;
        this.category = null;
        this.metadata = null;
        this.password = null;
    }
    PostRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PostRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PostRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PostRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PostRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PostRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PostRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PostRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PostRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PostRequest.prototype.getRoomName = function () {
        return this.roomName;
    };
    PostRequest.prototype.setRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    PostRequest.prototype.withRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    PostRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    PostRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PostRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PostRequest.prototype.getCategory = function () {
        return this.category;
    };
    PostRequest.prototype.setCategory = function (category) {
        this.category = category;
        return this;
    };
    PostRequest.prototype.withCategory = function (category) {
        this.category = category;
        return this;
    };
    PostRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    PostRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PostRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PostRequest.prototype.getPassword = function () {
        return this.password;
    };
    PostRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    PostRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    PostRequest.fromDict = function (data) {
        return new PostRequest()
            .withNamespaceName(data["namespaceName"])
            .withRoomName(data["roomName"])
            .withAccessToken(data["accessToken"])
            .withCategory(data["category"])
            .withMetadata(data["metadata"])
            .withPassword(data["password"]);
    };
    PostRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "roomName": this.getRoomName(),
            "accessToken": this.getAccessToken(),
            "category": this.getCategory(),
            "metadata": this.getMetadata(),
            "password": this.getPassword(),
        };
    };
    return PostRequest;
}());
exports.default = PostRequest;
//# sourceMappingURL=PostRequest.js.map