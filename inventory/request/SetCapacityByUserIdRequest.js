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
var SetCapacityByUserIdRequest = /** @class */ (function () {
    function SetCapacityByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.userId = null;
        this.newCapacityValue = null;
    }
    SetCapacityByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetCapacityByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetCapacityByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetCapacityByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetCapacityByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetCapacityByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetCapacityByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetCapacityByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetCapacityByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetCapacityByUserIdRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    SetCapacityByUserIdRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    SetCapacityByUserIdRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    SetCapacityByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SetCapacityByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetCapacityByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetCapacityByUserIdRequest.prototype.getNewCapacityValue = function () {
        return this.newCapacityValue;
    };
    SetCapacityByUserIdRequest.prototype.setNewCapacityValue = function (newCapacityValue) {
        this.newCapacityValue = newCapacityValue;
        return this;
    };
    SetCapacityByUserIdRequest.prototype.withNewCapacityValue = function (newCapacityValue) {
        this.newCapacityValue = newCapacityValue;
        return this;
    };
    SetCapacityByUserIdRequest.fromDict = function (data) {
        return new SetCapacityByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withUserId(data["userId"])
            .withNewCapacityValue(data["newCapacityValue"]);
    };
    SetCapacityByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "userId": this.getUserId(),
            "newCapacityValue": this.getNewCapacityValue(),
        };
    };
    return SetCapacityByUserIdRequest;
}());
export default SetCapacityByUserIdRequest;
//# sourceMappingURL=SetCapacityByUserIdRequest.js.map