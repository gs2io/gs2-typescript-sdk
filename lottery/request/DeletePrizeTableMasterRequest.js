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
var DeletePrizeTableMasterRequest = /** @class */ (function () {
    function DeletePrizeTableMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.prizeTableName = null;
    }
    DeletePrizeTableMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeletePrizeTableMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeletePrizeTableMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeletePrizeTableMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeletePrizeTableMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeletePrizeTableMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeletePrizeTableMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeletePrizeTableMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeletePrizeTableMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeletePrizeTableMasterRequest.prototype.getPrizeTableName = function () {
        return this.prizeTableName;
    };
    DeletePrizeTableMasterRequest.prototype.setPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    DeletePrizeTableMasterRequest.prototype.withPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    DeletePrizeTableMasterRequest.fromDict = function (data) {
        return new DeletePrizeTableMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withPrizeTableName(data["prizeTableName"]);
    };
    DeletePrizeTableMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "prizeTableName": this.getPrizeTableName(),
        };
    };
    return DeletePrizeTableMasterRequest;
}());
export default DeletePrizeTableMasterRequest;
//# sourceMappingURL=DeletePrizeTableMasterRequest.js.map