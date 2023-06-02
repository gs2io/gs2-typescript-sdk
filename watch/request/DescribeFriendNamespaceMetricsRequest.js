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
var DescribeFriendNamespaceMetricsRequest = /** @class */ (function () {
    function DescribeFriendNamespaceMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
    }
    DescribeFriendNamespaceMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeFriendNamespaceMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeFriendNamespaceMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeFriendNamespaceMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeFriendNamespaceMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeFriendNamespaceMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeFriendNamespaceMetricsRequest.fromDict = function (data) {
        return new DescribeFriendNamespaceMetricsRequest();
    };
    DescribeFriendNamespaceMetricsRequest.prototype.toDict = function () {
        return {};
    };
    return DescribeFriendNamespaceMetricsRequest;
}());
exports.default = DescribeFriendNamespaceMetricsRequest;
//# sourceMappingURL=DescribeFriendNamespaceMetricsRequest.js.map