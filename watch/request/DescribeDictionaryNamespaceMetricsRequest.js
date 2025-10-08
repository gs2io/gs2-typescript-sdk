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
var DescribeDictionaryNamespaceMetricsRequest = /** @class */ (function () {
    function DescribeDictionaryNamespaceMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
    }
    DescribeDictionaryNamespaceMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeDictionaryNamespaceMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeDictionaryNamespaceMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeDictionaryNamespaceMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeDictionaryNamespaceMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeDictionaryNamespaceMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeDictionaryNamespaceMetricsRequest.fromDict = function (data) {
        return new DescribeDictionaryNamespaceMetricsRequest();
    };
    DescribeDictionaryNamespaceMetricsRequest.prototype.toDict = function () {
        return {};
    };
    return DescribeDictionaryNamespaceMetricsRequest;
}());
exports.default = DescribeDictionaryNamespaceMetricsRequest;
//# sourceMappingURL=DescribeDictionaryNamespaceMetricsRequest.js.map