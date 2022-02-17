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
var DescribeRecoverIntervalTableMastersRequest = /** @class */ (function () {
    function DescribeRecoverIntervalTableMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeRecoverIntervalTableMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeRecoverIntervalTableMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRecoverIntervalTableMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRecoverIntervalTableMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeRecoverIntervalTableMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRecoverIntervalTableMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRecoverIntervalTableMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeRecoverIntervalTableMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRecoverIntervalTableMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRecoverIntervalTableMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeRecoverIntervalTableMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeRecoverIntervalTableMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeRecoverIntervalTableMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeRecoverIntervalTableMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeRecoverIntervalTableMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeRecoverIntervalTableMastersRequest.fromDict = function (data) {
        return new DescribeRecoverIntervalTableMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeRecoverIntervalTableMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeRecoverIntervalTableMastersRequest;
}());
export default DescribeRecoverIntervalTableMastersRequest;
//# sourceMappingURL=DescribeRecoverIntervalTableMastersRequest.js.map