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
var tslib_1 = require("tslib");
var Gs2Money2 = tslib_1.__importStar(require("../../money2/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:money2:{namespaceName}:event:{transactionId}";
var Event = /** @class */ (function () {
    function Event() {
        this.eventId = null;
        this.transactionId = null;
        this.userId = null;
        this.eventType = null;
        this.verifyReceiptEvent = null;
        this.depositEvent = null;
        this.withdrawEvent = null;
        this.createdAt = null;
        this.revision = null;
    }
    Event.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{transactionId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Event.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{transactionId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Event.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{transactionId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Event.getTransactionId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{transactionId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Event.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getTransactionId(grn) == null || this.getTransactionId(grn) === '') {
            return false;
        }
        return true;
    };
    Event.createGrn = function (region, ownerId, namespaceName, transactionId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{transactionId}', transactionId !== null && transactionId !== void 0 ? transactionId : '');
    };
    Event.prototype.getEventId = function () {
        return this.eventId;
    };
    Event.prototype.setEventId = function (eventId) {
        this.eventId = eventId;
        return this;
    };
    Event.prototype.withEventId = function (eventId) {
        this.eventId = eventId;
        return this;
    };
    Event.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    Event.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    Event.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    Event.prototype.getUserId = function () {
        return this.userId;
    };
    Event.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Event.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Event.prototype.getEventType = function () {
        return this.eventType;
    };
    Event.prototype.setEventType = function (eventType) {
        this.eventType = eventType;
        return this;
    };
    Event.prototype.withEventType = function (eventType) {
        this.eventType = eventType;
        return this;
    };
    Event.prototype.getVerifyReceiptEvent = function () {
        return this.verifyReceiptEvent;
    };
    Event.prototype.setVerifyReceiptEvent = function (verifyReceiptEvent) {
        this.verifyReceiptEvent = verifyReceiptEvent;
        return this;
    };
    Event.prototype.withVerifyReceiptEvent = function (verifyReceiptEvent) {
        this.verifyReceiptEvent = verifyReceiptEvent;
        return this;
    };
    Event.prototype.getDepositEvent = function () {
        return this.depositEvent;
    };
    Event.prototype.setDepositEvent = function (depositEvent) {
        this.depositEvent = depositEvent;
        return this;
    };
    Event.prototype.withDepositEvent = function (depositEvent) {
        this.depositEvent = depositEvent;
        return this;
    };
    Event.prototype.getWithdrawEvent = function () {
        return this.withdrawEvent;
    };
    Event.prototype.setWithdrawEvent = function (withdrawEvent) {
        this.withdrawEvent = withdrawEvent;
        return this;
    };
    Event.prototype.withWithdrawEvent = function (withdrawEvent) {
        this.withdrawEvent = withdrawEvent;
        return this;
    };
    Event.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Event.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Event.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Event.prototype.getRevision = function () {
        return this.revision;
    };
    Event.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Event.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Event.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Event()
            .withEventId(data["eventId"])
            .withTransactionId(data["transactionId"])
            .withUserId(data["userId"])
            .withEventType(data["eventType"])
            .withVerifyReceiptEvent(Gs2Money2.VerifyReceiptEvent.fromDict(data["verifyReceiptEvent"]))
            .withDepositEvent(Gs2Money2.DepositEvent.fromDict(data["depositEvent"]))
            .withWithdrawEvent(Gs2Money2.WithdrawEvent.fromDict(data["withdrawEvent"]))
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    };
    Event.prototype.toDict = function () {
        var _a, _b, _c;
        return {
            "eventId": this.getEventId(),
            "transactionId": this.getTransactionId(),
            "userId": this.getUserId(),
            "eventType": this.getEventType(),
            "verifyReceiptEvent": (_a = this.getVerifyReceiptEvent()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "depositEvent": (_b = this.getDepositEvent()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "withdrawEvent": (_c = this.getWithdrawEvent()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Event;
}());
exports.default = Event;
//# sourceMappingURL=Event.js.map