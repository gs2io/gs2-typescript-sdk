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
var DeleteInsightRequest = /** @class */ (function () {
    function DeleteInsightRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.insightName = null;
    }
    DeleteInsightRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteInsightRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteInsightRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteInsightRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteInsightRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteInsightRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteInsightRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteInsightRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteInsightRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteInsightRequest.prototype.getInsightName = function () {
        return this.insightName;
    };
    DeleteInsightRequest.prototype.setInsightName = function (insightName) {
        this.insightName = insightName;
        return this;
    };
    DeleteInsightRequest.prototype.withInsightName = function (insightName) {
        this.insightName = insightName;
        return this;
    };
    DeleteInsightRequest.fromDict = function (data) {
        return new DeleteInsightRequest()
            .withNamespaceName(data["namespaceName"])
            .withInsightName(data["insightName"]);
    };
    DeleteInsightRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "insightName": this.getInsightName(),
        };
    };
    return DeleteInsightRequest;
}());
exports.default = DeleteInsightRequest;
//# sourceMappingURL=DeleteInsightRequest.js.map