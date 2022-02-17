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
var DeleteLimitModelMasterRequest = /** @class */ (function () {
    function DeleteLimitModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.limitName = null;
    }
    DeleteLimitModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteLimitModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteLimitModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteLimitModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteLimitModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteLimitModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteLimitModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteLimitModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteLimitModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteLimitModelMasterRequest.prototype.getLimitName = function () {
        return this.limitName;
    };
    DeleteLimitModelMasterRequest.prototype.setLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    DeleteLimitModelMasterRequest.prototype.withLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    DeleteLimitModelMasterRequest.fromDict = function (data) {
        return new DeleteLimitModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withLimitName(data["limitName"]);
    };
    DeleteLimitModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "limitName": this.getLimitName(),
        };
    };
    return DeleteLimitModelMasterRequest;
}());
export default DeleteLimitModelMasterRequest;
//# sourceMappingURL=DeleteLimitModelMasterRequest.js.map