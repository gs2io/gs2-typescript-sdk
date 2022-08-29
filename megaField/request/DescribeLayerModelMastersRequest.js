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
var DescribeLayerModelMastersRequest = /** @class */ (function () {
    function DescribeLayerModelMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.areaModelName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeLayerModelMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeLayerModelMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeLayerModelMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeLayerModelMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeLayerModelMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeLayerModelMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeLayerModelMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeLayerModelMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeLayerModelMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeLayerModelMastersRequest.prototype.getAreaModelName = function () {
        return this.areaModelName;
    };
    DescribeLayerModelMastersRequest.prototype.setAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    DescribeLayerModelMastersRequest.prototype.withAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    DescribeLayerModelMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeLayerModelMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeLayerModelMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeLayerModelMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeLayerModelMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeLayerModelMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeLayerModelMastersRequest.fromDict = function (data) {
        return new DescribeLayerModelMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withAreaModelName(data["areaModelName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeLayerModelMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "areaModelName": this.getAreaModelName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeLayerModelMastersRequest;
}());
exports.default = DescribeLayerModelMastersRequest;
//# sourceMappingURL=DescribeLayerModelMastersRequest.js.map