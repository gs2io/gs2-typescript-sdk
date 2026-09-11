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
var Gs2Inbox = tslib_1.__importStar(require("../../inbox/model"));
var NotificationSetting = /** @class */ (function () {
    function NotificationSetting() {
        this.gatewayNamespaceId = null;
        this.enableTransferMobileNotification = null;
        this.sound = null;
        this.mobileNotificationMessages = null;
        this.enable = null;
    }
    NotificationSetting.prototype.getGatewayNamespaceId = function () {
        return this.gatewayNamespaceId;
    };
    NotificationSetting.prototype.setGatewayNamespaceId = function (gatewayNamespaceId) {
        this.gatewayNamespaceId = gatewayNamespaceId;
        return this;
    };
    NotificationSetting.prototype.withGatewayNamespaceId = function (gatewayNamespaceId) {
        this.gatewayNamespaceId = gatewayNamespaceId;
        return this;
    };
    NotificationSetting.prototype.getEnableTransferMobileNotification = function () {
        return this.enableTransferMobileNotification;
    };
    NotificationSetting.prototype.setEnableTransferMobileNotification = function (enableTransferMobileNotification) {
        this.enableTransferMobileNotification = enableTransferMobileNotification;
        return this;
    };
    NotificationSetting.prototype.withEnableTransferMobileNotification = function (enableTransferMobileNotification) {
        this.enableTransferMobileNotification = enableTransferMobileNotification;
        return this;
    };
    NotificationSetting.prototype.getSound = function () {
        return this.sound;
    };
    NotificationSetting.prototype.setSound = function (sound) {
        this.sound = sound;
        return this;
    };
    NotificationSetting.prototype.withSound = function (sound) {
        this.sound = sound;
        return this;
    };
    NotificationSetting.prototype.getMobileNotificationMessages = function () {
        return this.mobileNotificationMessages;
    };
    NotificationSetting.prototype.setMobileNotificationMessages = function (mobileNotificationMessages) {
        this.mobileNotificationMessages = mobileNotificationMessages;
        return this;
    };
    NotificationSetting.prototype.withMobileNotificationMessages = function (mobileNotificationMessages) {
        this.mobileNotificationMessages = mobileNotificationMessages;
        return this;
    };
    NotificationSetting.prototype.getEnable = function () {
        return this.enable;
    };
    NotificationSetting.prototype.setEnable = function (enable) {
        this.enable = enable;
        return this;
    };
    NotificationSetting.prototype.withEnable = function (enable) {
        this.enable = enable;
        return this;
    };
    NotificationSetting.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new NotificationSetting()
            .withGatewayNamespaceId(data["gatewayNamespaceId"])
            .withEnableTransferMobileNotification(data["enableTransferMobileNotification"])
            .withSound(data["sound"])
            .withMobileNotificationMessages(data.mobileNotificationMessages ?
            data.mobileNotificationMessages.map(function (item) {
                return Gs2Inbox.MobileNotificationMessage.fromDict(item);
            }) : null)
            .withEnable(data["enable"]);
    };
    NotificationSetting.prototype.toDict = function () {
        return {
            "gatewayNamespaceId": this.getGatewayNamespaceId(),
            "enableTransferMobileNotification": this.getEnableTransferMobileNotification(),
            "sound": this.getSound(),
            "mobileNotificationMessages": this.getMobileNotificationMessages() ?
                this.getMobileNotificationMessages().map(function (item) {
                    return item.toDict();
                }) : null,
            "enable": this.getEnable(),
        };
    };
    return NotificationSetting;
}());
exports.default = NotificationSetting;
//# sourceMappingURL=NotificationSetting.js.map