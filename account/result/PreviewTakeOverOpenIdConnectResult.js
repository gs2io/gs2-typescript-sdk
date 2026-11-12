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
var PreviewTakeOverOpenIdConnectResult = /** @class */ (function () {
    function PreviewTakeOverOpenIdConnectResult() {
        this.item = null;
        this.banStatuses = null;
        this.token = null;
        this.expire = null;
    }
    PreviewTakeOverOpenIdConnectResult.prototype.getItem = function () {
        return this.item;
    };
    PreviewTakeOverOpenIdConnectResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    PreviewTakeOverOpenIdConnectResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    PreviewTakeOverOpenIdConnectResult.prototype.getBanStatuses = function () {
        return this.banStatuses;
    };
    PreviewTakeOverOpenIdConnectResult.prototype.setBanStatuses = function (banStatuses) {
        this.banStatuses = banStatuses;
        return this;
    };
    PreviewTakeOverOpenIdConnectResult.prototype.withBanStatuses = function (banStatuses) {
        this.banStatuses = banStatuses;
        return this;
    };
    PreviewTakeOverOpenIdConnectResult.prototype.getToken = function () {
        return this.token;
    };
    PreviewTakeOverOpenIdConnectResult.prototype.setToken = function (token) {
        this.token = token;
        return this;
    };
    PreviewTakeOverOpenIdConnectResult.prototype.withToken = function (token) {
        this.token = token;
        return this;
    };
    PreviewTakeOverOpenIdConnectResult.prototype.getExpire = function () {
        return this.expire;
    };
    PreviewTakeOverOpenIdConnectResult.prototype.setExpire = function (expire) {
        this.expire = expire;
        return this;
    };
    PreviewTakeOverOpenIdConnectResult.prototype.withExpire = function (expire) {
        this.expire = expire;
        return this;
    };
    PreviewTakeOverOpenIdConnectResult.fromDict = function (data) {
        return new PreviewTakeOverOpenIdConnectResult()
            .withItem(Gs2Account.Account.fromDict(data["item"]))
            .withBanStatuses(data.banStatuses ?
            data.banStatuses.map(function (item) {
                return Gs2Account.BanStatus.fromDict(item);
            }) : null)
            .withToken(data["token"])
            .withExpire(data["expire"]);
    };
    PreviewTakeOverOpenIdConnectResult.prototype.toDict = function () {
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
    return PreviewTakeOverOpenIdConnectResult;
}());
exports.default = PreviewTakeOverOpenIdConnectResult;
//# sourceMappingURL=PreviewTakeOverOpenIdConnectResult.js.map