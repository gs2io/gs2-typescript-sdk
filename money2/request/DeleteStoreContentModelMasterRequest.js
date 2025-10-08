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
var DeleteStoreContentModelMasterRequest = /** @class */ (function () {
    function DeleteStoreContentModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.contentName = null;
    }
    DeleteStoreContentModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteStoreContentModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteStoreContentModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteStoreContentModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteStoreContentModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteStoreContentModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteStoreContentModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteStoreContentModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteStoreContentModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteStoreContentModelMasterRequest.prototype.getContentName = function () {
        return this.contentName;
    };
    DeleteStoreContentModelMasterRequest.prototype.setContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    DeleteStoreContentModelMasterRequest.prototype.withContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    DeleteStoreContentModelMasterRequest.fromDict = function (data) {
        return new DeleteStoreContentModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withContentName(data["contentName"]);
    };
    DeleteStoreContentModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "contentName": this.getContentName(),
        };
    };
    return DeleteStoreContentModelMasterRequest;
}());
exports.default = DeleteStoreContentModelMasterRequest;
//# sourceMappingURL=DeleteStoreContentModelMasterRequest.js.map