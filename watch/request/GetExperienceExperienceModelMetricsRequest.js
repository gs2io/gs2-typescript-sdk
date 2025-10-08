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
var GetExperienceExperienceModelMetricsRequest = /** @class */ (function () {
    function GetExperienceExperienceModelMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.experienceName = null;
    }
    GetExperienceExperienceModelMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetExperienceExperienceModelMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetExperienceExperienceModelMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetExperienceExperienceModelMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetExperienceExperienceModelMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetExperienceExperienceModelMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetExperienceExperienceModelMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetExperienceExperienceModelMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetExperienceExperienceModelMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetExperienceExperienceModelMetricsRequest.prototype.getExperienceName = function () {
        return this.experienceName;
    };
    GetExperienceExperienceModelMetricsRequest.prototype.setExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    GetExperienceExperienceModelMetricsRequest.prototype.withExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    GetExperienceExperienceModelMetricsRequest.fromDict = function (data) {
        return new GetExperienceExperienceModelMetricsRequest()
            .withNamespaceName(data["namespaceName"])
            .withExperienceName(data["experienceName"]);
    };
    GetExperienceExperienceModelMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "experienceName": this.getExperienceName(),
        };
    };
    return GetExperienceExperienceModelMetricsRequest;
}());
exports.default = GetExperienceExperienceModelMetricsRequest;
//# sourceMappingURL=GetExperienceExperienceModelMetricsRequest.js.map