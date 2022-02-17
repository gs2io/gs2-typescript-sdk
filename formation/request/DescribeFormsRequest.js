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
var DescribeFormsRequest = /** @class */ (function () {
    function DescribeFormsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.moldName = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeFormsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeFormsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeFormsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeFormsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeFormsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeFormsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeFormsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeFormsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeFormsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeFormsRequest.prototype.getMoldName = function () {
        return this.moldName;
    };
    DescribeFormsRequest.prototype.setMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    DescribeFormsRequest.prototype.withMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    DescribeFormsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeFormsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeFormsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeFormsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeFormsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeFormsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeFormsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeFormsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeFormsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeFormsRequest.fromDict = function (data) {
        return new DescribeFormsRequest()
            .withNamespaceName(data["namespaceName"])
            .withMoldName(data["moldName"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeFormsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "moldName": this.getMoldName(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeFormsRequest;
}());
export default DescribeFormsRequest;
//# sourceMappingURL=DescribeFormsRequest.js.map