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
var Gs2Log = tslib_1.__importStar(require("../../log/model"));
var LogEntry = /** @class */ (function () {
    function LogEntry() {
        this.timestamp = null;
        this.status = null;
        this.duration = null;
        this.line = null;
        this.labels = null;
    }
    LogEntry.prototype.getTimestamp = function () {
        return this.timestamp;
    };
    LogEntry.prototype.setTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    LogEntry.prototype.withTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    LogEntry.prototype.getStatus = function () {
        return this.status;
    };
    LogEntry.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    LogEntry.prototype.withStatus = function (status) {
        this.status = status;
        return this;
    };
    LogEntry.prototype.getDuration = function () {
        return this.duration;
    };
    LogEntry.prototype.setDuration = function (duration) {
        this.duration = duration;
        return this;
    };
    LogEntry.prototype.withDuration = function (duration) {
        this.duration = duration;
        return this;
    };
    LogEntry.prototype.getLine = function () {
        return this.line;
    };
    LogEntry.prototype.setLine = function (line) {
        this.line = line;
        return this;
    };
    LogEntry.prototype.withLine = function (line) {
        this.line = line;
        return this;
    };
    LogEntry.prototype.getLabels = function () {
        return this.labels;
    };
    LogEntry.prototype.setLabels = function (labels) {
        this.labels = labels;
        return this;
    };
    LogEntry.prototype.withLabels = function (labels) {
        this.labels = labels;
        return this;
    };
    LogEntry.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LogEntry()
            .withTimestamp(data["timestamp"])
            .withStatus(data["status"])
            .withDuration(data["duration"])
            .withLine(data["line"])
            .withLabels(data.labels ?
            data.labels.map(function (item) {
                return Gs2Log.Label.fromDict(item);
            }) : null);
    };
    LogEntry.prototype.toDict = function () {
        return {
            "timestamp": this.getTimestamp(),
            "status": this.getStatus(),
            "duration": this.getDuration(),
            "line": this.getLine(),
            "labels": this.getLabels() ?
                this.getLabels().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return LogEntry;
}());
exports.default = LogEntry;
//# sourceMappingURL=LogEntry.js.map