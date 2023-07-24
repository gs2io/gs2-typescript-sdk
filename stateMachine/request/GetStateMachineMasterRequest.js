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
var GetStateMachineMasterRequest = /** @class */ (function () {
    function GetStateMachineMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.version = null;
    }
    GetStateMachineMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetStateMachineMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStateMachineMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStateMachineMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetStateMachineMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStateMachineMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStateMachineMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetStateMachineMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStateMachineMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStateMachineMasterRequest.prototype.getVersion = function () {
        return this.version;
    };
    GetStateMachineMasterRequest.prototype.setVersion = function (version) {
        this.version = version;
        return this;
    };
    GetStateMachineMasterRequest.prototype.withVersion = function (version) {
        this.version = version;
        return this;
    };
    GetStateMachineMasterRequest.fromDict = function (data) {
        return new GetStateMachineMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withVersion(data["version"]);
    };
    GetStateMachineMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "version": this.getVersion(),
        };
    };
    return GetStateMachineMasterRequest;
}());
exports.default = GetStateMachineMasterRequest;
//# sourceMappingURL=GetStateMachineMasterRequest.js.map