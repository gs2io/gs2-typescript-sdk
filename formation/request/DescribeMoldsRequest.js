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
var DescribeMoldsRequest = /** @class */ (function () {
    function DescribeMoldsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeMoldsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeMoldsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeMoldsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeMoldsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeMoldsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeMoldsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeMoldsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeMoldsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeMoldsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeMoldsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeMoldsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeMoldsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeMoldsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeMoldsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeMoldsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeMoldsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeMoldsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeMoldsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeMoldsRequest.fromDict = function (data) {
        return new DescribeMoldsRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeMoldsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeMoldsRequest;
}());
export default DescribeMoldsRequest;
//# sourceMappingURL=DescribeMoldsRequest.js.map