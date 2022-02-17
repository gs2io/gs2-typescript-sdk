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
var AddCapacityByUserIdRequest = /** @class */ (function () {
    function AddCapacityByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.userId = null;
        this.addCapacityValue = null;
    }
    AddCapacityByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AddCapacityByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddCapacityByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddCapacityByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AddCapacityByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddCapacityByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddCapacityByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AddCapacityByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddCapacityByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddCapacityByUserIdRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    AddCapacityByUserIdRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    AddCapacityByUserIdRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    AddCapacityByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AddCapacityByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AddCapacityByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AddCapacityByUserIdRequest.prototype.getAddCapacityValue = function () {
        return this.addCapacityValue;
    };
    AddCapacityByUserIdRequest.prototype.setAddCapacityValue = function (addCapacityValue) {
        this.addCapacityValue = addCapacityValue;
        return this;
    };
    AddCapacityByUserIdRequest.prototype.withAddCapacityValue = function (addCapacityValue) {
        this.addCapacityValue = addCapacityValue;
        return this;
    };
    AddCapacityByUserIdRequest.fromDict = function (data) {
        return new AddCapacityByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withUserId(data["userId"])
            .withAddCapacityValue(data["addCapacityValue"]);
    };
    AddCapacityByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "userId": this.getUserId(),
            "addCapacityValue": this.getAddCapacityValue(),
        };
    };
    return AddCapacityByUserIdRequest;
}());
exports.default = AddCapacityByUserIdRequest;
//# sourceMappingURL=AddCapacityByUserIdRequest.js.map