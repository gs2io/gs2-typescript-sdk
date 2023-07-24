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
var DeleteStateMachineMasterRequest = /** @class */ (function () {
    function DeleteStateMachineMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.version = null;
    }
    DeleteStateMachineMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteStateMachineMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteStateMachineMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteStateMachineMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteStateMachineMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteStateMachineMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteStateMachineMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteStateMachineMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteStateMachineMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteStateMachineMasterRequest.prototype.getVersion = function () {
        return this.version;
    };
    DeleteStateMachineMasterRequest.prototype.setVersion = function (version) {
        this.version = version;
        return this;
    };
    DeleteStateMachineMasterRequest.prototype.withVersion = function (version) {
        this.version = version;
        return this;
    };
    DeleteStateMachineMasterRequest.fromDict = function (data) {
        return new DeleteStateMachineMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withVersion(data["version"]);
    };
    DeleteStateMachineMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "version": this.getVersion(),
        };
    };
    return DeleteStateMachineMasterRequest;
}());
exports.default = DeleteStateMachineMasterRequest;
//# sourceMappingURL=DeleteStateMachineMasterRequest.js.map