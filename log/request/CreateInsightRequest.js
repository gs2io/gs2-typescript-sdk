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
var CreateInsightRequest = /** @class */ (function () {
    function CreateInsightRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    CreateInsightRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateInsightRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateInsightRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateInsightRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateInsightRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateInsightRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateInsightRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateInsightRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateInsightRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateInsightRequest.fromDict = function (data) {
        return new CreateInsightRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    CreateInsightRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return CreateInsightRequest;
}());
exports.default = CreateInsightRequest;
//# sourceMappingURL=CreateInsightRequest.js.map