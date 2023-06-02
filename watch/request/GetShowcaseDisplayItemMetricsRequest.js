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
var GetShowcaseDisplayItemMetricsRequest = /** @class */ (function () {
    function GetShowcaseDisplayItemMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.showcaseName = null;
        this.displayItemId = null;
    }
    GetShowcaseDisplayItemMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetShowcaseDisplayItemMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetShowcaseDisplayItemMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetShowcaseDisplayItemMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetShowcaseDisplayItemMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetShowcaseDisplayItemMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetShowcaseDisplayItemMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetShowcaseDisplayItemMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetShowcaseDisplayItemMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetShowcaseDisplayItemMetricsRequest.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    GetShowcaseDisplayItemMetricsRequest.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    GetShowcaseDisplayItemMetricsRequest.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    GetShowcaseDisplayItemMetricsRequest.prototype.getDisplayItemId = function () {
        return this.displayItemId;
    };
    GetShowcaseDisplayItemMetricsRequest.prototype.setDisplayItemId = function (displayItemId) {
        this.displayItemId = displayItemId;
        return this;
    };
    GetShowcaseDisplayItemMetricsRequest.prototype.withDisplayItemId = function (displayItemId) {
        this.displayItemId = displayItemId;
        return this;
    };
    GetShowcaseDisplayItemMetricsRequest.fromDict = function (data) {
        return new GetShowcaseDisplayItemMetricsRequest()
            .withNamespaceName(data["namespaceName"])
            .withShowcaseName(data["showcaseName"])
            .withDisplayItemId(data["displayItemId"]);
    };
    GetShowcaseDisplayItemMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcaseName": this.getShowcaseName(),
            "displayItemId": this.getDisplayItemId(),
        };
    };
    return GetShowcaseDisplayItemMetricsRequest;
}());
exports.default = GetShowcaseDisplayItemMetricsRequest;
//# sourceMappingURL=GetShowcaseDisplayItemMetricsRequest.js.map