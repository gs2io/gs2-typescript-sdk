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
var GetTakeOverTypeModelMasterRequest = /** @class */ (function () {
    function GetTakeOverTypeModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.type = null;
    }
    GetTakeOverTypeModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetTakeOverTypeModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetTakeOverTypeModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetTakeOverTypeModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetTakeOverTypeModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetTakeOverTypeModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetTakeOverTypeModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetTakeOverTypeModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetTakeOverTypeModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetTakeOverTypeModelMasterRequest.prototype.getType = function () {
        return this.type;
    };
    GetTakeOverTypeModelMasterRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    GetTakeOverTypeModelMasterRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    GetTakeOverTypeModelMasterRequest.fromDict = function (data) {
        return new GetTakeOverTypeModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withType(data["type"]);
    };
    GetTakeOverTypeModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "type": this.getType(),
        };
    };
    return GetTakeOverTypeModelMasterRequest;
}());
exports.default = GetTakeOverTypeModelMasterRequest;
//# sourceMappingURL=GetTakeOverTypeModelMasterRequest.js.map