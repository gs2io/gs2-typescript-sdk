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
var AttachSecurityPolicy = /** @class */ (function () {
    function AttachSecurityPolicy() {
        this.userId = null;
        this.securityPolicyIds = null;
        this.attachedAt = null;
    }
    AttachSecurityPolicy.prototype.getUserId = function () {
        return this.userId;
    };
    AttachSecurityPolicy.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AttachSecurityPolicy.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AttachSecurityPolicy.prototype.getSecurityPolicyIds = function () {
        return this.securityPolicyIds;
    };
    AttachSecurityPolicy.prototype.setSecurityPolicyIds = function (securityPolicyIds) {
        this.securityPolicyIds = securityPolicyIds;
        return this;
    };
    AttachSecurityPolicy.prototype.withSecurityPolicyIds = function (securityPolicyIds) {
        this.securityPolicyIds = securityPolicyIds;
        return this;
    };
    AttachSecurityPolicy.prototype.getAttachedAt = function () {
        return this.attachedAt;
    };
    AttachSecurityPolicy.prototype.setAttachedAt = function (attachedAt) {
        this.attachedAt = attachedAt;
        return this;
    };
    AttachSecurityPolicy.prototype.withAttachedAt = function (attachedAt) {
        this.attachedAt = attachedAt;
        return this;
    };
    AttachSecurityPolicy.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AttachSecurityPolicy()
            .withUserId(data["userId"])
            .withSecurityPolicyIds(data.securityPolicyIds ?
            data.securityPolicyIds.map(function (item) {
                return item;
            }) : [])
            .withAttachedAt(data["attachedAt"]);
    };
    AttachSecurityPolicy.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "securityPolicyIds": this.getSecurityPolicyIds() ?
                this.getSecurityPolicyIds().map(function (item) {
                    return item;
                }) : [],
            "attachedAt": this.getAttachedAt(),
        };
    };
    return AttachSecurityPolicy;
}());
exports.default = AttachSecurityPolicy;
//# sourceMappingURL=AttachSecurityPolicy.js.map