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
var ChangeStateEvent = /** @class */ (function () {
    function ChangeStateEvent() {
        this.taskName = null;
        this.hash = null;
        this.timestamp = null;
    }
    ChangeStateEvent.prototype.getTaskName = function () {
        return this.taskName;
    };
    ChangeStateEvent.prototype.setTaskName = function (taskName) {
        this.taskName = taskName;
        return this;
    };
    ChangeStateEvent.prototype.withTaskName = function (taskName) {
        this.taskName = taskName;
        return this;
    };
    ChangeStateEvent.prototype.getHash = function () {
        return this.hash;
    };
    ChangeStateEvent.prototype.setHash = function (hash) {
        this.hash = hash;
        return this;
    };
    ChangeStateEvent.prototype.withHash = function (hash) {
        this.hash = hash;
        return this;
    };
    ChangeStateEvent.prototype.getTimestamp = function () {
        return this.timestamp;
    };
    ChangeStateEvent.prototype.setTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    ChangeStateEvent.prototype.withTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    ChangeStateEvent.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ChangeStateEvent()
            .withTaskName(data["taskName"])
            .withHash(data["hash"])
            .withTimestamp(data["timestamp"]);
    };
    ChangeStateEvent.prototype.toDict = function () {
        return {
            "taskName": this.getTaskName(),
            "hash": this.getHash(),
            "timestamp": this.getTimestamp(),
        };
    };
    return ChangeStateEvent;
}());
exports.default = ChangeStateEvent;
//# sourceMappingURL=ChangeStateEvent.js.map