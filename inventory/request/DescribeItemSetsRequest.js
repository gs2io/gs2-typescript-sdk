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
var DescribeItemSetsRequest = /** @class */ (function () {
    function DescribeItemSetsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeItemSetsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeItemSetsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeItemSetsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeItemSetsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeItemSetsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeItemSetsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeItemSetsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeItemSetsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeItemSetsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeItemSetsRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    DescribeItemSetsRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DescribeItemSetsRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DescribeItemSetsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeItemSetsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeItemSetsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeItemSetsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeItemSetsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeItemSetsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeItemSetsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeItemSetsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeItemSetsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeItemSetsRequest.fromDict = function (data) {
        return new DescribeItemSetsRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeItemSetsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeItemSetsRequest;
}());
export default DescribeItemSetsRequest;
//# sourceMappingURL=DescribeItemSetsRequest.js.map