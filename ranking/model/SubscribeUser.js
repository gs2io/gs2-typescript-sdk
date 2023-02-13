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
var grnFormat = "grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:user:{userId}:subscribe:category:{categoryName}:{targetUserId}";
var SubscribeUser = /** @class */ (function () {
    function SubscribeUser() {
        this.subscribeUserId = null;
        this.categoryName = null;
        this.userId = null;
        this.targetUserId = null;
    }
    SubscribeUser.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{categoryName}', '.*')
            .replace('{targetUserId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SubscribeUser.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{categoryName}', '.*')
            .replace('{targetUserId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SubscribeUser.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{categoryName}', '.*')
            .replace('{targetUserId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SubscribeUser.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{categoryName}', '.*')
            .replace('{targetUserId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SubscribeUser.getCategoryName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{categoryName}', '(.*)')
            .replace('{targetUserId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SubscribeUser.getTargetUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{categoryName}', '.*')
            .replace('{targetUserId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SubscribeUser.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
            return false;
        }
        if (this.getCategoryName(grn) == null || this.getCategoryName(grn) === '') {
            return false;
        }
        if (this.getTargetUserId(grn) == null || this.getTargetUserId(grn) === '') {
            return false;
        }
        return true;
    };
    SubscribeUser.createGrn = function (region, ownerId, namespaceName, userId, categoryName, targetUserId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{categoryName}', categoryName !== null && categoryName !== void 0 ? categoryName : '')
            .replace('{targetUserId}', targetUserId !== null && targetUserId !== void 0 ? targetUserId : '');
    };
    SubscribeUser.prototype.getSubscribeUserId = function () {
        return this.subscribeUserId;
    };
    SubscribeUser.prototype.setSubscribeUserId = function (subscribeUserId) {
        this.subscribeUserId = subscribeUserId;
        return this;
    };
    SubscribeUser.prototype.withSubscribeUserId = function (subscribeUserId) {
        this.subscribeUserId = subscribeUserId;
        return this;
    };
    SubscribeUser.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    SubscribeUser.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    SubscribeUser.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    SubscribeUser.prototype.getUserId = function () {
        return this.userId;
    };
    SubscribeUser.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SubscribeUser.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SubscribeUser.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    SubscribeUser.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    SubscribeUser.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    SubscribeUser.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SubscribeUser()
            .withSubscribeUserId(data["subscribeUserId"])
            .withCategoryName(data["categoryName"])
            .withUserId(data["userId"])
            .withTargetUserId(data["targetUserId"]);
    };
    SubscribeUser.prototype.toDict = function () {
        return {
            "subscribeUserId": this.getSubscribeUserId(),
            "categoryName": this.getCategoryName(),
            "userId": this.getUserId(),
            "targetUserId": this.getTargetUserId(),
        };
    };
    return SubscribeUser;
}());
exports.default = SubscribeUser;
//# sourceMappingURL=SubscribeUser.js.map