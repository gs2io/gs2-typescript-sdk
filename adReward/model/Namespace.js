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
var Gs2AdReward = tslib_1.__importStar(require("../../adReward/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:adReward:{namespaceName}";
var Namespace = /** @class */ (function () {
    function Namespace() {
        this.namespaceId = null;
        this.name = null;
        this.description = null;
        this.transactionSetting = null;
        this.admob = null;
        this.unityAd = null;
        this.appLovinMaxes = null;
        this.acquirePointScript = null;
        this.consumePointScript = null;
        this.changePointNotification = null;
        this.logSetting = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    Namespace.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Namespace.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Namespace.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Namespace.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        return true;
    };
    Namespace.createGrn = function (region, ownerId, namespaceName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '');
    };
    Namespace.prototype.getNamespaceId = function () {
        return this.namespaceId;
    };
    Namespace.prototype.setNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    Namespace.prototype.withNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    Namespace.prototype.getName = function () {
        return this.name;
    };
    Namespace.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Namespace.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Namespace.prototype.getDescription = function () {
        return this.description;
    };
    Namespace.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    Namespace.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    Namespace.prototype.getTransactionSetting = function () {
        return this.transactionSetting;
    };
    Namespace.prototype.setTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
        return this;
    };
    Namespace.prototype.withTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
        return this;
    };
    Namespace.prototype.getAdmob = function () {
        return this.admob;
    };
    Namespace.prototype.setAdmob = function (admob) {
        this.admob = admob;
        return this;
    };
    Namespace.prototype.withAdmob = function (admob) {
        this.admob = admob;
        return this;
    };
    Namespace.prototype.getUnityAd = function () {
        return this.unityAd;
    };
    Namespace.prototype.setUnityAd = function (unityAd) {
        this.unityAd = unityAd;
        return this;
    };
    Namespace.prototype.withUnityAd = function (unityAd) {
        this.unityAd = unityAd;
        return this;
    };
    Namespace.prototype.getAppLovinMaxes = function () {
        return this.appLovinMaxes;
    };
    Namespace.prototype.setAppLovinMaxes = function (appLovinMaxes) {
        this.appLovinMaxes = appLovinMaxes;
        return this;
    };
    Namespace.prototype.withAppLovinMaxes = function (appLovinMaxes) {
        this.appLovinMaxes = appLovinMaxes;
        return this;
    };
    Namespace.prototype.getAcquirePointScript = function () {
        return this.acquirePointScript;
    };
    Namespace.prototype.setAcquirePointScript = function (acquirePointScript) {
        this.acquirePointScript = acquirePointScript;
        return this;
    };
    Namespace.prototype.withAcquirePointScript = function (acquirePointScript) {
        this.acquirePointScript = acquirePointScript;
        return this;
    };
    Namespace.prototype.getConsumePointScript = function () {
        return this.consumePointScript;
    };
    Namespace.prototype.setConsumePointScript = function (consumePointScript) {
        this.consumePointScript = consumePointScript;
        return this;
    };
    Namespace.prototype.withConsumePointScript = function (consumePointScript) {
        this.consumePointScript = consumePointScript;
        return this;
    };
    Namespace.prototype.getChangePointNotification = function () {
        return this.changePointNotification;
    };
    Namespace.prototype.setChangePointNotification = function (changePointNotification) {
        this.changePointNotification = changePointNotification;
        return this;
    };
    Namespace.prototype.withChangePointNotification = function (changePointNotification) {
        this.changePointNotification = changePointNotification;
        return this;
    };
    Namespace.prototype.getLogSetting = function () {
        return this.logSetting;
    };
    Namespace.prototype.setLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    Namespace.prototype.withLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    Namespace.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Namespace.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Namespace.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Namespace.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Namespace.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Namespace.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Namespace.prototype.getRevision = function () {
        return this.revision;
    };
    Namespace.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Namespace.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Namespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Namespace()
            .withNamespaceId(data["namespaceId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withTransactionSetting(Gs2AdReward.TransactionSetting.fromDict(data["transactionSetting"]))
            .withAdmob(Gs2AdReward.AdMob.fromDict(data["admob"]))
            .withUnityAd(Gs2AdReward.UnityAd.fromDict(data["unityAd"]))
            .withAppLovinMaxes(data.appLovinMaxes ?
            data.appLovinMaxes.map(function (item) {
                return Gs2AdReward.AppLovinMax.fromDict(item);
            }) : null)
            .withAcquirePointScript(Gs2AdReward.ScriptSetting.fromDict(data["acquirePointScript"]))
            .withConsumePointScript(Gs2AdReward.ScriptSetting.fromDict(data["consumePointScript"]))
            .withChangePointNotification(Gs2AdReward.NotificationSetting.fromDict(data["changePointNotification"]))
            .withLogSetting(Gs2AdReward.LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Namespace.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "transactionSetting": (_a = this.getTransactionSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "admob": (_b = this.getAdmob()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "unityAd": (_c = this.getUnityAd()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "appLovinMaxes": this.getAppLovinMaxes() ?
                this.getAppLovinMaxes().map(function (item) {
                    return item.toDict();
                }) : null,
            "acquirePointScript": (_d = this.getAcquirePointScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "consumePointScript": (_e = this.getConsumePointScript()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "changePointNotification": (_f = this.getChangePointNotification()) === null || _f === void 0 ? void 0 : _f.toDict(),
            "logSetting": (_g = this.getLogSetting()) === null || _g === void 0 ? void 0 : _g.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Namespace;
}());
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map