"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var GetSecurityPolicyRequest = /** @class */ (function () {
    function GetSecurityPolicyRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.securityPolicyName = null;
    }
    GetSecurityPolicyRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetSecurityPolicyRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSecurityPolicyRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSecurityPolicyRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetSecurityPolicyRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSecurityPolicyRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSecurityPolicyRequest.prototype.getSecurityPolicyName = function () {
        return this.securityPolicyName;
    };
    GetSecurityPolicyRequest.prototype.setSecurityPolicyName = function (securityPolicyName) {
        this.securityPolicyName = securityPolicyName;
        return this;
    };
    GetSecurityPolicyRequest.prototype.withSecurityPolicyName = function (securityPolicyName) {
        this.securityPolicyName = securityPolicyName;
        return this;
    };
    GetSecurityPolicyRequest.fromDict = function (data) {
        return new GetSecurityPolicyRequest()
            .withSecurityPolicyName(data["securityPolicyName"]);
    };
    GetSecurityPolicyRequest.prototype.toDict = function () {
        return {
            "securityPolicyName": this.getSecurityPolicyName(),
        };
    };
    return GetSecurityPolicyRequest;
}());
exports.default = GetSecurityPolicyRequest;
//# sourceMappingURL=GetSecurityPolicyRequest.js.map