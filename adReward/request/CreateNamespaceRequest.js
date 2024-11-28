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
var CreateNamespaceRequest = /** @class */ (function () {
    function CreateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.name = null;
        this.admob = null;
        this.unityAd = null;
        this.appLovinMaxes = null;
        this.description = null;
        this.acquirePointScript = null;
        this.consumePointScript = null;
        this.changePointNotification = null;
        this.logSetting = null;
    }
    CreateNamespaceRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateNamespaceRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateNamespaceRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateNamespaceRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateNamespaceRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateNamespaceRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateNamespaceRequest.prototype.getName = function () {
        return this.name;
    };
    CreateNamespaceRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateNamespaceRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateNamespaceRequest.prototype.getAdmob = function () {
        return this.admob;
    };
    CreateNamespaceRequest.prototype.setAdmob = function (admob) {
        this.admob = admob;
        return this;
    };
    CreateNamespaceRequest.prototype.withAdmob = function (admob) {
        this.admob = admob;
        return this;
    };
    CreateNamespaceRequest.prototype.getUnityAd = function () {
        return this.unityAd;
    };
    CreateNamespaceRequest.prototype.setUnityAd = function (unityAd) {
        this.unityAd = unityAd;
        return this;
    };
    CreateNamespaceRequest.prototype.withUnityAd = function (unityAd) {
        this.unityAd = unityAd;
        return this;
    };
    CreateNamespaceRequest.prototype.getAppLovinMaxes = function () {
        return this.appLovinMaxes;
    };
    CreateNamespaceRequest.prototype.setAppLovinMaxes = function (appLovinMaxes) {
        this.appLovinMaxes = appLovinMaxes;
        return this;
    };
    CreateNamespaceRequest.prototype.withAppLovinMaxes = function (appLovinMaxes) {
        this.appLovinMaxes = appLovinMaxes;
        return this;
    };
    CreateNamespaceRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateNamespaceRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateNamespaceRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateNamespaceRequest.prototype.getAcquirePointScript = function () {
        return this.acquirePointScript;
    };
    CreateNamespaceRequest.prototype.setAcquirePointScript = function (acquirePointScript) {
        this.acquirePointScript = acquirePointScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withAcquirePointScript = function (acquirePointScript) {
        this.acquirePointScript = acquirePointScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getConsumePointScript = function () {
        return this.consumePointScript;
    };
    CreateNamespaceRequest.prototype.setConsumePointScript = function (consumePointScript) {
        this.consumePointScript = consumePointScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withConsumePointScript = function (consumePointScript) {
        this.consumePointScript = consumePointScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getChangePointNotification = function () {
        return this.changePointNotification;
    };
    CreateNamespaceRequest.prototype.setChangePointNotification = function (changePointNotification) {
        this.changePointNotification = changePointNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.withChangePointNotification = function (changePointNotification) {
        this.changePointNotification = changePointNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.getLogSetting = function () {
        return this.logSetting;
    };
    CreateNamespaceRequest.prototype.setLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    CreateNamespaceRequest.prototype.withLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    CreateNamespaceRequest.fromDict = function (data) {
        return new CreateNamespaceRequest()
            .withName(data["name"])
            .withAdmob(Gs2AdReward.AdMob.fromDict(data["admob"]))
            .withUnityAd(Gs2AdReward.UnityAd.fromDict(data["unityAd"]))
            .withAppLovinMaxes(data.appLovinMaxes ?
            data.appLovinMaxes.map(function (item) {
                return Gs2AdReward.AppLovinMax.fromDict(item);
            }) : null)
            .withDescription(data["description"])
            .withAcquirePointScript(Gs2AdReward.ScriptSetting.fromDict(data["acquirePointScript"]))
            .withConsumePointScript(Gs2AdReward.ScriptSetting.fromDict(data["consumePointScript"]))
            .withChangePointNotification(Gs2AdReward.NotificationSetting.fromDict(data["changePointNotification"]))
            .withLogSetting(Gs2AdReward.LogSetting.fromDict(data["logSetting"]));
    };
    CreateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f;
        return {
            "name": this.getName(),
            "admob": (_a = this.getAdmob()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "unityAd": (_b = this.getUnityAd()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "appLovinMaxes": this.getAppLovinMaxes() ?
                this.getAppLovinMaxes().map(function (item) {
                    return item.toDict();
                }) : null,
            "description": this.getDescription(),
            "acquirePointScript": (_c = this.getAcquirePointScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "consumePointScript": (_d = this.getConsumePointScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "changePointNotification": (_e = this.getChangePointNotification()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "logSetting": (_f = this.getLogSetting()) === null || _f === void 0 ? void 0 : _f.toDict(),
        };
    };
    return CreateNamespaceRequest;
}());
exports.default = CreateNamespaceRequest;
//# sourceMappingURL=CreateNamespaceRequest.js.map