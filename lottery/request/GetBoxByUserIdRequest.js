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
var GetBoxByUserIdRequest = /** @class */ (function () {
    function GetBoxByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.prizeTableName = null;
        this.userId = null;
    }
    GetBoxByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetBoxByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBoxByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBoxByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetBoxByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBoxByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBoxByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetBoxByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBoxByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBoxByUserIdRequest.prototype.getPrizeTableName = function () {
        return this.prizeTableName;
    };
    GetBoxByUserIdRequest.prototype.setPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    GetBoxByUserIdRequest.prototype.withPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    GetBoxByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetBoxByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetBoxByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetBoxByUserIdRequest.fromDict = function (data) {
        return new GetBoxByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withPrizeTableName(data["prizeTableName"])
            .withUserId(data["userId"]);
    };
    GetBoxByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "prizeTableName": this.getPrizeTableName(),
            "userId": this.getUserId(),
        };
    };
    return GetBoxByUserIdRequest;
}());
export default GetBoxByUserIdRequest;
//# sourceMappingURL=GetBoxByUserIdRequest.js.map