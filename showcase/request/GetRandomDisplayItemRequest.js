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
var GetRandomDisplayItemRequest = /** @class */ (function () {
    function GetRandomDisplayItemRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.showcaseName = null;
        this.displayItemName = null;
        this.accessToken = null;
    }
    GetRandomDisplayItemRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetRandomDisplayItemRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRandomDisplayItemRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRandomDisplayItemRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetRandomDisplayItemRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRandomDisplayItemRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRandomDisplayItemRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetRandomDisplayItemRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRandomDisplayItemRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRandomDisplayItemRequest.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    GetRandomDisplayItemRequest.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    GetRandomDisplayItemRequest.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    GetRandomDisplayItemRequest.prototype.getDisplayItemName = function () {
        return this.displayItemName;
    };
    GetRandomDisplayItemRequest.prototype.setDisplayItemName = function (displayItemName) {
        this.displayItemName = displayItemName;
        return this;
    };
    GetRandomDisplayItemRequest.prototype.withDisplayItemName = function (displayItemName) {
        this.displayItemName = displayItemName;
        return this;
    };
    GetRandomDisplayItemRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetRandomDisplayItemRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetRandomDisplayItemRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetRandomDisplayItemRequest.fromDict = function (data) {
        return new GetRandomDisplayItemRequest()
            .withNamespaceName(data["namespaceName"])
            .withShowcaseName(data["showcaseName"])
            .withDisplayItemName(data["displayItemName"])
            .withAccessToken(data["accessToken"]);
    };
    GetRandomDisplayItemRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcaseName": this.getShowcaseName(),
            "displayItemName": this.getDisplayItemName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return GetRandomDisplayItemRequest;
}());
exports.default = GetRandomDisplayItemRequest;
//# sourceMappingURL=GetRandomDisplayItemRequest.js.map