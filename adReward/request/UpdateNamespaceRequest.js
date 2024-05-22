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
var Gs2AdReward = tslib_1.__importStar(require("../model"));
var UpdateNamespaceRequest = /** @class */ (function () {
    function UpdateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.description = null;
        this.admob = null;
        this.unityAd = null;
        this.appLovinMaxes = null;
        this.acquirePointScript = null;
        this.consumePointScript = null;
        this.changePointNotification = null;
        this.logSetting = null;
    }
    UpdateNamespaceRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateNamespaceRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateNamespaceRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateNamespaceRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateNamespaceRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateNamespaceRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateNamespaceRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateNamespaceRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateNamespaceRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateNamespaceRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateNamespaceRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateNamespaceRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateNamespaceRequest.prototype.getAdmob = function () {
        return this.admob;
    };
    UpdateNamespaceRequest.prototype.setAdmob = function (admob) {
        this.admob = admob;
        return this;
    };
    UpdateNamespaceRequest.prototype.withAdmob = function (admob) {
        this.admob = admob;
        return this;
    };
    UpdateNamespaceRequest.prototype.getUnityAd = function () {
        return this.unityAd;
    };
    UpdateNamespaceRequest.prototype.setUnityAd = function (unityAd) {
        this.unityAd = unityAd;
        return this;
    };
    UpdateNamespaceRequest.prototype.withUnityAd = function (unityAd) {
        this.unityAd = unityAd;
        return this;
    };
    UpdateNamespaceRequest.prototype.getAppLovinMaxes = function () {
        return this.appLovinMaxes;
    };
    UpdateNamespaceRequest.prototype.setAppLovinMaxes = function (appLovinMaxes) {
        this.appLovinMaxes = appLovinMaxes;
        return this;
    };
    UpdateNamespaceRequest.prototype.withAppLovinMaxes = function (appLovinMaxes) {
        this.appLovinMaxes = appLovinMaxes;
        return this;
    };
    UpdateNamespaceRequest.prototype.getAcquirePointScript = function () {
        return this.acquirePointScript;
    };
    UpdateNamespaceRequest.prototype.setAcquirePointScript = function (acquirePointScript) {
        this.acquirePointScript = acquirePointScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withAcquirePointScript = function (acquirePointScript) {
        this.acquirePointScript = acquirePointScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getConsumePointScript = function () {
        return this.consumePointScript;
    };
    UpdateNamespaceRequest.prototype.setConsumePointScript = function (consumePointScript) {
        this.consumePointScript = consumePointScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withConsumePointScript = function (consumePointScript) {
        this.consumePointScript = consumePointScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getChangePointNotification = function () {
        return this.changePointNotification;
    };
    UpdateNamespaceRequest.prototype.setChangePointNotification = function (changePointNotification) {
        this.changePointNotification = changePointNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.withChangePointNotification = function (changePointNotification) {
        this.changePointNotification = changePointNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.getLogSetting = function () {
        return this.logSetting;
    };
    UpdateNamespaceRequest.prototype.setLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    UpdateNamespaceRequest.prototype.withLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    UpdateNamespaceRequest.fromDict = function (data) {
        return new UpdateNamespaceRequest()
            .withNamespaceName(data["namespaceName"])
            .withDescription(data["description"])
            .withAdmob(Gs2AdReward.AdMob.fromDict(data["admob"]))
            .withUnityAd(Gs2AdReward.UnityAd.fromDict(data["unityAd"]))
            .withAppLovinMaxes(data.appLovinMaxes ?
            data.appLovinMaxes.map(function (item) {
                return Gs2AdReward.AppLovinMax.fromDict(item);
            }) : [])
            .withAcquirePointScript(Gs2AdReward.ScriptSetting.fromDict(data["acquirePointScript"]))
            .withConsumePointScript(Gs2AdReward.ScriptSetting.fromDict(data["consumePointScript"]))
            .withChangePointNotification(Gs2AdReward.NotificationSetting.fromDict(data["changePointNotification"]))
            .withLogSetting(Gs2AdReward.LogSetting.fromDict(data["logSetting"]));
    };
    UpdateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f;
        return {
            "namespaceName": this.getNamespaceName(),
            "description": this.getDescription(),
            "admob": (_a = this.getAdmob()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "unityAd": (_b = this.getUnityAd()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "appLovinMaxes": this.getAppLovinMaxes() ?
                this.getAppLovinMaxes().map(function (item) {
                    return item.toDict();
                }) : [],
            "acquirePointScript": (_c = this.getAcquirePointScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "consumePointScript": (_d = this.getConsumePointScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "changePointNotification": (_e = this.getChangePointNotification()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "logSetting": (_f = this.getLogSetting()) === null || _f === void 0 ? void 0 : _f.toDict(),
        };
    };
    return UpdateNamespaceRequest;
}());
exports.default = UpdateNamespaceRequest;
//# sourceMappingURL=UpdateNamespaceRequest.js.map