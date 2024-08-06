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
var InGameLogTag_1 = tslib_1.__importDefault(require("./InGameLogTag"));
var grnFormat = "";
var InGameLog = /** @class */ (function () {
    function InGameLog() {
        this.timestamp = null;
        this.requestId = null;
        this.userId = null;
        this.tags = null;
        this.payload = null;
    }
    InGameLog.isValid = function (grn) {
        return true;
    };
    InGameLog.createGrn = function () {
        return grnFormat;
    };
    InGameLog.prototype.getTimestamp = function () {
        return this.timestamp;
    };
    InGameLog.prototype.setTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    InGameLog.prototype.withTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    InGameLog.prototype.getRequestId = function () {
        return this.requestId;
    };
    InGameLog.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    InGameLog.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    InGameLog.prototype.getUserId = function () {
        return this.userId;
    };
    InGameLog.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    InGameLog.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    InGameLog.prototype.getTags = function () {
        return this.tags;
    };
    InGameLog.prototype.setTags = function (tags) {
        this.tags = tags;
        return this;
    };
    InGameLog.prototype.withTags = function (tags) {
        this.tags = tags;
        return this;
    };
    InGameLog.prototype.getPayload = function () {
        return this.payload;
    };
    InGameLog.prototype.setPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    InGameLog.prototype.withPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    InGameLog.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InGameLog()
            .withTimestamp(data["timestamp"])
            .withRequestId(data["requestId"])
            .withUserId(data["userId"])
            .withTags(data.tags ?
            data.tags.map(function (item) {
                return InGameLogTag_1.default.fromDict(item);
            }) : [])
            .withPayload(data["payload"]);
    };
    InGameLog.prototype.toDict = function () {
        return {
            "timestamp": this.getTimestamp(),
            "requestId": this.getRequestId(),
            "userId": this.getUserId(),
            "tags": this.getTags() ?
                this.getTags().map(function (item) {
                    return item.toDict();
                }) : [],
            "payload": this.getPayload(),
        };
    };
    return InGameLog;
}());
exports.default = InGameLog;
//# sourceMappingURL=InGameLog.js.map