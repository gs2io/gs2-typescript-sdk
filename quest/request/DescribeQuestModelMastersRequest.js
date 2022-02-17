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
var DescribeQuestModelMastersRequest = /** @class */ (function () {
    function DescribeQuestModelMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.questGroupName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeQuestModelMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeQuestModelMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeQuestModelMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeQuestModelMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeQuestModelMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeQuestModelMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeQuestModelMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeQuestModelMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeQuestModelMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeQuestModelMastersRequest.prototype.getQuestGroupName = function () {
        return this.questGroupName;
    };
    DescribeQuestModelMastersRequest.prototype.setQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    DescribeQuestModelMastersRequest.prototype.withQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    DescribeQuestModelMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeQuestModelMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeQuestModelMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeQuestModelMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeQuestModelMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeQuestModelMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeQuestModelMastersRequest.fromDict = function (data) {
        return new DescribeQuestModelMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withQuestGroupName(data["questGroupName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeQuestModelMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "questGroupName": this.getQuestGroupName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeQuestModelMastersRequest;
}());
export default DescribeQuestModelMastersRequest;
//# sourceMappingURL=DescribeQuestModelMastersRequest.js.map