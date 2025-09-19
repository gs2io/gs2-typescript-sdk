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
var DescribeRoomsRequest = /** @class */ (function () {
    function DescribeRoomsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.namePrefix = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeRoomsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeRoomsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRoomsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRoomsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeRoomsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRoomsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRoomsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeRoomsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRoomsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRoomsRequest.prototype.getNamePrefix = function () {
        return this.namePrefix;
    };
    DescribeRoomsRequest.prototype.setNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribeRoomsRequest.prototype.withNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribeRoomsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeRoomsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeRoomsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeRoomsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeRoomsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeRoomsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeRoomsRequest.fromDict = function (data) {
        return new DescribeRoomsRequest()
            .withNamespaceName(data["namespaceName"])
            .withNamePrefix(data["namePrefix"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeRoomsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "namePrefix": this.getNamePrefix(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeRoomsRequest;
}());
exports.default = DescribeRoomsRequest;
//# sourceMappingURL=DescribeRoomsRequest.js.map