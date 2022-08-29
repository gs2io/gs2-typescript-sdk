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
var GetAreaModelMasterRequest = /** @class */ (function () {
    function GetAreaModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.areaModelName = null;
    }
    GetAreaModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetAreaModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetAreaModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetAreaModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetAreaModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetAreaModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetAreaModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetAreaModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetAreaModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetAreaModelMasterRequest.prototype.getAreaModelName = function () {
        return this.areaModelName;
    };
    GetAreaModelMasterRequest.prototype.setAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    GetAreaModelMasterRequest.prototype.withAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    GetAreaModelMasterRequest.fromDict = function (data) {
        return new GetAreaModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withAreaModelName(data["areaModelName"]);
    };
    GetAreaModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "areaModelName": this.getAreaModelName(),
        };
    };
    return GetAreaModelMasterRequest;
}());
exports.default = GetAreaModelMasterRequest;
//# sourceMappingURL=GetAreaModelMasterRequest.js.map