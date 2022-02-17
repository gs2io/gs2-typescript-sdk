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
var DescribeCompletedQuestListsRequest = /** @class */ (function () {
    function DescribeCompletedQuestListsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeCompletedQuestListsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeCompletedQuestListsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeCompletedQuestListsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeCompletedQuestListsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeCompletedQuestListsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeCompletedQuestListsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeCompletedQuestListsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeCompletedQuestListsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeCompletedQuestListsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeCompletedQuestListsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeCompletedQuestListsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeCompletedQuestListsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeCompletedQuestListsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeCompletedQuestListsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeCompletedQuestListsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeCompletedQuestListsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeCompletedQuestListsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeCompletedQuestListsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeCompletedQuestListsRequest.fromDict = function (data) {
        return new DescribeCompletedQuestListsRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeCompletedQuestListsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeCompletedQuestListsRequest;
}());
export default DescribeCompletedQuestListsRequest;
//# sourceMappingURL=DescribeCompletedQuestListsRequest.js.map