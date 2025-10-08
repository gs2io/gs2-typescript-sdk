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
var DescribeReferenceOfByUserIdRequest = /** @class */ (function () {
    function DescribeReferenceOfByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.userId = null;
        this.itemName = null;
        this.itemSetName = null;
        this.timeOffsetToken = null;
    }
    DescribeReferenceOfByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeReferenceOfByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeReferenceOfByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeReferenceOfByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeReferenceOfByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeReferenceOfByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeReferenceOfByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeReferenceOfByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeReferenceOfByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeReferenceOfByUserIdRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    DescribeReferenceOfByUserIdRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DescribeReferenceOfByUserIdRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DescribeReferenceOfByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeReferenceOfByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeReferenceOfByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeReferenceOfByUserIdRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    DescribeReferenceOfByUserIdRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    DescribeReferenceOfByUserIdRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    DescribeReferenceOfByUserIdRequest.prototype.getItemSetName = function () {
        return this.itemSetName;
    };
    DescribeReferenceOfByUserIdRequest.prototype.setItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    DescribeReferenceOfByUserIdRequest.prototype.withItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    DescribeReferenceOfByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DescribeReferenceOfByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeReferenceOfByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeReferenceOfByUserIdRequest.fromDict = function (data) {
        return new DescribeReferenceOfByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withUserId(data["userId"])
            .withItemName(data["itemName"])
            .withItemSetName(data["itemSetName"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DescribeReferenceOfByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "userId": this.getUserId(),
            "itemName": this.getItemName(),
            "itemSetName": this.getItemSetName(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DescribeReferenceOfByUserIdRequest;
}());
exports.default = DescribeReferenceOfByUserIdRequest;
//# sourceMappingURL=DescribeReferenceOfByUserIdRequest.js.map