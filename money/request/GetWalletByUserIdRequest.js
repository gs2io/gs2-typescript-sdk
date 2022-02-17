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
var GetWalletByUserIdRequest = /** @class */ (function () {
    function GetWalletByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.slot = null;
    }
    GetWalletByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetWalletByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetWalletByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetWalletByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetWalletByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetWalletByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetWalletByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetWalletByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetWalletByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetWalletByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetWalletByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetWalletByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetWalletByUserIdRequest.prototype.getSlot = function () {
        return this.slot;
    };
    GetWalletByUserIdRequest.prototype.setSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    GetWalletByUserIdRequest.prototype.withSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    GetWalletByUserIdRequest.fromDict = function (data) {
        return new GetWalletByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withSlot(data["slot"]);
    };
    GetWalletByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "slot": this.getSlot(),
        };
    };
    return GetWalletByUserIdRequest;
}());
export default GetWalletByUserIdRequest;
//# sourceMappingURL=GetWalletByUserIdRequest.js.map