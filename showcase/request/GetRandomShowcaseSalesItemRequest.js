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
var GetRandomShowcaseSalesItemRequest = /** @class */ (function () {
    function GetRandomShowcaseSalesItemRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.showcaseName = null;
        this.displayItemName = null;
        this.accessToken = null;
    }
    GetRandomShowcaseSalesItemRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetRandomShowcaseSalesItemRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRandomShowcaseSalesItemRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRandomShowcaseSalesItemRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetRandomShowcaseSalesItemRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRandomShowcaseSalesItemRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRandomShowcaseSalesItemRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetRandomShowcaseSalesItemRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRandomShowcaseSalesItemRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRandomShowcaseSalesItemRequest.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    GetRandomShowcaseSalesItemRequest.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    GetRandomShowcaseSalesItemRequest.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    GetRandomShowcaseSalesItemRequest.prototype.getDisplayItemName = function () {
        return this.displayItemName;
    };
    GetRandomShowcaseSalesItemRequest.prototype.setDisplayItemName = function (displayItemName) {
        this.displayItemName = displayItemName;
        return this;
    };
    GetRandomShowcaseSalesItemRequest.prototype.withDisplayItemName = function (displayItemName) {
        this.displayItemName = displayItemName;
        return this;
    };
    GetRandomShowcaseSalesItemRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetRandomShowcaseSalesItemRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetRandomShowcaseSalesItemRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetRandomShowcaseSalesItemRequest.fromDict = function (data) {
        return new GetRandomShowcaseSalesItemRequest()
            .withNamespaceName(data["namespaceName"])
            .withShowcaseName(data["showcaseName"])
            .withDisplayItemName(data["displayItemName"])
            .withAccessToken(data["accessToken"]);
    };
    GetRandomShowcaseSalesItemRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcaseName": this.getShowcaseName(),
            "displayItemName": this.getDisplayItemName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return GetRandomShowcaseSalesItemRequest;
}());
exports.default = GetRandomShowcaseSalesItemRequest;
//# sourceMappingURL=GetRandomShowcaseSalesItemRequest.js.map