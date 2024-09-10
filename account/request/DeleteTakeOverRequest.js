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
var DeleteTakeOverRequest = /** @class */ (function () {
    function DeleteTakeOverRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.type = null;
        this.duplicationAvoider = null;
    }
    DeleteTakeOverRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteTakeOverRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteTakeOverRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteTakeOverRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteTakeOverRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteTakeOverRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteTakeOverRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteTakeOverRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteTakeOverRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteTakeOverRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DeleteTakeOverRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteTakeOverRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteTakeOverRequest.prototype.getType = function () {
        return this.type;
    };
    DeleteTakeOverRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    DeleteTakeOverRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    DeleteTakeOverRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteTakeOverRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteTakeOverRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteTakeOverRequest.fromDict = function (data) {
        return new DeleteTakeOverRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withType(data["type"]);
    };
    DeleteTakeOverRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "type": this.getType(),
        };
    };
    return DeleteTakeOverRequest;
}());
exports.default = DeleteTakeOverRequest;
//# sourceMappingURL=DeleteTakeOverRequest.js.map