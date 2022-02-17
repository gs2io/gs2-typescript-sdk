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
var GetVersionModelMasterRequest = /** @class */ (function () {
    function GetVersionModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.versionName = null;
    }
    GetVersionModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetVersionModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetVersionModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetVersionModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetVersionModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetVersionModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetVersionModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetVersionModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetVersionModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetVersionModelMasterRequest.prototype.getVersionName = function () {
        return this.versionName;
    };
    GetVersionModelMasterRequest.prototype.setVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    GetVersionModelMasterRequest.prototype.withVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    GetVersionModelMasterRequest.fromDict = function (data) {
        return new GetVersionModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withVersionName(data["versionName"]);
    };
    GetVersionModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "versionName": this.getVersionName(),
        };
    };
    return GetVersionModelMasterRequest;
}());
exports.default = GetVersionModelMasterRequest;
//# sourceMappingURL=GetVersionModelMasterRequest.js.map