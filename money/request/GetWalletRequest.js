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
var GetWalletRequest = /** @class */ (function () {
    function GetWalletRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.slot = null;
    }
    GetWalletRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetWalletRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetWalletRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetWalletRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetWalletRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetWalletRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetWalletRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetWalletRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetWalletRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetWalletRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetWalletRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetWalletRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetWalletRequest.prototype.getSlot = function () {
        return this.slot;
    };
    GetWalletRequest.prototype.setSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    GetWalletRequest.prototype.withSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    GetWalletRequest.fromDict = function (data) {
        return new GetWalletRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withSlot(data["slot"]);
    };
    GetWalletRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "slot": this.getSlot(),
        };
    };
    return GetWalletRequest;
}());
exports.default = GetWalletRequest;
//# sourceMappingURL=GetWalletRequest.js.map