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
var DescribeMaxStaminaTableMastersRequest = /** @class */ (function () {
    function DescribeMaxStaminaTableMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeMaxStaminaTableMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeMaxStaminaTableMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeMaxStaminaTableMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeMaxStaminaTableMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeMaxStaminaTableMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeMaxStaminaTableMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeMaxStaminaTableMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeMaxStaminaTableMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeMaxStaminaTableMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeMaxStaminaTableMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeMaxStaminaTableMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeMaxStaminaTableMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeMaxStaminaTableMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeMaxStaminaTableMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeMaxStaminaTableMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeMaxStaminaTableMastersRequest.fromDict = function (data) {
        return new DescribeMaxStaminaTableMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeMaxStaminaTableMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeMaxStaminaTableMastersRequest;
}());
export default DescribeMaxStaminaTableMastersRequest;
//# sourceMappingURL=DescribeMaxStaminaTableMastersRequest.js.map