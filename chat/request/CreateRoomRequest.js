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
var CreateRoomRequest = /** @class */ (function () {
    function CreateRoomRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.name = null;
        this.metadata = null;
        this.password = null;
        this.whiteListUserIds = null;
        this.duplicationAvoider = null;
    }
    CreateRoomRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateRoomRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateRoomRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateRoomRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateRoomRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateRoomRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateRoomRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateRoomRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateRoomRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateRoomRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    CreateRoomRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    CreateRoomRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    CreateRoomRequest.prototype.getName = function () {
        return this.name;
    };
    CreateRoomRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateRoomRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateRoomRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateRoomRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateRoomRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateRoomRequest.prototype.getPassword = function () {
        return this.password;
    };
    CreateRoomRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    CreateRoomRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    CreateRoomRequest.prototype.getWhiteListUserIds = function () {
        return this.whiteListUserIds;
    };
    CreateRoomRequest.prototype.setWhiteListUserIds = function (whiteListUserIds) {
        this.whiteListUserIds = whiteListUserIds;
        return this;
    };
    CreateRoomRequest.prototype.withWhiteListUserIds = function (whiteListUserIds) {
        this.whiteListUserIds = whiteListUserIds;
        return this;
    };
    CreateRoomRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    CreateRoomRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreateRoomRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreateRoomRequest.fromDict = function (data) {
        return new CreateRoomRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withPassword(data["password"])
            .withWhiteListUserIds(data.whiteListUserIds ?
            data.whiteListUserIds.map(function (item) {
                return item;
            }) : []);
    };
    CreateRoomRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "password": this.getPassword(),
            "whiteListUserIds": this.getWhiteListUserIds() ?
                this.getWhiteListUserIds().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return CreateRoomRequest;
}());
exports.default = CreateRoomRequest;
//# sourceMappingURL=CreateRoomRequest.js.map