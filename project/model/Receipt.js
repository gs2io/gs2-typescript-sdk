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
var Receipt = /** @class */ (function () {
    function Receipt() {
        this.receiptId = null;
        this.accountName = null;
        this.name = null;
        this.date = null;
        this.amount = null;
        this.pdfUrl = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
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
    Receipt.prototype.getAccountName = function () {
        return this.accountName;
    };
    Receipt.prototype.setAccountName = function (accountName) {
        this.accountName = accountName;
        return this;
    };
    Receipt.prototype.withAccountName = function (accountName) {
        this.accountName = accountName;
        return this;
    };
    Receipt.prototype.getName = function () {
        return this.name;
    };
    Receipt.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Receipt.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Receipt.prototype.getDate = function () {
        return this.date;
    };
    Receipt.prototype.setDate = function (date) {
        this.date = date;
        return this;
    };
    Receipt.prototype.withDate = function (date) {
        this.date = date;
        return this;
    };
    Receipt.prototype.getAmount = function () {
        return this.amount;
    };
    Receipt.prototype.setAmount = function (amount) {
        this.amount = amount;
        return this;
    };
    Receipt.prototype.withAmount = function (amount) {
        this.amount = amount;
        return this;
    };
    Receipt.prototype.getPdfUrl = function () {
        return this.pdfUrl;
    };
    Receipt.prototype.setPdfUrl = function (pdfUrl) {
        this.pdfUrl = pdfUrl;
        return this;
    };
    Receipt.prototype.withPdfUrl = function (pdfUrl) {
        this.pdfUrl = pdfUrl;
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
    Receipt.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Receipt.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Receipt.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Receipt.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Receipt()
            .withReceiptId(data["receiptId"])
            .withAccountName(data["accountName"])
            .withName(data["name"])
            .withDate(data["date"])
            .withAmount(data["amount"])
            .withPdfUrl(data["pdfUrl"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Receipt.prototype.toDict = function () {
        return {
            "receiptId": this.getReceiptId(),
            "accountName": this.getAccountName(),
            "name": this.getName(),
            "date": this.getDate(),
            "amount": this.getAmount(),
            "pdfUrl": this.getPdfUrl(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Receipt;
}());
exports.default = Receipt;
//# sourceMappingURL=Receipt.js.map