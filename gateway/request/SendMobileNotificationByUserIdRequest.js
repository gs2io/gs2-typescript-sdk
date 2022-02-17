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
var SendMobileNotificationByUserIdRequest = /** @class */ (function () {
    function SendMobileNotificationByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.subject = null;
        this.payload = null;
        this.sound = null;
    }
    SendMobileNotificationByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SendMobileNotificationByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SendMobileNotificationByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SendMobileNotificationByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SendMobileNotificationByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SendMobileNotificationByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SendMobileNotificationByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SendMobileNotificationByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SendMobileNotificationByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SendMobileNotificationByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SendMobileNotificationByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SendMobileNotificationByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SendMobileNotificationByUserIdRequest.prototype.getSubject = function () {
        return this.subject;
    };
    SendMobileNotificationByUserIdRequest.prototype.setSubject = function (subject) {
        this.subject = subject;
        return this;
    };
    SendMobileNotificationByUserIdRequest.prototype.withSubject = function (subject) {
        this.subject = subject;
        return this;
    };
    SendMobileNotificationByUserIdRequest.prototype.getPayload = function () {
        return this.payload;
    };
    SendMobileNotificationByUserIdRequest.prototype.setPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    SendMobileNotificationByUserIdRequest.prototype.withPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    SendMobileNotificationByUserIdRequest.prototype.getSound = function () {
        return this.sound;
    };
    SendMobileNotificationByUserIdRequest.prototype.setSound = function (sound) {
        this.sound = sound;
        return this;
    };
    SendMobileNotificationByUserIdRequest.prototype.withSound = function (sound) {
        this.sound = sound;
        return this;
    };
    SendMobileNotificationByUserIdRequest.fromDict = function (data) {
        return new SendMobileNotificationByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withSubject(data["subject"])
            .withPayload(data["payload"])
            .withSound(data["sound"]);
    };
    SendMobileNotificationByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "subject": this.getSubject(),
            "payload": this.getPayload(),
            "sound": this.getSound(),
        };
    };
    return SendMobileNotificationByUserIdRequest;
}());
export default SendMobileNotificationByUserIdRequest;
//# sourceMappingURL=SendMobileNotificationByUserIdRequest.js.map