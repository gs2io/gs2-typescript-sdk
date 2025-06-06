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
var UpdateCurrentLotteryMasterRequest = /** @class */ (function () {
    function UpdateCurrentLotteryMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.mode = null;
        this.settings = null;
        this.uploadToken = null;
    }
    UpdateCurrentLotteryMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateCurrentLotteryMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentLotteryMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentLotteryMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateCurrentLotteryMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentLotteryMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentLotteryMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateCurrentLotteryMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentLotteryMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentLotteryMasterRequest.prototype.getMode = function () {
        return this.mode;
    };
    UpdateCurrentLotteryMasterRequest.prototype.setMode = function (mode) {
        this.mode = mode;
        return this;
    };
    UpdateCurrentLotteryMasterRequest.prototype.withMode = function (mode) {
        this.mode = mode;
        return this;
    };
    UpdateCurrentLotteryMasterRequest.prototype.getSettings = function () {
        return this.settings;
    };
    UpdateCurrentLotteryMasterRequest.prototype.setSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    UpdateCurrentLotteryMasterRequest.prototype.withSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    UpdateCurrentLotteryMasterRequest.prototype.getUploadToken = function () {
        return this.uploadToken;
    };
    UpdateCurrentLotteryMasterRequest.prototype.setUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    UpdateCurrentLotteryMasterRequest.prototype.withUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    UpdateCurrentLotteryMasterRequest.fromDict = function (data) {
        return new UpdateCurrentLotteryMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withMode(data["mode"])
            .withSettings(data["settings"])
            .withUploadToken(data["uploadToken"]);
    };
    UpdateCurrentLotteryMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "mode": this.getMode(),
            "settings": this.getSettings(),
            "uploadToken": this.getUploadToken(),
        };
    };
    return UpdateCurrentLotteryMasterRequest;
}());
exports.default = UpdateCurrentLotteryMasterRequest;
//# sourceMappingURL=UpdateCurrentLotteryMasterRequest.js.map