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
var GetRandomShowcaseSalesItemByUserIdRequest = /** @class */ (function () {
    function GetRandomShowcaseSalesItemByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.showcaseName = null;
        this.displayItemName = null;
        this.userId = null;
    }
    GetRandomShowcaseSalesItemByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetRandomShowcaseSalesItemByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRandomShowcaseSalesItemByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRandomShowcaseSalesItemByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetRandomShowcaseSalesItemByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRandomShowcaseSalesItemByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRandomShowcaseSalesItemByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetRandomShowcaseSalesItemByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRandomShowcaseSalesItemByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRandomShowcaseSalesItemByUserIdRequest.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    GetRandomShowcaseSalesItemByUserIdRequest.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    GetRandomShowcaseSalesItemByUserIdRequest.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    GetRandomShowcaseSalesItemByUserIdRequest.prototype.getDisplayItemName = function () {
        return this.displayItemName;
    };
    GetRandomShowcaseSalesItemByUserIdRequest.prototype.setDisplayItemName = function (displayItemName) {
        this.displayItemName = displayItemName;
        return this;
    };
    GetRandomShowcaseSalesItemByUserIdRequest.prototype.withDisplayItemName = function (displayItemName) {
        this.displayItemName = displayItemName;
        return this;
    };
    GetRandomShowcaseSalesItemByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetRandomShowcaseSalesItemByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetRandomShowcaseSalesItemByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetRandomShowcaseSalesItemByUserIdRequest.fromDict = function (data) {
        return new GetRandomShowcaseSalesItemByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withShowcaseName(data["showcaseName"])
            .withDisplayItemName(data["displayItemName"])
            .withUserId(data["userId"]);
    };
    GetRandomShowcaseSalesItemByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcaseName": this.getShowcaseName(),
            "displayItemName": this.getDisplayItemName(),
            "userId": this.getUserId(),
        };
    };
    return GetRandomShowcaseSalesItemByUserIdRequest;
}());
exports.default = GetRandomShowcaseSalesItemByUserIdRequest;
//# sourceMappingURL=GetRandomShowcaseSalesItemByUserIdRequest.js.map