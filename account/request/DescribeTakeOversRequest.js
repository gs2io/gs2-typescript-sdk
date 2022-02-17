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
var DescribeTakeOversRequest = /** @class */ (function () {
    function DescribeTakeOversRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeTakeOversRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeTakeOversRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeTakeOversRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeTakeOversRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeTakeOversRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeTakeOversRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeTakeOversRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeTakeOversRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeTakeOversRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeTakeOversRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeTakeOversRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeTakeOversRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeTakeOversRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeTakeOversRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeTakeOversRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeTakeOversRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeTakeOversRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeTakeOversRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeTakeOversRequest.fromDict = function (data) {
        return new DescribeTakeOversRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeTakeOversRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeTakeOversRequest;
}());
export default DescribeTakeOversRequest;
//# sourceMappingURL=DescribeTakeOversRequest.js.map