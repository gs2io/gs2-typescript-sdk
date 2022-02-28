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
var grnFormat = "grn:gs2:{region}:{ownerId}:account:{namespaceName}:account:{userId}";
var Account = /** @class */ (function () {
    function Account() {
        this.accountId = null;
        this.userId = null;
        this.password = null;
        this.timeOffset = null;
        this.createdAt = null;
    }
    Account.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Account.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Account.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Account.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Account.isValid = function (grn) {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        if (this.getUserId(grn) == null) {
            return false;
        }
        return true;
    };
    Account.createGrn = function (region, ownerId, namespaceName, userId) {
        if (region == null || region === '') {
            return null;
        }
        if (ownerId == null || ownerId === '') {
            return null;
        }
        if (namespaceName == null || namespaceName === '') {
            return null;
        }
        if (userId == null || userId === '') {
            return null;
        }
        return grnFormat
            .replace('{region}', region)
            .replace('{ownerId}', ownerId)
            .replace('{namespaceName}', namespaceName)
            .replace('{userId}', userId);
    };
    Account.prototype.getAccountId = function () {
        return this.accountId;
    };
    Account.prototype.setAccountId = function (accountId) {
        this.accountId = accountId;
        return this;
    };
    Account.prototype.withAccountId = function (accountId) {
        this.accountId = accountId;
        return this;
    };
    Account.prototype.getUserId = function () {
        return this.userId;
    };
    Account.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Account.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Account.prototype.getPassword = function () {
        return this.password;
    };
    Account.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    Account.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    Account.prototype.getTimeOffset = function () {
        return this.timeOffset;
    };
    Account.prototype.setTimeOffset = function (timeOffset) {
        this.timeOffset = timeOffset;
        return this;
    };
    Account.prototype.withTimeOffset = function (timeOffset) {
        this.timeOffset = timeOffset;
        return this;
    };
    Account.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Account.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Account.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Account.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Account()
            .withAccountId(data["accountId"])
            .withUserId(data["userId"])
            .withPassword(data["password"])
            .withTimeOffset(data["timeOffset"])
            .withCreatedAt(data["createdAt"]);
    };
    Account.prototype.toDict = function () {
        return {
            "accountId": this.getAccountId(),
            "userId": this.getUserId(),
            "password": this.getPassword(),
            "timeOffset": this.getTimeOffset(),
            "createdAt": this.getCreatedAt(),
        };
    };
    return Account;
}());
exports.default = Account;
//# sourceMappingURL=Account.js.map