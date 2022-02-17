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
var DescribeRecoverValueTableMastersRequest = /** @class */ (function () {
    function DescribeRecoverValueTableMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeRecoverValueTableMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeRecoverValueTableMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRecoverValueTableMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRecoverValueTableMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeRecoverValueTableMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRecoverValueTableMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRecoverValueTableMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeRecoverValueTableMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRecoverValueTableMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRecoverValueTableMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeRecoverValueTableMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeRecoverValueTableMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeRecoverValueTableMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeRecoverValueTableMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeRecoverValueTableMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeRecoverValueTableMastersRequest.fromDict = function (data) {
        return new DescribeRecoverValueTableMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeRecoverValueTableMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeRecoverValueTableMastersRequest;
}());
export default DescribeRecoverValueTableMastersRequest;
//# sourceMappingURL=DescribeRecoverValueTableMastersRequest.js.map