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
var DeleteSecurityPolicyRequest = /** @class */ (function () {
    function DeleteSecurityPolicyRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.securityPolicyName = null;
    }
    DeleteSecurityPolicyRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteSecurityPolicyRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteSecurityPolicyRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteSecurityPolicyRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteSecurityPolicyRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteSecurityPolicyRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteSecurityPolicyRequest.prototype.getSecurityPolicyName = function () {
        return this.securityPolicyName;
    };
    DeleteSecurityPolicyRequest.prototype.setSecurityPolicyName = function (securityPolicyName) {
        this.securityPolicyName = securityPolicyName;
        return this;
    };
    DeleteSecurityPolicyRequest.prototype.withSecurityPolicyName = function (securityPolicyName) {
        this.securityPolicyName = securityPolicyName;
        return this;
    };
    DeleteSecurityPolicyRequest.fromDict = function (data) {
        return new DeleteSecurityPolicyRequest()
            .withSecurityPolicyName(data["securityPolicyName"]);
    };
    DeleteSecurityPolicyRequest.prototype.toDict = function () {
        return {
            "securityPolicyName": this.getSecurityPolicyName(),
        };
    };
    return DeleteSecurityPolicyRequest;
}());
exports.default = DeleteSecurityPolicyRequest;
//# sourceMappingURL=DeleteSecurityPolicyRequest.js.map