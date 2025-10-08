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
var DeleteDistributorModelMasterRequest = /** @class */ (function () {
    function DeleteDistributorModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.distributorName = null;
    }
    DeleteDistributorModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteDistributorModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteDistributorModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteDistributorModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteDistributorModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteDistributorModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteDistributorModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteDistributorModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteDistributorModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteDistributorModelMasterRequest.prototype.getDistributorName = function () {
        return this.distributorName;
    };
    DeleteDistributorModelMasterRequest.prototype.setDistributorName = function (distributorName) {
        this.distributorName = distributorName;
        return this;
    };
    DeleteDistributorModelMasterRequest.prototype.withDistributorName = function (distributorName) {
        this.distributorName = distributorName;
        return this;
    };
    DeleteDistributorModelMasterRequest.fromDict = function (data) {
        return new DeleteDistributorModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withDistributorName(data["distributorName"]);
    };
    DeleteDistributorModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "distributorName": this.getDistributorName(),
        };
    };
    return DeleteDistributorModelMasterRequest;
}());
exports.default = DeleteDistributorModelMasterRequest;
//# sourceMappingURL=DeleteDistributorModelMasterRequest.js.map