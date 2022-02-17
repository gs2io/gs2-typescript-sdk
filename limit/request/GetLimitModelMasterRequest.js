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
var GetLimitModelMasterRequest = /** @class */ (function () {
    function GetLimitModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.limitName = null;
    }
    GetLimitModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetLimitModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLimitModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLimitModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetLimitModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLimitModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLimitModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetLimitModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLimitModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLimitModelMasterRequest.prototype.getLimitName = function () {
        return this.limitName;
    };
    GetLimitModelMasterRequest.prototype.setLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    GetLimitModelMasterRequest.prototype.withLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    GetLimitModelMasterRequest.fromDict = function (data) {
        return new GetLimitModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withLimitName(data["limitName"]);
    };
    GetLimitModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "limitName": this.getLimitName(),
        };
    };
    return GetLimitModelMasterRequest;
}());
exports.default = GetLimitModelMasterRequest;
//# sourceMappingURL=GetLimitModelMasterRequest.js.map