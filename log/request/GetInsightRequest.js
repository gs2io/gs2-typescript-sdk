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
var GetInsightRequest = /** @class */ (function () {
    function GetInsightRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.insightName = null;
    }
    GetInsightRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetInsightRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetInsightRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetInsightRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetInsightRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetInsightRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetInsightRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetInsightRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetInsightRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetInsightRequest.prototype.getInsightName = function () {
        return this.insightName;
    };
    GetInsightRequest.prototype.setInsightName = function (insightName) {
        this.insightName = insightName;
        return this;
    };
    GetInsightRequest.prototype.withInsightName = function (insightName) {
        this.insightName = insightName;
        return this;
    };
    GetInsightRequest.fromDict = function (data) {
        return new GetInsightRequest()
            .withNamespaceName(data["namespaceName"])
            .withInsightName(data["insightName"]);
    };
    GetInsightRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "insightName": this.getInsightName(),
        };
    };
    return GetInsightRequest;
}());
exports.default = GetInsightRequest;
//# sourceMappingURL=GetInsightRequest.js.map