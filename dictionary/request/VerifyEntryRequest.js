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
var VerifyEntryRequest = /** @class */ (function () {
    function VerifyEntryRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.entryModelName = null;
        this.verifyType = null;
        this.duplicationAvoider = null;
    }
    VerifyEntryRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyEntryRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyEntryRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyEntryRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyEntryRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyEntryRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyEntryRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyEntryRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyEntryRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyEntryRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyEntryRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyEntryRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyEntryRequest.prototype.getEntryModelName = function () {
        return this.entryModelName;
    };
    VerifyEntryRequest.prototype.setEntryModelName = function (entryModelName) {
        this.entryModelName = entryModelName;
        return this;
    };
    VerifyEntryRequest.prototype.withEntryModelName = function (entryModelName) {
        this.entryModelName = entryModelName;
        return this;
    };
    VerifyEntryRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyEntryRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyEntryRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyEntryRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyEntryRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyEntryRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyEntryRequest.fromDict = function (data) {
        return new VerifyEntryRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withEntryModelName(data["entryModelName"])
            .withVerifyType(data["verifyType"]);
    };
    VerifyEntryRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "entryModelName": this.getEntryModelName(),
            "verifyType": this.getVerifyType(),
        };
    };
    return VerifyEntryRequest;
}());
exports.default = VerifyEntryRequest;
//# sourceMappingURL=VerifyEntryRequest.js.map