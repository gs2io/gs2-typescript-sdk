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
var DescribeLabelValuesRequest = /** @class */ (function () {
    function DescribeLabelValuesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.metricName = null;
        this.labelNamePrefix = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeLabelValuesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeLabelValuesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeLabelValuesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeLabelValuesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeLabelValuesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeLabelValuesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeLabelValuesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeLabelValuesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeLabelValuesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeLabelValuesRequest.prototype.getMetricName = function () {
        return this.metricName;
    };
    DescribeLabelValuesRequest.prototype.setMetricName = function (metricName) {
        this.metricName = metricName;
        return this;
    };
    DescribeLabelValuesRequest.prototype.withMetricName = function (metricName) {
        this.metricName = metricName;
        return this;
    };
    DescribeLabelValuesRequest.prototype.getLabelNamePrefix = function () {
        return this.labelNamePrefix;
    };
    DescribeLabelValuesRequest.prototype.setLabelNamePrefix = function (labelNamePrefix) {
        this.labelNamePrefix = labelNamePrefix;
        return this;
    };
    DescribeLabelValuesRequest.prototype.withLabelNamePrefix = function (labelNamePrefix) {
        this.labelNamePrefix = labelNamePrefix;
        return this;
    };
    DescribeLabelValuesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeLabelValuesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeLabelValuesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeLabelValuesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeLabelValuesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeLabelValuesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeLabelValuesRequest.fromDict = function (data) {
        return new DescribeLabelValuesRequest()
            .withNamespaceName(data["namespaceName"])
            .withMetricName(data["metricName"])
            .withLabelNamePrefix(data["labelNamePrefix"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeLabelValuesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "metricName": this.getMetricName(),
            "labelNamePrefix": this.getLabelNamePrefix(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeLabelValuesRequest;
}());
exports.default = DescribeLabelValuesRequest;
//# sourceMappingURL=DescribeLabelValuesRequest.js.map