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
var SecurityPolicy = /** @class */ (function () {
    function SecurityPolicy() {
        this.securityPolicyId = null;
        this.name = null;
        this.description = null;
        this.policy = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    SecurityPolicy.prototype.getSecurityPolicyId = function () {
        return this.securityPolicyId;
    };
    SecurityPolicy.prototype.setSecurityPolicyId = function (securityPolicyId) {
        this.securityPolicyId = securityPolicyId;
        return this;
    };
    SecurityPolicy.prototype.withSecurityPolicyId = function (securityPolicyId) {
        this.securityPolicyId = securityPolicyId;
        return this;
    };
    SecurityPolicy.prototype.getName = function () {
        return this.name;
    };
    SecurityPolicy.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    SecurityPolicy.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    SecurityPolicy.prototype.getDescription = function () {
        return this.description;
    };
    SecurityPolicy.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    SecurityPolicy.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    SecurityPolicy.prototype.getPolicy = function () {
        return this.policy;
    };
    SecurityPolicy.prototype.setPolicy = function (policy) {
        this.policy = policy;
        return this;
    };
    SecurityPolicy.prototype.withPolicy = function (policy) {
        this.policy = policy;
        return this;
    };
    SecurityPolicy.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    SecurityPolicy.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SecurityPolicy.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SecurityPolicy.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    SecurityPolicy.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SecurityPolicy.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SecurityPolicy.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SecurityPolicy()
            .withSecurityPolicyId(data["securityPolicyId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withPolicy(data["policy"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    SecurityPolicy.prototype.toDict = function () {
        return {
            "securityPolicyId": this.getSecurityPolicyId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "policy": this.getPolicy(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return SecurityPolicy;
}());
exports.default = SecurityPolicy;
//# sourceMappingURL=SecurityPolicy.js.map