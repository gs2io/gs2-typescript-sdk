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
var DescribeReferenceOfRequest = /** @class */ (function () {
    function DescribeReferenceOfRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.accessToken = null;
        this.itemName = null;
        this.itemSetName = null;
    }
    DescribeReferenceOfRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeReferenceOfRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeReferenceOfRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeReferenceOfRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeReferenceOfRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeReferenceOfRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeReferenceOfRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeReferenceOfRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeReferenceOfRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeReferenceOfRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    DescribeReferenceOfRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DescribeReferenceOfRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DescribeReferenceOfRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeReferenceOfRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeReferenceOfRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeReferenceOfRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    DescribeReferenceOfRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    DescribeReferenceOfRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    DescribeReferenceOfRequest.prototype.getItemSetName = function () {
        return this.itemSetName;
    };
    DescribeReferenceOfRequest.prototype.setItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    DescribeReferenceOfRequest.prototype.withItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    DescribeReferenceOfRequest.fromDict = function (data) {
        return new DescribeReferenceOfRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withAccessToken(data["accessToken"])
            .withItemName(data["itemName"])
            .withItemSetName(data["itemSetName"]);
    };
    DescribeReferenceOfRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "accessToken": this.getAccessToken(),
            "itemName": this.getItemName(),
            "itemSetName": this.getItemSetName(),
        };
    };
    return DescribeReferenceOfRequest;
}());
export default DescribeReferenceOfRequest;
//# sourceMappingURL=DescribeReferenceOfRequest.js.map