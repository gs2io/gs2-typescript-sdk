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
var SendNotificationRequest = /** @class */ (function () {
    function SendNotificationRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.subject = null;
        this.payload = null;
        this.enableTransferMobileNotification = null;
        this.sound = null;
    }
    SendNotificationRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SendNotificationRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SendNotificationRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SendNotificationRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SendNotificationRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SendNotificationRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SendNotificationRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SendNotificationRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SendNotificationRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SendNotificationRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SendNotificationRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SendNotificationRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SendNotificationRequest.prototype.getSubject = function () {
        return this.subject;
    };
    SendNotificationRequest.prototype.setSubject = function (subject) {
        this.subject = subject;
        return this;
    };
    SendNotificationRequest.prototype.withSubject = function (subject) {
        this.subject = subject;
        return this;
    };
    SendNotificationRequest.prototype.getPayload = function () {
        return this.payload;
    };
    SendNotificationRequest.prototype.setPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    SendNotificationRequest.prototype.withPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    SendNotificationRequest.prototype.getEnableTransferMobileNotification = function () {
        return this.enableTransferMobileNotification;
    };
    SendNotificationRequest.prototype.setEnableTransferMobileNotification = function (enableTransferMobileNotification) {
        this.enableTransferMobileNotification = enableTransferMobileNotification;
        return this;
    };
    SendNotificationRequest.prototype.withEnableTransferMobileNotification = function (enableTransferMobileNotification) {
        this.enableTransferMobileNotification = enableTransferMobileNotification;
        return this;
    };
    SendNotificationRequest.prototype.getSound = function () {
        return this.sound;
    };
    SendNotificationRequest.prototype.setSound = function (sound) {
        this.sound = sound;
        return this;
    };
    SendNotificationRequest.prototype.withSound = function (sound) {
        this.sound = sound;
        return this;
    };
    SendNotificationRequest.fromDict = function (data) {
        return new SendNotificationRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withSubject(data["subject"])
            .withPayload(data["payload"])
            .withEnableTransferMobileNotification(data["enableTransferMobileNotification"])
            .withSound(data["sound"]);
    };
    SendNotificationRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "subject": this.getSubject(),
            "payload": this.getPayload(),
            "enableTransferMobileNotification": this.getEnableTransferMobileNotification(),
            "sound": this.getSound(),
        };
    };
    return SendNotificationRequest;
}());
export default SendNotificationRequest;
//# sourceMappingURL=SendNotificationRequest.js.map