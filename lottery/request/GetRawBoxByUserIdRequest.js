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
var GetRawBoxByUserIdRequest = /** @class */ (function () {
    function GetRawBoxByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.prizeTableName = null;
        this.userId = null;
    }
    GetRawBoxByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetRawBoxByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRawBoxByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRawBoxByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetRawBoxByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRawBoxByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRawBoxByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetRawBoxByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRawBoxByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRawBoxByUserIdRequest.prototype.getPrizeTableName = function () {
        return this.prizeTableName;
    };
    GetRawBoxByUserIdRequest.prototype.setPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    GetRawBoxByUserIdRequest.prototype.withPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    GetRawBoxByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetRawBoxByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetRawBoxByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetRawBoxByUserIdRequest.fromDict = function (data) {
        return new GetRawBoxByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withPrizeTableName(data["prizeTableName"])
            .withUserId(data["userId"]);
    };
    GetRawBoxByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "prizeTableName": this.getPrizeTableName(),
            "userId": this.getUserId(),
        };
    };
    return GetRawBoxByUserIdRequest;
}());
exports.default = GetRawBoxByUserIdRequest;
//# sourceMappingURL=GetRawBoxByUserIdRequest.js.map