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
var VerifyEntryCountRequest = /** @class */ (function () {
    function VerifyEntryCountRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.entryModelNames = null;
        this.verifyType = null;
        this.count = null;
        this.duplicationAvoider = null;
    }
    VerifyEntryCountRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyEntryCountRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyEntryCountRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyEntryCountRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyEntryCountRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyEntryCountRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyEntryCountRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyEntryCountRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyEntryCountRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyEntryCountRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyEntryCountRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyEntryCountRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyEntryCountRequest.prototype.getEntryModelNames = function () {
        return this.entryModelNames;
    };
    VerifyEntryCountRequest.prototype.setEntryModelNames = function (entryModelNames) {
        this.entryModelNames = entryModelNames;
        return this;
    };
    VerifyEntryCountRequest.prototype.withEntryModelNames = function (entryModelNames) {
        this.entryModelNames = entryModelNames;
        return this;
    };
    VerifyEntryCountRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyEntryCountRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyEntryCountRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyEntryCountRequest.prototype.getCount = function () {
        return this.count;
    };
    VerifyEntryCountRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    VerifyEntryCountRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    VerifyEntryCountRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyEntryCountRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyEntryCountRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyEntryCountRequest.fromDict = function (data) {
        return new VerifyEntryCountRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withEntryModelNames(data.entryModelNames ?
            data.entryModelNames.map(function (item) {
                return item;
            }) : null)
            .withVerifyType(data["verifyType"])
            .withCount(data["count"]);
    };
    VerifyEntryCountRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "entryModelNames": this.getEntryModelNames() ?
                this.getEntryModelNames().map(function (item) {
                    return item;
                }) : null,
            "verifyType": this.getVerifyType(),
            "count": this.getCount(),
        };
    };
    return VerifyEntryCountRequest;
}());
exports.default = VerifyEntryCountRequest;
//# sourceMappingURL=VerifyEntryCountRequest.js.map