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
var GetInventoryRequest = /** @class */ (function () {
    function GetInventoryRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.accessToken = null;
    }
    GetInventoryRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetInventoryRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetInventoryRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetInventoryRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetInventoryRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetInventoryRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetInventoryRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetInventoryRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetInventoryRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetInventoryRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    GetInventoryRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetInventoryRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetInventoryRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetInventoryRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetInventoryRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetInventoryRequest.fromDict = function (data) {
        return new GetInventoryRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withAccessToken(data["accessToken"]);
    };
    GetInventoryRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return GetInventoryRequest;
}());
exports.default = GetInventoryRequest;
//# sourceMappingURL=GetInventoryRequest.js.map