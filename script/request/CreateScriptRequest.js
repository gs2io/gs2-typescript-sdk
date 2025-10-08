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
var CreateScriptRequest = /** @class */ (function () {
    function CreateScriptRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.script = null;
        this.disableStringNumberToNumber = null;
    }
    CreateScriptRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateScriptRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateScriptRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateScriptRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateScriptRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateScriptRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateScriptRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateScriptRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateScriptRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateScriptRequest.prototype.getName = function () {
        return this.name;
    };
    CreateScriptRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateScriptRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateScriptRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateScriptRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateScriptRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateScriptRequest.prototype.getScript = function () {
        return this.script;
    };
    CreateScriptRequest.prototype.setScript = function (script) {
        this.script = script;
        return this;
    };
    CreateScriptRequest.prototype.withScript = function (script) {
        this.script = script;
        return this;
    };
    CreateScriptRequest.prototype.getDisableStringNumberToNumber = function () {
        return this.disableStringNumberToNumber;
    };
    CreateScriptRequest.prototype.setDisableStringNumberToNumber = function (disableStringNumberToNumber) {
        this.disableStringNumberToNumber = disableStringNumberToNumber;
        return this;
    };
    CreateScriptRequest.prototype.withDisableStringNumberToNumber = function (disableStringNumberToNumber) {
        this.disableStringNumberToNumber = disableStringNumberToNumber;
        return this;
    };
    CreateScriptRequest.fromDict = function (data) {
        return new CreateScriptRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withScript(data["script"])
            .withDisableStringNumberToNumber(data["disableStringNumberToNumber"]);
    };
    CreateScriptRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "script": this.getScript(),
            "disableStringNumberToNumber": this.getDisableStringNumberToNumber(),
        };
    };
    return CreateScriptRequest;
}());
exports.default = CreateScriptRequest;
//# sourceMappingURL=CreateScriptRequest.js.map