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
var CreateRoomFromBackendRequest = /** @class */ (function () {
    function CreateRoomFromBackendRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.userId = null;
        this.metadata = null;
        this.password = null;
        this.whiteListUserIds = null;
    }
    CreateRoomFromBackendRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateRoomFromBackendRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateRoomFromBackendRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateRoomFromBackendRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateRoomFromBackendRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateRoomFromBackendRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateRoomFromBackendRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateRoomFromBackendRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateRoomFromBackendRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateRoomFromBackendRequest.prototype.getName = function () {
        return this.name;
    };
    CreateRoomFromBackendRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateRoomFromBackendRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateRoomFromBackendRequest.prototype.getUserId = function () {
        return this.userId;
    };
    CreateRoomFromBackendRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CreateRoomFromBackendRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CreateRoomFromBackendRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateRoomFromBackendRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateRoomFromBackendRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateRoomFromBackendRequest.prototype.getPassword = function () {
        return this.password;
    };
    CreateRoomFromBackendRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    CreateRoomFromBackendRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    CreateRoomFromBackendRequest.prototype.getWhiteListUserIds = function () {
        return this.whiteListUserIds;
    };
    CreateRoomFromBackendRequest.prototype.setWhiteListUserIds = function (whiteListUserIds) {
        this.whiteListUserIds = whiteListUserIds;
        return this;
    };
    CreateRoomFromBackendRequest.prototype.withWhiteListUserIds = function (whiteListUserIds) {
        this.whiteListUserIds = whiteListUserIds;
        return this;
    };
    CreateRoomFromBackendRequest.fromDict = function (data) {
        return new CreateRoomFromBackendRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withUserId(data["userId"])
            .withMetadata(data["metadata"])
            .withPassword(data["password"])
            .withWhiteListUserIds(data.whiteListUserIds ?
            data.whiteListUserIds.map(function (item) {
                return item;
            }) : []);
    };
    CreateRoomFromBackendRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "userId": this.getUserId(),
            "metadata": this.getMetadata(),
            "password": this.getPassword(),
            "whiteListUserIds": this.getWhiteListUserIds() ?
                this.getWhiteListUserIds().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return CreateRoomFromBackendRequest;
}());
export default CreateRoomFromBackendRequest;
//# sourceMappingURL=CreateRoomFromBackendRequest.js.map