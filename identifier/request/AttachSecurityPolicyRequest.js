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
var AttachSecurityPolicyRequest = /** @class */ (function () {
    function AttachSecurityPolicyRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userName = null;
        this.securityPolicyId = null;
    }
    AttachSecurityPolicyRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AttachSecurityPolicyRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AttachSecurityPolicyRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AttachSecurityPolicyRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AttachSecurityPolicyRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AttachSecurityPolicyRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AttachSecurityPolicyRequest.prototype.getUserName = function () {
        return this.userName;
    };
    AttachSecurityPolicyRequest.prototype.setUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    AttachSecurityPolicyRequest.prototype.withUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    AttachSecurityPolicyRequest.prototype.getSecurityPolicyId = function () {
        return this.securityPolicyId;
    };
    AttachSecurityPolicyRequest.prototype.setSecurityPolicyId = function (securityPolicyId) {
        this.securityPolicyId = securityPolicyId;
        return this;
    };
    AttachSecurityPolicyRequest.prototype.withSecurityPolicyId = function (securityPolicyId) {
        this.securityPolicyId = securityPolicyId;
        return this;
    };
    AttachSecurityPolicyRequest.fromDict = function (data) {
        return new AttachSecurityPolicyRequest()
            .withUserName(data["userName"])
            .withSecurityPolicyId(data["securityPolicyId"]);
    };
    AttachSecurityPolicyRequest.prototype.toDict = function () {
        return {
            "userName": this.getUserName(),
            "securityPolicyId": this.getSecurityPolicyId(),
        };
    };
    return AttachSecurityPolicyRequest;
}());
export default AttachSecurityPolicyRequest;
//# sourceMappingURL=AttachSecurityPolicyRequest.js.map