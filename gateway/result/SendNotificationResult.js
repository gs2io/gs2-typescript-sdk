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
var SendNotificationResult = /** @class */ (function () {
    function SendNotificationResult() {
        this.protocol = null;
        this.sendConnectionIds = null;
    }
    SendNotificationResult.prototype.getProtocol = function () {
        return this.protocol;
    };
    SendNotificationResult.prototype.setProtocol = function (protocol) {
        this.protocol = protocol;
        return this;
    };
    SendNotificationResult.prototype.withProtocol = function (protocol) {
        this.protocol = protocol;
        return this;
    };
    SendNotificationResult.prototype.getSendConnectionIds = function () {
        return this.sendConnectionIds;
    };
    SendNotificationResult.prototype.setSendConnectionIds = function (sendConnectionIds) {
        this.sendConnectionIds = sendConnectionIds;
        return this;
    };
    SendNotificationResult.prototype.withSendConnectionIds = function (sendConnectionIds) {
        this.sendConnectionIds = sendConnectionIds;
        return this;
    };
    SendNotificationResult.fromDict = function (data) {
        return new SendNotificationResult()
            .withProtocol(data["protocol"])
            .withSendConnectionIds(data.sendConnectionIds ?
            data.sendConnectionIds.map(function (item) {
                return item;
            }) : []);
    };
    SendNotificationResult.prototype.toDict = function () {
        return {
            "protocol": this.getProtocol(),
            "sendConnectionIds": this.getSendConnectionIds() ?
                this.getSendConnectionIds().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return SendNotificationResult;
}());
exports.default = SendNotificationResult;
//# sourceMappingURL=SendNotificationResult.js.map