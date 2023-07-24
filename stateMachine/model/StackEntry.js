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
var StackEntry = /** @class */ (function () {
    function StackEntry() {
        this.stateMachineName = null;
        this.taskName = null;
    }
    StackEntry.prototype.getStateMachineName = function () {
        return this.stateMachineName;
    };
    StackEntry.prototype.setStateMachineName = function (stateMachineName) {
        this.stateMachineName = stateMachineName;
        return this;
    };
    StackEntry.prototype.withStateMachineName = function (stateMachineName) {
        this.stateMachineName = stateMachineName;
        return this;
    };
    StackEntry.prototype.getTaskName = function () {
        return this.taskName;
    };
    StackEntry.prototype.setTaskName = function (taskName) {
        this.taskName = taskName;
        return this;
    };
    StackEntry.prototype.withTaskName = function (taskName) {
        this.taskName = taskName;
        return this;
    };
    StackEntry.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new StackEntry()
            .withStateMachineName(data["stateMachineName"])
            .withTaskName(data["taskName"]);
    };
    StackEntry.prototype.toDict = function () {
        return {
            "stateMachineName": this.getStateMachineName(),
            "taskName": this.getTaskName(),
        };
    };
    return StackEntry;
}());
exports.default = StackEntry;
//# sourceMappingURL=StackEntry.js.map