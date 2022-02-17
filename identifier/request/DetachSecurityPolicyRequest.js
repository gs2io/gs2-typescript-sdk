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
var DetachSecurityPolicyRequest = /** @class */ (function () {
    function DetachSecurityPolicyRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userName = null;
        this.securityPolicyId = null;
    }
    DetachSecurityPolicyRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DetachSecurityPolicyRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DetachSecurityPolicyRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DetachSecurityPolicyRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DetachSecurityPolicyRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DetachSecurityPolicyRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DetachSecurityPolicyRequest.prototype.getUserName = function () {
        return this.userName;
    };
    DetachSecurityPolicyRequest.prototype.setUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    DetachSecurityPolicyRequest.prototype.withUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    DetachSecurityPolicyRequest.prototype.getSecurityPolicyId = function () {
        return this.securityPolicyId;
    };
    DetachSecurityPolicyRequest.prototype.setSecurityPolicyId = function (securityPolicyId) {
        this.securityPolicyId = securityPolicyId;
        return this;
    };
    DetachSecurityPolicyRequest.prototype.withSecurityPolicyId = function (securityPolicyId) {
        this.securityPolicyId = securityPolicyId;
        return this;
    };
    DetachSecurityPolicyRequest.fromDict = function (data) {
        return new DetachSecurityPolicyRequest()
            .withUserName(data["userName"])
            .withSecurityPolicyId(data["securityPolicyId"]);
    };
    DetachSecurityPolicyRequest.prototype.toDict = function () {
        return {
            "userName": this.getUserName(),
            "securityPolicyId": this.getSecurityPolicyId(),
        };
    };
    return DetachSecurityPolicyRequest;
}());
exports.default = DetachSecurityPolicyRequest;
//# sourceMappingURL=DetachSecurityPolicyRequest.js.map