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
var UpdateScriptRequest = /** @class */ (function () {
    function UpdateScriptRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.scriptName = null;
        this.description = null;
        this.script = null;
        this.disableStringNumberToNumber = null;
    }
    UpdateScriptRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateScriptRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateScriptRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateScriptRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateScriptRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateScriptRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateScriptRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateScriptRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateScriptRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateScriptRequest.prototype.getScriptName = function () {
        return this.scriptName;
    };
    UpdateScriptRequest.prototype.setScriptName = function (scriptName) {
        this.scriptName = scriptName;
        return this;
    };
    UpdateScriptRequest.prototype.withScriptName = function (scriptName) {
        this.scriptName = scriptName;
        return this;
    };
    UpdateScriptRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateScriptRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateScriptRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateScriptRequest.prototype.getScript = function () {
        return this.script;
    };
    UpdateScriptRequest.prototype.setScript = function (script) {
        this.script = script;
        return this;
    };
    UpdateScriptRequest.prototype.withScript = function (script) {
        this.script = script;
        return this;
    };
    UpdateScriptRequest.prototype.getDisableStringNumberToNumber = function () {
        return this.disableStringNumberToNumber;
    };
    UpdateScriptRequest.prototype.setDisableStringNumberToNumber = function (disableStringNumberToNumber) {
        this.disableStringNumberToNumber = disableStringNumberToNumber;
        return this;
    };
    UpdateScriptRequest.prototype.withDisableStringNumberToNumber = function (disableStringNumberToNumber) {
        this.disableStringNumberToNumber = disableStringNumberToNumber;
        return this;
    };
    UpdateScriptRequest.fromDict = function (data) {
        return new UpdateScriptRequest()
            .withNamespaceName(data["namespaceName"])
            .withScriptName(data["scriptName"])
            .withDescription(data["description"])
            .withScript(data["script"])
            .withDisableStringNumberToNumber(data["disableStringNumberToNumber"]);
    };
    UpdateScriptRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "scriptName": this.getScriptName(),
            "description": this.getDescription(),
            "script": this.getScript(),
            "disableStringNumberToNumber": this.getDisableStringNumberToNumber(),
        };
    };
    return UpdateScriptRequest;
}());
exports.default = UpdateScriptRequest;
//# sourceMappingURL=UpdateScriptRequest.js.map