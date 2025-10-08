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
var SendNotificationEntry = /** @class */ (function () {
    function SendNotificationEntry() {
        this.userId = null;
        this.issuer = null;
        this.subject = null;
        this.payload = null;
        this.enableTransferMobileNotification = null;
        this.sound = null;
    }
    SendNotificationEntry.prototype.getUserId = function () {
        return this.userId;
    };
    SendNotificationEntry.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SendNotificationEntry.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SendNotificationEntry.prototype.getIssuer = function () {
        return this.issuer;
    };
    SendNotificationEntry.prototype.setIssuer = function (issuer) {
        this.issuer = issuer;
        return this;
    };
    SendNotificationEntry.prototype.withIssuer = function (issuer) {
        this.issuer = issuer;
        return this;
    };
    SendNotificationEntry.prototype.getSubject = function () {
        return this.subject;
    };
    SendNotificationEntry.prototype.setSubject = function (subject) {
        this.subject = subject;
        return this;
    };
    SendNotificationEntry.prototype.withSubject = function (subject) {
        this.subject = subject;
        return this;
    };
    SendNotificationEntry.prototype.getPayload = function () {
        return this.payload;
    };
    SendNotificationEntry.prototype.setPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    SendNotificationEntry.prototype.withPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    SendNotificationEntry.prototype.getEnableTransferMobileNotification = function () {
        return this.enableTransferMobileNotification;
    };
    SendNotificationEntry.prototype.setEnableTransferMobileNotification = function (enableTransferMobileNotification) {
        this.enableTransferMobileNotification = enableTransferMobileNotification;
        return this;
    };
    SendNotificationEntry.prototype.withEnableTransferMobileNotification = function (enableTransferMobileNotification) {
        this.enableTransferMobileNotification = enableTransferMobileNotification;
        return this;
    };
    SendNotificationEntry.prototype.getSound = function () {
        return this.sound;
    };
    SendNotificationEntry.prototype.setSound = function (sound) {
        this.sound = sound;
        return this;
    };
    SendNotificationEntry.prototype.withSound = function (sound) {
        this.sound = sound;
        return this;
    };
    SendNotificationEntry.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SendNotificationEntry()
            .withUserId(data["userId"])
            .withIssuer(data["issuer"])
            .withSubject(data["subject"])
            .withPayload(data["payload"])
            .withEnableTransferMobileNotification(data["enableTransferMobileNotification"])
            .withSound(data["sound"]);
    };
    SendNotificationEntry.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "issuer": this.getIssuer(),
            "subject": this.getSubject(),
            "payload": this.getPayload(),
            "enableTransferMobileNotification": this.getEnableTransferMobileNotification(),
            "sound": this.getSound(),
        };
    };
    return SendNotificationEntry;
}());
exports.default = SendNotificationEntry;
//# sourceMappingURL=SendNotificationEntry.js.map