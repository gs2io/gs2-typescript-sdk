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
var CreateSecurityPolicyRequest = /** @class */ (function () {
    function CreateSecurityPolicyRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.name = null;
        this.description = null;
        this.policy = null;
    }
    CreateSecurityPolicyRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateSecurityPolicyRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateSecurityPolicyRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateSecurityPolicyRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateSecurityPolicyRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateSecurityPolicyRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateSecurityPolicyRequest.prototype.getName = function () {
        return this.name;
    };
    CreateSecurityPolicyRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateSecurityPolicyRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateSecurityPolicyRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateSecurityPolicyRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateSecurityPolicyRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateSecurityPolicyRequest.prototype.getPolicy = function () {
        return this.policy;
    };
    CreateSecurityPolicyRequest.prototype.setPolicy = function (policy) {
        this.policy = policy;
        return this;
    };
    CreateSecurityPolicyRequest.prototype.withPolicy = function (policy) {
        this.policy = policy;
        return this;
    };
    CreateSecurityPolicyRequest.fromDict = function (data) {
        return new CreateSecurityPolicyRequest()
            .withName(data["name"])
            .withDescription(data["description"])
            .withPolicy(data["policy"]);
    };
    CreateSecurityPolicyRequest.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "policy": this.getPolicy(),
        };
    };
    return CreateSecurityPolicyRequest;
}());
export default CreateSecurityPolicyRequest;
//# sourceMappingURL=CreateSecurityPolicyRequest.js.map