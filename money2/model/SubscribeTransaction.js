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
var grnFormat = "grn:gs2:{region}:{ownerId}:money2:{namespaceName}:subscriptionTransaction:{contentName}:{transactionId}";
var SubscribeTransaction = /** @class */ (function () {
    function SubscribeTransaction() {
        this.subscribeTransactionId = null;
        this.contentName = null;
        this.transactionId = null;
        this.store = null;
        this.userId = null;
        this.statusDetail = null;
        this.expiresAt = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    SubscribeTransaction.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentName}', '.*')
            .replace('{transactionId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SubscribeTransaction.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{contentName}', '.*')
            .replace('{transactionId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SubscribeTransaction.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{contentName}', '.*')
            .replace('{transactionId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SubscribeTransaction.getContentName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentName}', '(.*)')
            .replace('{transactionId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SubscribeTransaction.getTransactionId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentName}', '.*')
            .replace('{transactionId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SubscribeTransaction.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getContentName(grn) == null || this.getContentName(grn) === '') {
            return false;
        }
        if (this.getTransactionId(grn) == null || this.getTransactionId(grn) === '') {
            return false;
        }
        return true;
    };
    SubscribeTransaction.createGrn = function (region, ownerId, namespaceName, contentName, transactionId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{contentName}', contentName !== null && contentName !== void 0 ? contentName : '')
            .replace('{transactionId}', transactionId !== null && transactionId !== void 0 ? transactionId : '');
    };
    SubscribeTransaction.prototype.getSubscribeTransactionId = function () {
        return this.subscribeTransactionId;
    };
    SubscribeTransaction.prototype.setSubscribeTransactionId = function (subscribeTransactionId) {
        this.subscribeTransactionId = subscribeTransactionId;
        return this;
    };
    SubscribeTransaction.prototype.withSubscribeTransactionId = function (subscribeTransactionId) {
        this.subscribeTransactionId = subscribeTransactionId;
        return this;
    };
    SubscribeTransaction.prototype.getContentName = function () {
        return this.contentName;
    };
    SubscribeTransaction.prototype.setContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    SubscribeTransaction.prototype.withContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    SubscribeTransaction.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    SubscribeTransaction.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    SubscribeTransaction.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    SubscribeTransaction.prototype.getStore = function () {
        return this.store;
    };
    SubscribeTransaction.prototype.setStore = function (store) {
        this.store = store;
        return this;
    };
    SubscribeTransaction.prototype.withStore = function (store) {
        this.store = store;
        return this;
    };
    SubscribeTransaction.prototype.getUserId = function () {
        return this.userId;
    };
    SubscribeTransaction.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SubscribeTransaction.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SubscribeTransaction.prototype.getStatusDetail = function () {
        return this.statusDetail;
    };
    SubscribeTransaction.prototype.setStatusDetail = function (statusDetail) {
        this.statusDetail = statusDetail;
        return this;
    };
    SubscribeTransaction.prototype.withStatusDetail = function (statusDetail) {
        this.statusDetail = statusDetail;
        return this;
    };
    SubscribeTransaction.prototype.getExpiresAt = function () {
        return this.expiresAt;
    };
    SubscribeTransaction.prototype.setExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    SubscribeTransaction.prototype.withExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    SubscribeTransaction.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    SubscribeTransaction.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SubscribeTransaction.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SubscribeTransaction.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    SubscribeTransaction.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SubscribeTransaction.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SubscribeTransaction.prototype.getRevision = function () {
        return this.revision;
    };
    SubscribeTransaction.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    SubscribeTransaction.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    SubscribeTransaction.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SubscribeTransaction()
            .withSubscribeTransactionId(data["subscribeTransactionId"])
            .withContentName(data["contentName"])
            .withTransactionId(data["transactionId"])
            .withStore(data["store"])
            .withUserId(data["userId"])
            .withStatusDetail(data["statusDetail"])
            .withExpiresAt(data["expiresAt"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    SubscribeTransaction.prototype.toDict = function () {
        return {
            "subscribeTransactionId": this.getSubscribeTransactionId(),
            "contentName": this.getContentName(),
            "transactionId": this.getTransactionId(),
            "store": this.getStore(),
            "userId": this.getUserId(),
            "statusDetail": this.getStatusDetail(),
            "expiresAt": this.getExpiresAt(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return SubscribeTransaction;
}());
exports.default = SubscribeTransaction;
//# sourceMappingURL=SubscribeTransaction.js.map