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
var UpdateTakeOverByUserIdRequest = /** @class */ (function () {
    function UpdateTakeOverByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.type = null;
        this.oldPassword = null;
        this.password = null;
        this.duplicationAvoider = null;
    }
    UpdateTakeOverByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateTakeOverByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateTakeOverByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateTakeOverByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateTakeOverByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateTakeOverByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateTakeOverByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateTakeOverByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateTakeOverByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateTakeOverByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    UpdateTakeOverByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UpdateTakeOverByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UpdateTakeOverByUserIdRequest.prototype.getType = function () {
        return this.type;
    };
    UpdateTakeOverByUserIdRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    UpdateTakeOverByUserIdRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    UpdateTakeOverByUserIdRequest.prototype.getOldPassword = function () {
        return this.oldPassword;
    };
    UpdateTakeOverByUserIdRequest.prototype.setOldPassword = function (oldPassword) {
        this.oldPassword = oldPassword;
        return this;
    };
    UpdateTakeOverByUserIdRequest.prototype.withOldPassword = function (oldPassword) {
        this.oldPassword = oldPassword;
        return this;
    };
    UpdateTakeOverByUserIdRequest.prototype.getPassword = function () {
        return this.password;
    };
    UpdateTakeOverByUserIdRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    UpdateTakeOverByUserIdRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    UpdateTakeOverByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    UpdateTakeOverByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateTakeOverByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateTakeOverByUserIdRequest.fromDict = function (data) {
        return new UpdateTakeOverByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withType(data["type"])
            .withOldPassword(data["oldPassword"])
            .withPassword(data["password"]);
    };
    UpdateTakeOverByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "type": this.getType(),
            "oldPassword": this.getOldPassword(),
            "password": this.getPassword(),
        };
    };
    return UpdateTakeOverByUserIdRequest;
}());
exports.default = UpdateTakeOverByUserIdRequest;
//# sourceMappingURL=UpdateTakeOverByUserIdRequest.js.map