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
var DescribePropertyFormsByUserIdRequest = /** @class */ (function () {
    function DescribePropertyFormsByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.formModelName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribePropertyFormsByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribePropertyFormsByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribePropertyFormsByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribePropertyFormsByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribePropertyFormsByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribePropertyFormsByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribePropertyFormsByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribePropertyFormsByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribePropertyFormsByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribePropertyFormsByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribePropertyFormsByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribePropertyFormsByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribePropertyFormsByUserIdRequest.prototype.getFormModelName = function () {
        return this.formModelName;
    };
    DescribePropertyFormsByUserIdRequest.prototype.setFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    DescribePropertyFormsByUserIdRequest.prototype.withFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    DescribePropertyFormsByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribePropertyFormsByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribePropertyFormsByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribePropertyFormsByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribePropertyFormsByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribePropertyFormsByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribePropertyFormsByUserIdRequest.fromDict = function (data) {
        return new DescribePropertyFormsByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withFormModelName(data["formModelName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribePropertyFormsByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "formModelName": this.getFormModelName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribePropertyFormsByUserIdRequest;
}());
exports.default = DescribePropertyFormsByUserIdRequest;
//# sourceMappingURL=DescribePropertyFormsByUserIdRequest.js.map