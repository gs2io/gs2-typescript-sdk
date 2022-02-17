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
import WalletDetail from './WalletDetail';
var Wallet = /** @class */ (function () {
    function Wallet() {
        this.walletId = null;
        this.userId = null;
        this.slot = null;
        this.paid = null;
        this.free = null;
        this.detail = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    Wallet.prototype.getWalletId = function () {
        return this.walletId;
    };
    Wallet.prototype.setWalletId = function (walletId) {
        this.walletId = walletId;
        return this;
    };
    Wallet.prototype.withWalletId = function (walletId) {
        this.walletId = walletId;
        return this;
    };
    Wallet.prototype.getUserId = function () {
        return this.userId;
    };
    Wallet.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Wallet.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Wallet.prototype.getSlot = function () {
        return this.slot;
    };
    Wallet.prototype.setSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    Wallet.prototype.withSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    Wallet.prototype.getPaid = function () {
        return this.paid;
    };
    Wallet.prototype.setPaid = function (paid) {
        this.paid = paid;
        return this;
    };
    Wallet.prototype.withPaid = function (paid) {
        this.paid = paid;
        return this;
    };
    Wallet.prototype.getFree = function () {
        return this.free;
    };
    Wallet.prototype.setFree = function (free) {
        this.free = free;
        return this;
    };
    Wallet.prototype.withFree = function (free) {
        this.free = free;
        return this;
    };
    Wallet.prototype.getDetail = function () {
        return this.detail;
    };
    Wallet.prototype.setDetail = function (detail) {
        this.detail = detail;
        return this;
    };
    Wallet.prototype.withDetail = function (detail) {
        this.detail = detail;
        return this;
    };
    Wallet.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Wallet.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Wallet.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Wallet.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Wallet.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Wallet.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Wallet.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Wallet()
            .withWalletId(data["walletId"])
            .withUserId(data["userId"])
            .withSlot(data["slot"])
            .withPaid(data["paid"])
            .withFree(data["free"])
            .withDetail(data.detail ?
            data.detail.map(function (item) {
                return WalletDetail.fromDict(item);
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Wallet.prototype.toDict = function () {
        return {
            "walletId": this.getWalletId(),
            "userId": this.getUserId(),
            "slot": this.getSlot(),
            "paid": this.getPaid(),
            "free": this.getFree(),
            "detail": this.getDetail() ?
                this.getDetail().map(function (item) {
                    return item.toDict();
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Wallet;
}());
export default Wallet;
//# sourceMappingURL=Wallet.js.map