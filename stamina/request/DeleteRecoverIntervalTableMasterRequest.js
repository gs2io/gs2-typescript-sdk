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
var DeleteRecoverIntervalTableMasterRequest = /** @class */ (function () {
    function DeleteRecoverIntervalTableMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.recoverIntervalTableName = null;
    }
    DeleteRecoverIntervalTableMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteRecoverIntervalTableMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteRecoverIntervalTableMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteRecoverIntervalTableMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteRecoverIntervalTableMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteRecoverIntervalTableMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteRecoverIntervalTableMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteRecoverIntervalTableMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteRecoverIntervalTableMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteRecoverIntervalTableMasterRequest.prototype.getRecoverIntervalTableName = function () {
        return this.recoverIntervalTableName;
    };
    DeleteRecoverIntervalTableMasterRequest.prototype.setRecoverIntervalTableName = function (recoverIntervalTableName) {
        this.recoverIntervalTableName = recoverIntervalTableName;
        return this;
    };
    DeleteRecoverIntervalTableMasterRequest.prototype.withRecoverIntervalTableName = function (recoverIntervalTableName) {
        this.recoverIntervalTableName = recoverIntervalTableName;
        return this;
    };
    DeleteRecoverIntervalTableMasterRequest.fromDict = function (data) {
        return new DeleteRecoverIntervalTableMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withRecoverIntervalTableName(data["recoverIntervalTableName"]);
    };
    DeleteRecoverIntervalTableMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "recoverIntervalTableName": this.getRecoverIntervalTableName(),
        };
    };
    return DeleteRecoverIntervalTableMasterRequest;
}());
export default DeleteRecoverIntervalTableMasterRequest;
//# sourceMappingURL=DeleteRecoverIntervalTableMasterRequest.js.map