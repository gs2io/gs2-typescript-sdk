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
var UpdateSecurityPolicyRequest = /** @class */ (function () {
    function UpdateSecurityPolicyRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.securityPolicyName = null;
        this.description = null;
        this.policy = null;
    }
    UpdateSecurityPolicyRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateSecurityPolicyRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateSecurityPolicyRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateSecurityPolicyRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateSecurityPolicyRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateSecurityPolicyRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateSecurityPolicyRequest.prototype.getSecurityPolicyName = function () {
        return this.securityPolicyName;
    };
    UpdateSecurityPolicyRequest.prototype.setSecurityPolicyName = function (securityPolicyName) {
        this.securityPolicyName = securityPolicyName;
        return this;
    };
    UpdateSecurityPolicyRequest.prototype.withSecurityPolicyName = function (securityPolicyName) {
        this.securityPolicyName = securityPolicyName;
        return this;
    };
    UpdateSecurityPolicyRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateSecurityPolicyRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateSecurityPolicyRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateSecurityPolicyRequest.prototype.getPolicy = function () {
        return this.policy;
    };
    UpdateSecurityPolicyRequest.prototype.setPolicy = function (policy) {
        this.policy = policy;
        return this;
    };
    UpdateSecurityPolicyRequest.prototype.withPolicy = function (policy) {
        this.policy = policy;
        return this;
    };
    UpdateSecurityPolicyRequest.fromDict = function (data) {
        return new UpdateSecurityPolicyRequest()
            .withSecurityPolicyName(data["securityPolicyName"])
            .withDescription(data["description"])
            .withPolicy(data["policy"]);
    };
    UpdateSecurityPolicyRequest.prototype.toDict = function () {
        return {
            "securityPolicyName": this.getSecurityPolicyName(),
            "description": this.getDescription(),
            "policy": this.getPolicy(),
        };
    };
    return UpdateSecurityPolicyRequest;
}());
exports.default = UpdateSecurityPolicyRequest;
//# sourceMappingURL=UpdateSecurityPolicyRequest.js.map