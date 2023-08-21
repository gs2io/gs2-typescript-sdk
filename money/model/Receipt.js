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
var grnFormat = "grn:gs2:{region}:{ownerId}:money:{namespaceName}:user:{userId}:receipt:{transactionId}";
var Receipt = /** @class */ (function () {
    function Receipt() {
        this.receiptId = null;
        this.transactionId = null;
        this.purchaseToken = null;
        this.userId = null;
        this.type = null;
        this.slot = null;
        this.price = null;
        this.paid = null;
        this.free = null;
        this.total = null;
        this.contentsId = null;
        this.createdAt = null;
        this.revision = null;
    }
    Receipt.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{transactionId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Receipt.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{transactionId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Receipt.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{transactionId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Receipt.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{transactionId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Receipt.getTransactionId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{transactionId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Receipt.isValid = function (grn) {
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
        if (this.getTransactionId(grn) == null || this.getTransactionId(grn) === '') {
            return false;
        }
        return true;
    };
    Receipt.createGrn = function (region, ownerId, namespaceName, userId, transactionId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{transactionId}', transactionId !== null && transactionId !== void 0 ? transactionId : '');
    };
    Receipt.prototype.getReceiptId = function () {
        return this.receiptId;
    };
    Receipt.prototype.setReceiptId = function (receiptId) {
        this.receiptId = receiptId;
        return this;
    };
    Receipt.prototype.withReceiptId = function (receiptId) {
        this.receiptId = receiptId;
        return this;
    };
    Receipt.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    Receipt.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    Receipt.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    Receipt.prototype.getPurchaseToken = function () {
        return this.purchaseToken;
    };
    Receipt.prototype.setPurchaseToken = function (purchaseToken) {
        this.purchaseToken = purchaseToken;
        return this;
    };
    Receipt.prototype.withPurchaseToken = function (purchaseToken) {
        this.purchaseToken = purchaseToken;
        return this;
    };
    Receipt.prototype.getUserId = function () {
        return this.userId;
    };
    Receipt.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Receipt.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Receipt.prototype.getType = function () {
        return this.type;
    };
    Receipt.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    Receipt.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    Receipt.prototype.getSlot = function () {
        return this.slot;
    };
    Receipt.prototype.setSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    Receipt.prototype.withSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    Receipt.prototype.getPrice = function () {
        return this.price;
    };
    Receipt.prototype.setPrice = function (price) {
        this.price = price;
        return this;
    };
    Receipt.prototype.withPrice = function (price) {
        this.price = price;
        return this;
    };
    Receipt.prototype.getPaid = function () {
        return this.paid;
    };
    Receipt.prototype.setPaid = function (paid) {
        this.paid = paid;
        return this;
    };
    Receipt.prototype.withPaid = function (paid) {
        this.paid = paid;
        return this;
    };
    Receipt.prototype.getFree = function () {
        return this.free;
    };
    Receipt.prototype.setFree = function (free) {
        this.free = free;
        return this;
    };
    Receipt.prototype.withFree = function (free) {
        this.free = free;
        return this;
    };
    Receipt.prototype.getTotal = function () {
        return this.total;
    };
    Receipt.prototype.setTotal = function (total) {
        this.total = total;
        return this;
    };
    Receipt.prototype.withTotal = function (total) {
        this.total = total;
        return this;
    };
    Receipt.prototype.getContentsId = function () {
        return this.contentsId;
    };
    Receipt.prototype.setContentsId = function (contentsId) {
        this.contentsId = contentsId;
        return this;
    };
    Receipt.prototype.withContentsId = function (contentsId) {
        this.contentsId = contentsId;
        return this;
    };
    Receipt.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Receipt.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Receipt.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Receipt.prototype.getRevision = function () {
        return this.revision;
    };
    Receipt.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Receipt.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Receipt.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Receipt()
            .withReceiptId(data["receiptId"])
            .withTransactionId(data["transactionId"])
            .withPurchaseToken(data["purchaseToken"])
            .withUserId(data["userId"])
            .withType(data["type"])
            .withSlot(data["slot"])
            .withPrice(data["price"])
            .withPaid(data["paid"])
            .withFree(data["free"])
            .withTotal(data["total"])
            .withContentsId(data["contentsId"])
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    };
    Receipt.prototype.toDict = function () {
        return {
            "receiptId": this.getReceiptId(),
            "transactionId": this.getTransactionId(),
            "purchaseToken": this.getPurchaseToken(),
            "userId": this.getUserId(),
            "type": this.getType(),
            "slot": this.getSlot(),
            "price": this.getPrice(),
            "paid": this.getPaid(),
            "free": this.getFree(),
            "total": this.getTotal(),
            "contentsId": this.getContentsId(),
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Receipt;
}());
exports.default = Receipt;
//# sourceMappingURL=Receipt.js.map