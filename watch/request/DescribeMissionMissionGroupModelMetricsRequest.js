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
var DescribeMissionMissionGroupModelMetricsRequest = /** @class */ (function () {
    function DescribeMissionMissionGroupModelMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    DescribeMissionMissionGroupModelMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeMissionMissionGroupModelMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeMissionMissionGroupModelMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeMissionMissionGroupModelMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeMissionMissionGroupModelMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeMissionMissionGroupModelMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeMissionMissionGroupModelMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeMissionMissionGroupModelMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeMissionMissionGroupModelMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeMissionMissionGroupModelMetricsRequest.fromDict = function (data) {
        return new DescribeMissionMissionGroupModelMetricsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    DescribeMissionMissionGroupModelMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return DescribeMissionMissionGroupModelMetricsRequest;
}());
exports.default = DescribeMissionMissionGroupModelMetricsRequest;
//# sourceMappingURL=DescribeMissionMissionGroupModelMetricsRequest.js.map