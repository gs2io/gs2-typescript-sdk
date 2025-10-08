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
var DeleteAreaModelMasterRequest = /** @class */ (function () {
    function DeleteAreaModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.areaModelName = null;
    }
    DeleteAreaModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteAreaModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteAreaModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteAreaModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteAreaModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteAreaModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteAreaModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteAreaModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteAreaModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteAreaModelMasterRequest.prototype.getAreaModelName = function () {
        return this.areaModelName;
    };
    DeleteAreaModelMasterRequest.prototype.setAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    DeleteAreaModelMasterRequest.prototype.withAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    DeleteAreaModelMasterRequest.fromDict = function (data) {
        return new DeleteAreaModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withAreaModelName(data["areaModelName"]);
    };
    DeleteAreaModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "areaModelName": this.getAreaModelName(),
        };
    };
    return DeleteAreaModelMasterRequest;
}());
exports.default = DeleteAreaModelMasterRequest;
//# sourceMappingURL=DeleteAreaModelMasterRequest.js.map