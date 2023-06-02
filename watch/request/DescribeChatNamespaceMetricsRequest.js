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
var DescribeChatNamespaceMetricsRequest = /** @class */ (function () {
    function DescribeChatNamespaceMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
    }
    DescribeChatNamespaceMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeChatNamespaceMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeChatNamespaceMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeChatNamespaceMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeChatNamespaceMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeChatNamespaceMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeChatNamespaceMetricsRequest.fromDict = function (data) {
        return new DescribeChatNamespaceMetricsRequest();
    };
    DescribeChatNamespaceMetricsRequest.prototype.toDict = function () {
        return {};
    };
    return DescribeChatNamespaceMetricsRequest;
}());
exports.default = DescribeChatNamespaceMetricsRequest;
//# sourceMappingURL=DescribeChatNamespaceMetricsRequest.js.map