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
var DescribeBigItemModelsRequest = /** @class */ (function () {
    function DescribeBigItemModelsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
    }
    DescribeBigItemModelsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeBigItemModelsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBigItemModelsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBigItemModelsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeBigItemModelsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBigItemModelsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBigItemModelsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeBigItemModelsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeBigItemModelsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeBigItemModelsRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    DescribeBigItemModelsRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DescribeBigItemModelsRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DescribeBigItemModelsRequest.fromDict = function (data) {
        return new DescribeBigItemModelsRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"]);
    };
    DescribeBigItemModelsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
        };
    };
    return DescribeBigItemModelsRequest;
}());
exports.default = DescribeBigItemModelsRequest;
//# sourceMappingURL=DescribeBigItemModelsRequest.js.map