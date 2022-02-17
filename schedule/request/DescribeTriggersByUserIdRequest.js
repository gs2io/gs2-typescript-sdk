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
var DescribeTriggersByUserIdRequest = /** @class */ (function () {
    function DescribeTriggersByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeTriggersByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeTriggersByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeTriggersByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeTriggersByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeTriggersByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeTriggersByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeTriggersByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeTriggersByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeTriggersByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeTriggersByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeTriggersByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeTriggersByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeTriggersByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeTriggersByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeTriggersByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeTriggersByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeTriggersByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeTriggersByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeTriggersByUserIdRequest.fromDict = function (data) {
        return new DescribeTriggersByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeTriggersByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeTriggersByUserIdRequest;
}());
export default DescribeTriggersByUserIdRequest;
//# sourceMappingURL=DescribeTriggersByUserIdRequest.js.map