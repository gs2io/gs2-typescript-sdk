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
var DeleteRecoverValueTableMasterRequest = /** @class */ (function () {
    function DeleteRecoverValueTableMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.recoverValueTableName = null;
    }
    DeleteRecoverValueTableMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteRecoverValueTableMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteRecoverValueTableMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteRecoverValueTableMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteRecoverValueTableMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteRecoverValueTableMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteRecoverValueTableMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteRecoverValueTableMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteRecoverValueTableMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteRecoverValueTableMasterRequest.prototype.getRecoverValueTableName = function () {
        return this.recoverValueTableName;
    };
    DeleteRecoverValueTableMasterRequest.prototype.setRecoverValueTableName = function (recoverValueTableName) {
        this.recoverValueTableName = recoverValueTableName;
        return this;
    };
    DeleteRecoverValueTableMasterRequest.prototype.withRecoverValueTableName = function (recoverValueTableName) {
        this.recoverValueTableName = recoverValueTableName;
        return this;
    };
    DeleteRecoverValueTableMasterRequest.fromDict = function (data) {
        return new DeleteRecoverValueTableMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withRecoverValueTableName(data["recoverValueTableName"]);
    };
    DeleteRecoverValueTableMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "recoverValueTableName": this.getRecoverValueTableName(),
        };
    };
    return DeleteRecoverValueTableMasterRequest;
}());
export default DeleteRecoverValueTableMasterRequest;
//# sourceMappingURL=DeleteRecoverValueTableMasterRequest.js.map