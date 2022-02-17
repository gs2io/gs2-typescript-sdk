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
var DeleteNamespaceRequest = /** @class */ (function () {
    function DeleteNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    DeleteNamespaceRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteNamespaceRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteNamespaceRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteNamespaceRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteNamespaceRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteNamespaceRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteNamespaceRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteNamespaceRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteNamespaceRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteNamespaceRequest.fromDict = function (data) {
        return new DeleteNamespaceRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    DeleteNamespaceRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return DeleteNamespaceRequest;
}());
export default DeleteNamespaceRequest;
//# sourceMappingURL=DeleteNamespaceRequest.js.map