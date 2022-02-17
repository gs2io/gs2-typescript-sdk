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
var GetBillingMethodRequest = /** @class */ (function () {
    function GetBillingMethodRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.accountToken = null;
        this.billingMethodName = null;
    }
    GetBillingMethodRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetBillingMethodRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBillingMethodRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBillingMethodRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetBillingMethodRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBillingMethodRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBillingMethodRequest.prototype.getAccountToken = function () {
        return this.accountToken;
    };
    GetBillingMethodRequest.prototype.setAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    GetBillingMethodRequest.prototype.withAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    GetBillingMethodRequest.prototype.getBillingMethodName = function () {
        return this.billingMethodName;
    };
    GetBillingMethodRequest.prototype.setBillingMethodName = function (billingMethodName) {
        this.billingMethodName = billingMethodName;
        return this;
    };
    GetBillingMethodRequest.prototype.withBillingMethodName = function (billingMethodName) {
        this.billingMethodName = billingMethodName;
        return this;
    };
    GetBillingMethodRequest.fromDict = function (data) {
        return new GetBillingMethodRequest()
            .withAccountToken(data["accountToken"])
            .withBillingMethodName(data["billingMethodName"]);
    };
    GetBillingMethodRequest.prototype.toDict = function () {
        return {
            "accountToken": this.getAccountToken(),
            "billingMethodName": this.getBillingMethodName(),
        };
    };
    return GetBillingMethodRequest;
}());
export { GetBillingMethodRequest };
//# sourceMappingURL=GetBillingMethodRequest.js.map