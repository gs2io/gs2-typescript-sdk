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
var DescribePropertyFormsRequest = /** @class */ (function () {
    function DescribePropertyFormsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.formModelName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribePropertyFormsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribePropertyFormsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribePropertyFormsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribePropertyFormsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribePropertyFormsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribePropertyFormsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribePropertyFormsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribePropertyFormsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribePropertyFormsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribePropertyFormsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribePropertyFormsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribePropertyFormsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribePropertyFormsRequest.prototype.getFormModelName = function () {
        return this.formModelName;
    };
    DescribePropertyFormsRequest.prototype.setFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    DescribePropertyFormsRequest.prototype.withFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    DescribePropertyFormsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribePropertyFormsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribePropertyFormsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribePropertyFormsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribePropertyFormsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribePropertyFormsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribePropertyFormsRequest.fromDict = function (data) {
        return new DescribePropertyFormsRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withFormModelName(data["formModelName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribePropertyFormsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "formModelName": this.getFormModelName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribePropertyFormsRequest;
}());
exports.default = DescribePropertyFormsRequest;
//# sourceMappingURL=DescribePropertyFormsRequest.js.map