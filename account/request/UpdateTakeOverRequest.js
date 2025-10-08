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
var UpdateTakeOverRequest = /** @class */ (function () {
    function UpdateTakeOverRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.type = null;
        this.oldPassword = null;
        this.password = null;
        this.duplicationAvoider = null;
    }
    UpdateTakeOverRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateTakeOverRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateTakeOverRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateTakeOverRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateTakeOverRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateTakeOverRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateTakeOverRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateTakeOverRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateTakeOverRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateTakeOverRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    UpdateTakeOverRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UpdateTakeOverRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UpdateTakeOverRequest.prototype.getType = function () {
        return this.type;
    };
    UpdateTakeOverRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    UpdateTakeOverRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    UpdateTakeOverRequest.prototype.getOldPassword = function () {
        return this.oldPassword;
    };
    UpdateTakeOverRequest.prototype.setOldPassword = function (oldPassword) {
        this.oldPassword = oldPassword;
        return this;
    };
    UpdateTakeOverRequest.prototype.withOldPassword = function (oldPassword) {
        this.oldPassword = oldPassword;
        return this;
    };
    UpdateTakeOverRequest.prototype.getPassword = function () {
        return this.password;
    };
    UpdateTakeOverRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    UpdateTakeOverRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    UpdateTakeOverRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    UpdateTakeOverRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateTakeOverRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateTakeOverRequest.fromDict = function (data) {
        return new UpdateTakeOverRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withType(data["type"])
            .withOldPassword(data["oldPassword"])
            .withPassword(data["password"]);
    };
    UpdateTakeOverRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "type": this.getType(),
            "oldPassword": this.getOldPassword(),
            "password": this.getPassword(),
        };
    };
    return UpdateTakeOverRequest;
}());
exports.default = UpdateTakeOverRequest;
//# sourceMappingURL=UpdateTakeOverRequest.js.map