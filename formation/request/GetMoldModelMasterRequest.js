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
var GetMoldModelMasterRequest = /** @class */ (function () {
    function GetMoldModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.moldName = null;
    }
    GetMoldModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetMoldModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMoldModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMoldModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetMoldModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMoldModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMoldModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetMoldModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMoldModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMoldModelMasterRequest.prototype.getMoldName = function () {
        return this.moldName;
    };
    GetMoldModelMasterRequest.prototype.setMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    GetMoldModelMasterRequest.prototype.withMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    GetMoldModelMasterRequest.fromDict = function (data) {
        return new GetMoldModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withMoldName(data["moldName"]);
    };
    GetMoldModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "moldName": this.getMoldName(),
        };
    };
    return GetMoldModelMasterRequest;
}());
exports.default = GetMoldModelMasterRequest;
//# sourceMappingURL=GetMoldModelMasterRequest.js.map