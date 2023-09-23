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
var RemoveBanRequest = /** @class */ (function () {
    function RemoveBanRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.banStatusName = null;
        this.duplicationAvoider = null;
    }
    RemoveBanRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RemoveBanRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RemoveBanRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RemoveBanRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RemoveBanRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RemoveBanRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RemoveBanRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RemoveBanRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RemoveBanRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RemoveBanRequest.prototype.getUserId = function () {
        return this.userId;
    };
    RemoveBanRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RemoveBanRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RemoveBanRequest.prototype.getBanStatusName = function () {
        return this.banStatusName;
    };
    RemoveBanRequest.prototype.setBanStatusName = function (banStatusName) {
        this.banStatusName = banStatusName;
        return this;
    };
    RemoveBanRequest.prototype.withBanStatusName = function (banStatusName) {
        this.banStatusName = banStatusName;
        return this;
    };
    RemoveBanRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    RemoveBanRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RemoveBanRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RemoveBanRequest.fromDict = function (data) {
        return new RemoveBanRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withBanStatusName(data["banStatusName"]);
    };
    RemoveBanRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "banStatusName": this.getBanStatusName(),
        };
    };
    return RemoveBanRequest;
}());
exports.default = RemoveBanRequest;
//# sourceMappingURL=RemoveBanRequest.js.map