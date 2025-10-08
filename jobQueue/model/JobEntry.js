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
var JobEntry = /** @class */ (function () {
    function JobEntry() {
        this.scriptId = null;
        this.args = null;
        this.maxTryCount = null;
    }
    JobEntry.prototype.getScriptId = function () {
        return this.scriptId;
    };
    JobEntry.prototype.setScriptId = function (scriptId) {
        this.scriptId = scriptId;
        return this;
    };
    JobEntry.prototype.withScriptId = function (scriptId) {
        this.scriptId = scriptId;
        return this;
    };
    JobEntry.prototype.getArgs = function () {
        return this.args;
    };
    JobEntry.prototype.setArgs = function (args) {
        this.args = args;
        return this;
    };
    JobEntry.prototype.withArgs = function (args) {
        this.args = args;
        return this;
    };
    JobEntry.prototype.getMaxTryCount = function () {
        return this.maxTryCount;
    };
    JobEntry.prototype.setMaxTryCount = function (maxTryCount) {
        this.maxTryCount = maxTryCount;
        return this;
    };
    JobEntry.prototype.withMaxTryCount = function (maxTryCount) {
        this.maxTryCount = maxTryCount;
        return this;
    };
    JobEntry.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new JobEntry()
            .withScriptId(data["scriptId"])
            .withArgs(data["args"])
            .withMaxTryCount(data["maxTryCount"]);
    };
    JobEntry.prototype.toDict = function () {
        return {
            "scriptId": this.getScriptId(),
            "args": this.getArgs(),
            "maxTryCount": this.getMaxTryCount(),
        };
    };
    return JobEntry;
}());
exports.default = JobEntry;
//# sourceMappingURL=JobEntry.js.map