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
var GooglePlayRealtimeNotificationMessage = /** @class */ (function () {
    function GooglePlayRealtimeNotificationMessage() {
        this.data = null;
        this.messageId = null;
        this.publishTime = null;
    }
    GooglePlayRealtimeNotificationMessage.prototype.getData = function () {
        return this.data;
    };
    GooglePlayRealtimeNotificationMessage.prototype.setData = function (data) {
        this.data = data;
        return this;
    };
    GooglePlayRealtimeNotificationMessage.prototype.withData = function (data) {
        this.data = data;
        return this;
    };
    GooglePlayRealtimeNotificationMessage.prototype.getMessageId = function () {
        return this.messageId;
    };
    GooglePlayRealtimeNotificationMessage.prototype.setMessageId = function (messageId) {
        this.messageId = messageId;
        return this;
    };
    GooglePlayRealtimeNotificationMessage.prototype.withMessageId = function (messageId) {
        this.messageId = messageId;
        return this;
    };
    GooglePlayRealtimeNotificationMessage.prototype.getPublishTime = function () {
        return this.publishTime;
    };
    GooglePlayRealtimeNotificationMessage.prototype.setPublishTime = function (publishTime) {
        this.publishTime = publishTime;
        return this;
    };
    GooglePlayRealtimeNotificationMessage.prototype.withPublishTime = function (publishTime) {
        this.publishTime = publishTime;
        return this;
    };
    GooglePlayRealtimeNotificationMessage.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new GooglePlayRealtimeNotificationMessage()
            .withData(data["data"])
            .withMessageId(data["messageId"])
            .withPublishTime(data["publishTime"]);
    };
    GooglePlayRealtimeNotificationMessage.prototype.toDict = function () {
        return {
            "data": this.getData(),
            "messageId": this.getMessageId(),
            "publishTime": this.getPublishTime(),
        };
    };
    return GooglePlayRealtimeNotificationMessage;
}());
exports.default = GooglePlayRealtimeNotificationMessage;
//# sourceMappingURL=GooglePlayRealtimeNotificationMessage.js.map