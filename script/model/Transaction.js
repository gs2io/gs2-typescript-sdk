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
var Gs2Script = tslib_1.__importStar(require("../../script/model"));
var Transaction = /** @class */ (function () {
    function Transaction() {
        this.transactionId = null;
        this.verifyActions = null;
        this.consumeActions = null;
        this.acquireActions = null;
    }
    Transaction.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    Transaction.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    Transaction.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    Transaction.prototype.getVerifyActions = function () {
        return this.verifyActions;
    };
    Transaction.prototype.setVerifyActions = function (verifyActions) {
        this.verifyActions = verifyActions;
        return this;
    };
    Transaction.prototype.withVerifyActions = function (verifyActions) {
        this.verifyActions = verifyActions;
        return this;
    };
    Transaction.prototype.getConsumeActions = function () {
        return this.consumeActions;
    };
    Transaction.prototype.setConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    Transaction.prototype.withConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    Transaction.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    Transaction.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    Transaction.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    Transaction.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Transaction()
            .withTransactionId(data["transactionId"])
            .withVerifyActions(data.verifyActions ?
            data.verifyActions.map(function (item) {
                return Gs2Script.VerifyAction.fromDict(item);
            }) : null)
            .withConsumeActions(data.consumeActions ?
            data.consumeActions.map(function (item) {
                return Gs2Script.ConsumeAction.fromDict(item);
            }) : null)
            .withAcquireActions(data.acquireActions ?
            data.acquireActions.map(function (item) {
                return Gs2Script.AcquireAction.fromDict(item);
            }) : null);
    };
    Transaction.prototype.toDict = function () {
        return {
            "transactionId": this.getTransactionId(),
            "verifyActions": this.getVerifyActions() ?
                this.getVerifyActions().map(function (item) {
                    return item.toDict();
                }) : null,
            "consumeActions": this.getConsumeActions() ?
                this.getConsumeActions().map(function (item) {
                    return item.toDict();
                }) : null,
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return Transaction;
}());
exports.default = Transaction;
//# sourceMappingURL=Transaction.js.map