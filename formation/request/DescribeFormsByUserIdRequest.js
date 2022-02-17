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
var DescribeFormsByUserIdRequest = /** @class */ (function () {
    function DescribeFormsByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.moldName = null;
        this.userId = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeFormsByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeFormsByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeFormsByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeFormsByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeFormsByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeFormsByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeFormsByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeFormsByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeFormsByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeFormsByUserIdRequest.prototype.getMoldName = function () {
        return this.moldName;
    };
    DescribeFormsByUserIdRequest.prototype.setMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    DescribeFormsByUserIdRequest.prototype.withMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    DescribeFormsByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeFormsByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeFormsByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeFormsByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeFormsByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeFormsByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeFormsByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeFormsByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeFormsByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeFormsByUserIdRequest.fromDict = function (data) {
        return new DescribeFormsByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withMoldName(data["moldName"])
            .withUserId(data["userId"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeFormsByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "moldName": this.getMoldName(),
            "userId": this.getUserId(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeFormsByUserIdRequest;
}());
export default DescribeFormsByUserIdRequest;
//# sourceMappingURL=DescribeFormsByUserIdRequest.js.map