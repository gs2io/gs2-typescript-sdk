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
var WithdrawByUserIdRequest = /** @class */ (function () {
    function WithdrawByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.slot = null;
        this.count = null;
        this.paidOnly = null;
    }
    WithdrawByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    WithdrawByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    WithdrawByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    WithdrawByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    WithdrawByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    WithdrawByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    WithdrawByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    WithdrawByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    WithdrawByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    WithdrawByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    WithdrawByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    WithdrawByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    WithdrawByUserIdRequest.prototype.getSlot = function () {
        return this.slot;
    };
    WithdrawByUserIdRequest.prototype.setSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    WithdrawByUserIdRequest.prototype.withSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    WithdrawByUserIdRequest.prototype.getCount = function () {
        return this.count;
    };
    WithdrawByUserIdRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    WithdrawByUserIdRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    WithdrawByUserIdRequest.prototype.getPaidOnly = function () {
        return this.paidOnly;
    };
    WithdrawByUserIdRequest.prototype.setPaidOnly = function (paidOnly) {
        this.paidOnly = paidOnly;
        return this;
    };
    WithdrawByUserIdRequest.prototype.withPaidOnly = function (paidOnly) {
        this.paidOnly = paidOnly;
        return this;
    };
    WithdrawByUserIdRequest.fromDict = function (data) {
        return new WithdrawByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withSlot(data["slot"])
            .withCount(data["count"])
            .withPaidOnly(data["paidOnly"]);
    };
    WithdrawByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "slot": this.getSlot(),
            "count": this.getCount(),
            "paidOnly": this.getPaidOnly(),
        };
    };
    return WithdrawByUserIdRequest;
}());
export default WithdrawByUserIdRequest;
//# sourceMappingURL=WithdrawByUserIdRequest.js.map