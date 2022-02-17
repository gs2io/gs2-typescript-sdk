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
var GetPrizeTableRequest = /** @class */ (function () {
    function GetPrizeTableRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.prizeTableName = null;
    }
    GetPrizeTableRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetPrizeTableRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPrizeTableRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPrizeTableRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetPrizeTableRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPrizeTableRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPrizeTableRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetPrizeTableRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPrizeTableRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPrizeTableRequest.prototype.getPrizeTableName = function () {
        return this.prizeTableName;
    };
    GetPrizeTableRequest.prototype.setPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    GetPrizeTableRequest.prototype.withPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    GetPrizeTableRequest.fromDict = function (data) {
        return new GetPrizeTableRequest()
            .withNamespaceName(data["namespaceName"])
            .withPrizeTableName(data["prizeTableName"]);
    };
    GetPrizeTableRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "prizeTableName": this.getPrizeTableName(),
        };
    };
    return GetPrizeTableRequest;
}());
export default GetPrizeTableRequest;
//# sourceMappingURL=GetPrizeTableRequest.js.map