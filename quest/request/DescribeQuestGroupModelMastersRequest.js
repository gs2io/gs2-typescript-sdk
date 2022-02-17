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
var DescribeQuestGroupModelMastersRequest = /** @class */ (function () {
    function DescribeQuestGroupModelMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeQuestGroupModelMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeQuestGroupModelMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeQuestGroupModelMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeQuestGroupModelMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeQuestGroupModelMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeQuestGroupModelMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeQuestGroupModelMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeQuestGroupModelMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeQuestGroupModelMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeQuestGroupModelMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeQuestGroupModelMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeQuestGroupModelMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeQuestGroupModelMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeQuestGroupModelMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeQuestGroupModelMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeQuestGroupModelMastersRequest.fromDict = function (data) {
        return new DescribeQuestGroupModelMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeQuestGroupModelMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeQuestGroupModelMastersRequest;
}());
exports.default = DescribeQuestGroupModelMastersRequest;
//# sourceMappingURL=DescribeQuestGroupModelMastersRequest.js.map