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
var LogRate = /** @class */ (function () {
    function LogRate() {
        this.base = null;
        this.logs = null;
    }
    LogRate.prototype.getBase = function () {
        return this.base;
    };
    LogRate.prototype.setBase = function (base) {
        this.base = base;
        return this;
    };
    LogRate.prototype.withBase = function (base) {
        this.base = base;
        return this;
    };
    LogRate.prototype.getLogs = function () {
        return this.logs;
    };
    LogRate.prototype.setLogs = function (logs) {
        this.logs = logs;
        return this;
    };
    LogRate.prototype.withLogs = function (logs) {
        this.logs = logs;
        return this;
    };
    LogRate.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LogRate()
            .withBase(data["base"])
            .withLogs(data.logs ?
            data.logs.map(function (item) {
                return item;
            }) : null);
    };
    LogRate.prototype.toDict = function () {
        return {
            "base": this.getBase(),
            "logs": this.getLogs() ?
                this.getLogs().map(function (item) {
                    return item;
                }) : null,
        };
    };
    return LogRate;
}());
exports.default = LogRate;
//# sourceMappingURL=LogRate.js.map