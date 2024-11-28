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
var Gs2Distributor = tslib_1.__importStar(require("../../distributor/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:distributor:{namespaceName}:user:{userId}:transaction:result:{transactionId}";
var TransactionResult = /** @class */ (function () {
    function TransactionResult() {
        this.transactionResultId = null;
        this.userId = null;
        this.transactionId = null;
        this.verifyResults = null;
        this.consumeResults = null;
        this.acquireResults = null;
        this.createdAt = null;
        this.revision = null;
    }
    TransactionResult.getRegion = function (grn) {
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
    TransactionResult.getOwnerId = function (grn) {
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
    TransactionResult.getNamespaceName = function (grn) {
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
    TransactionResult.getUserId = function (grn) {
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
    TransactionResult.getTransactionId = function (grn) {
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
    TransactionResult.isValid = function (grn) {
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
    TransactionResult.createGrn = function (region, ownerId, namespaceName, userId, transactionId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{transactionId}', transactionId !== null && transactionId !== void 0 ? transactionId : '');
    };
    TransactionResult.prototype.getTransactionResultId = function () {
        return this.transactionResultId;
    };
    TransactionResult.prototype.setTransactionResultId = function (transactionResultId) {
        this.transactionResultId = transactionResultId;
        return this;
    };
    TransactionResult.prototype.withTransactionResultId = function (transactionResultId) {
        this.transactionResultId = transactionResultId;
        return this;
    };
    TransactionResult.prototype.getUserId = function () {
        return this.userId;
    };
    TransactionResult.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    TransactionResult.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    TransactionResult.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    TransactionResult.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    TransactionResult.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    TransactionResult.prototype.getVerifyResults = function () {
        return this.verifyResults;
    };
    TransactionResult.prototype.setVerifyResults = function (verifyResults) {
        this.verifyResults = verifyResults;
        return this;
    };
    TransactionResult.prototype.withVerifyResults = function (verifyResults) {
        this.verifyResults = verifyResults;
        return this;
    };
    TransactionResult.prototype.getConsumeResults = function () {
        return this.consumeResults;
    };
    TransactionResult.prototype.setConsumeResults = function (consumeResults) {
        this.consumeResults = consumeResults;
        return this;
    };
    TransactionResult.prototype.withConsumeResults = function (consumeResults) {
        this.consumeResults = consumeResults;
        return this;
    };
    TransactionResult.prototype.getAcquireResults = function () {
        return this.acquireResults;
    };
    TransactionResult.prototype.setAcquireResults = function (acquireResults) {
        this.acquireResults = acquireResults;
        return this;
    };
    TransactionResult.prototype.withAcquireResults = function (acquireResults) {
        this.acquireResults = acquireResults;
        return this;
    };
    TransactionResult.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    TransactionResult.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    TransactionResult.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    TransactionResult.prototype.getRevision = function () {
        return this.revision;
    };
    TransactionResult.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    TransactionResult.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    TransactionResult.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new TransactionResult()
            .withTransactionResultId(data["transactionResultId"])
            .withUserId(data["userId"])
            .withTransactionId(data["transactionId"])
            .withVerifyResults(data.verifyResults ?
            data.verifyResults.map(function (item) {
                return Gs2Distributor.VerifyActionResult.fromDict(item);
            }) : null)
            .withConsumeResults(data.consumeResults ?
            data.consumeResults.map(function (item) {
                return Gs2Distributor.ConsumeActionResult.fromDict(item);
            }) : null)
            .withAcquireResults(data.acquireResults ?
            data.acquireResults.map(function (item) {
                return Gs2Distributor.AcquireActionResult.fromDict(item);
            }) : null)
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    };
    TransactionResult.prototype.toDict = function () {
        return {
            "transactionResultId": this.getTransactionResultId(),
            "userId": this.getUserId(),
            "transactionId": this.getTransactionId(),
            "verifyResults": this.getVerifyResults() ?
                this.getVerifyResults().map(function (item) {
                    return item.toDict();
                }) : null,
            "consumeResults": this.getConsumeResults() ?
                this.getConsumeResults().map(function (item) {
                    return item.toDict();
                }) : null,
            "acquireResults": this.getAcquireResults() ?
                this.getAcquireResults().map(function (item) {
                    return item.toDict();
                }) : null,
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    };
    return TransactionResult;
}());
exports.default = TransactionResult;
//# sourceMappingURL=TransactionResult.js.map