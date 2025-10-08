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
var DeleteBuffEntryModelMasterRequest = /** @class */ (function () {
    function DeleteBuffEntryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.buffEntryName = null;
    }
    DeleteBuffEntryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteBuffEntryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteBuffEntryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteBuffEntryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteBuffEntryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteBuffEntryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteBuffEntryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteBuffEntryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteBuffEntryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteBuffEntryModelMasterRequest.prototype.getBuffEntryName = function () {
        return this.buffEntryName;
    };
    DeleteBuffEntryModelMasterRequest.prototype.setBuffEntryName = function (buffEntryName) {
        this.buffEntryName = buffEntryName;
        return this;
    };
    DeleteBuffEntryModelMasterRequest.prototype.withBuffEntryName = function (buffEntryName) {
        this.buffEntryName = buffEntryName;
        return this;
    };
    DeleteBuffEntryModelMasterRequest.fromDict = function (data) {
        return new DeleteBuffEntryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withBuffEntryName(data["buffEntryName"]);
    };
    DeleteBuffEntryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "buffEntryName": this.getBuffEntryName(),
        };
    };
    return DeleteBuffEntryModelMasterRequest;
}());
exports.default = DeleteBuffEntryModelMasterRequest;
//# sourceMappingURL=DeleteBuffEntryModelMasterRequest.js.map