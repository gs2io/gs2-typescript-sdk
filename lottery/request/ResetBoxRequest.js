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
var ResetBoxRequest = /** @class */ (function () {
    function ResetBoxRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.prizeTableName = null;
        this.accessToken = null;
        this.duplicationAvoider = null;
    }
    ResetBoxRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ResetBoxRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ResetBoxRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ResetBoxRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ResetBoxRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ResetBoxRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ResetBoxRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ResetBoxRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ResetBoxRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ResetBoxRequest.prototype.getPrizeTableName = function () {
        return this.prizeTableName;
    };
    ResetBoxRequest.prototype.setPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    ResetBoxRequest.prototype.withPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    ResetBoxRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    ResetBoxRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ResetBoxRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ResetBoxRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ResetBoxRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ResetBoxRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ResetBoxRequest.fromDict = function (data) {
        return new ResetBoxRequest()
            .withNamespaceName(data["namespaceName"])
            .withPrizeTableName(data["prizeTableName"])
            .withAccessToken(data["accessToken"]);
    };
    ResetBoxRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "prizeTableName": this.getPrizeTableName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return ResetBoxRequest;
}());
exports.default = ResetBoxRequest;
//# sourceMappingURL=ResetBoxRequest.js.map