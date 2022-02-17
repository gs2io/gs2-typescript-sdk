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
var GetBoxRequest = /** @class */ (function () {
    function GetBoxRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.prizeTableName = null;
        this.accessToken = null;
    }
    GetBoxRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetBoxRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBoxRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBoxRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetBoxRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBoxRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBoxRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetBoxRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBoxRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBoxRequest.prototype.getPrizeTableName = function () {
        return this.prizeTableName;
    };
    GetBoxRequest.prototype.setPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    GetBoxRequest.prototype.withPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    GetBoxRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetBoxRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetBoxRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetBoxRequest.fromDict = function (data) {
        return new GetBoxRequest()
            .withNamespaceName(data["namespaceName"])
            .withPrizeTableName(data["prizeTableName"])
            .withAccessToken(data["accessToken"]);
    };
    GetBoxRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "prizeTableName": this.getPrizeTableName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return GetBoxRequest;
}());
export default GetBoxRequest;
//# sourceMappingURL=GetBoxRequest.js.map