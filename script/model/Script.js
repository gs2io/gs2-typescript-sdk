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
var Script = /** @class */ (function () {
    function Script() {
        this.scriptId = null;
        this.name = null;
        this.description = null;
        this.script = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    Script.prototype.getScriptId = function () {
        return this.scriptId;
    };
    Script.prototype.setScriptId = function (scriptId) {
        this.scriptId = scriptId;
        return this;
    };
    Script.prototype.withScriptId = function (scriptId) {
        this.scriptId = scriptId;
        return this;
    };
    Script.prototype.getName = function () {
        return this.name;
    };
    Script.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Script.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Script.prototype.getDescription = function () {
        return this.description;
    };
    Script.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    Script.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    Script.prototype.getScript = function () {
        return this.script;
    };
    Script.prototype.setScript = function (script) {
        this.script = script;
        return this;
    };
    Script.prototype.withScript = function (script) {
        this.script = script;
        return this;
    };
    Script.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Script.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Script.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Script.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Script.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Script.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Script.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Script()
            .withScriptId(data["scriptId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withScript(data["script"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Script.prototype.toDict = function () {
        return {
            "scriptId": this.getScriptId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "script": this.getScript(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Script;
}());
export default Script;
//# sourceMappingURL=Script.js.map