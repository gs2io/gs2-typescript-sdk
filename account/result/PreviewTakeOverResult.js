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
var Gs2Account = tslib_1.__importStar(require("../model"));
var PreviewTakeOverResult = /** @class */ (function () {
    function PreviewTakeOverResult() {
        this.item = null;
        this.banStatuses = null;
        this.token = null;
        this.expire = null;
    }
    PreviewTakeOverResult.prototype.getItem = function () {
        return this.item;
    };
    PreviewTakeOverResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    PreviewTakeOverResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    PreviewTakeOverResult.prototype.getBanStatuses = function () {
        return this.banStatuses;
    };
    PreviewTakeOverResult.prototype.setBanStatuses = function (banStatuses) {
        this.banStatuses = banStatuses;
        return this;
    };
    PreviewTakeOverResult.prototype.withBanStatuses = function (banStatuses) {
        this.banStatuses = banStatuses;
        return this;
    };
    PreviewTakeOverResult.prototype.getToken = function () {
        return this.token;
    };
    PreviewTakeOverResult.prototype.setToken = function (token) {
        this.token = token;
        return this;
    };
    PreviewTakeOverResult.prototype.withToken = function (token) {
        this.token = token;
        return this;
    };
    PreviewTakeOverResult.prototype.getExpire = function () {
        return this.expire;
    };
    PreviewTakeOverResult.prototype.setExpire = function (expire) {
        this.expire = expire;
        return this;
    };
    PreviewTakeOverResult.prototype.withExpire = function (expire) {
        this.expire = expire;
        return this;
    };
    PreviewTakeOverResult.fromDict = function (data) {
        return new PreviewTakeOverResult()
            .withItem(Gs2Account.Account.fromDict(data["item"]))
            .withBanStatuses(data.banStatuses ?
            data.banStatuses.map(function (item) {
                return Gs2Account.BanStatus.fromDict(item);
            }) : null)
            .withToken(data["token"])
            .withExpire(data["expire"]);
    };
    PreviewTakeOverResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "banStatuses": this.getBanStatuses() ?
                this.getBanStatuses().map(function (item) {
                    return item.toDict();
                }) : null,
            "token": this.getToken(),
            "expire": this.getExpire(),
        };
    };
    return PreviewTakeOverResult;
}());
exports.default = PreviewTakeOverResult;
//# sourceMappingURL=PreviewTakeOverResult.js.map