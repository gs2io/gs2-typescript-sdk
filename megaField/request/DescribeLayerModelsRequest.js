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
var DescribeLayerModelsRequest = /** @class */ (function () {
    function DescribeLayerModelsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.areaModelName = null;
    }
    DescribeLayerModelsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeLayerModelsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeLayerModelsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeLayerModelsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeLayerModelsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeLayerModelsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeLayerModelsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeLayerModelsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeLayerModelsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeLayerModelsRequest.prototype.getAreaModelName = function () {
        return this.areaModelName;
    };
    DescribeLayerModelsRequest.prototype.setAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    DescribeLayerModelsRequest.prototype.withAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    DescribeLayerModelsRequest.fromDict = function (data) {
        return new DescribeLayerModelsRequest()
            .withNamespaceName(data["namespaceName"])
            .withAreaModelName(data["areaModelName"]);
    };
    DescribeLayerModelsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "areaModelName": this.getAreaModelName(),
        };
    };
    return DescribeLayerModelsRequest;
}());
exports.default = DescribeLayerModelsRequest;
//# sourceMappingURL=DescribeLayerModelsRequest.js.map