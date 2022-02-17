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
var GetPrizeTableMasterRequest = /** @class */ (function () {
    function GetPrizeTableMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.prizeTableName = null;
    }
    GetPrizeTableMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetPrizeTableMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPrizeTableMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPrizeTableMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetPrizeTableMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPrizeTableMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPrizeTableMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetPrizeTableMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPrizeTableMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPrizeTableMasterRequest.prototype.getPrizeTableName = function () {
        return this.prizeTableName;
    };
    GetPrizeTableMasterRequest.prototype.setPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    GetPrizeTableMasterRequest.prototype.withPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    GetPrizeTableMasterRequest.fromDict = function (data) {
        return new GetPrizeTableMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withPrizeTableName(data["prizeTableName"]);
    };
    GetPrizeTableMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "prizeTableName": this.getPrizeTableName(),
        };
    };
    return GetPrizeTableMasterRequest;
}());
export default GetPrizeTableMasterRequest;
//# sourceMappingURL=GetPrizeTableMasterRequest.js.map