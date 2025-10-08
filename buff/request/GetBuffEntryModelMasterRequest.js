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
var GetBuffEntryModelMasterRequest = /** @class */ (function () {
    function GetBuffEntryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.buffEntryName = null;
    }
    GetBuffEntryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetBuffEntryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBuffEntryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBuffEntryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetBuffEntryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBuffEntryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBuffEntryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetBuffEntryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBuffEntryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBuffEntryModelMasterRequest.prototype.getBuffEntryName = function () {
        return this.buffEntryName;
    };
    GetBuffEntryModelMasterRequest.prototype.setBuffEntryName = function (buffEntryName) {
        this.buffEntryName = buffEntryName;
        return this;
    };
    GetBuffEntryModelMasterRequest.prototype.withBuffEntryName = function (buffEntryName) {
        this.buffEntryName = buffEntryName;
        return this;
    };
    GetBuffEntryModelMasterRequest.fromDict = function (data) {
        return new GetBuffEntryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withBuffEntryName(data["buffEntryName"]);
    };
    GetBuffEntryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "buffEntryName": this.getBuffEntryName(),
        };
    };
    return GetBuffEntryModelMasterRequest;
}());
exports.default = GetBuffEntryModelMasterRequest;
//# sourceMappingURL=GetBuffEntryModelMasterRequest.js.map