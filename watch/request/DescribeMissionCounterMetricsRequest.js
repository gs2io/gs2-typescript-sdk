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
var DescribeMissionCounterMetricsRequest = /** @class */ (function () {
    function DescribeMissionCounterMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    DescribeMissionCounterMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeMissionCounterMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeMissionCounterMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeMissionCounterMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeMissionCounterMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeMissionCounterMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeMissionCounterMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeMissionCounterMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeMissionCounterMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeMissionCounterMetricsRequest.fromDict = function (data) {
        return new DescribeMissionCounterMetricsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    DescribeMissionCounterMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return DescribeMissionCounterMetricsRequest;
}());
exports.default = DescribeMissionCounterMetricsRequest;
//# sourceMappingURL=DescribeMissionCounterMetricsRequest.js.map