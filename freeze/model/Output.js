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
var grnFormat = "grn:gs2:{region}:{ownerId}:freeze:{stageName}:output:{outputName}";
var Output = /** @class */ (function () {
    function Output() {
        this.outputId = null;
        this.name = null;
        this.text = null;
        this.createdAt = null;
        this.revision = null;
    }
    Output.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{stageName}', '.*')
            .replace('{outputName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Output.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{stageName}', '.*')
            .replace('{outputName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Output.getStageName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{stageName}', '(.*)')
            .replace('{outputName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Output.getOutputName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{stageName}', '.*')
            .replace('{outputName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Output.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getStageName(grn) == null || this.getStageName(grn) === '') {
            return false;
        }
        if (this.getOutputName(grn) == null || this.getOutputName(grn) === '') {
            return false;
        }
        return true;
    };
    Output.createGrn = function (region, ownerId, stageName, outputName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{stageName}', stageName !== null && stageName !== void 0 ? stageName : '')
            .replace('{outputName}', outputName !== null && outputName !== void 0 ? outputName : '');
    };
    Output.prototype.getOutputId = function () {
        return this.outputId;
    };
    Output.prototype.setOutputId = function (outputId) {
        this.outputId = outputId;
        return this;
    };
    Output.prototype.withOutputId = function (outputId) {
        this.outputId = outputId;
        return this;
    };
    Output.prototype.getName = function () {
        return this.name;
    };
    Output.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Output.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Output.prototype.getText = function () {
        return this.text;
    };
    Output.prototype.setText = function (text) {
        this.text = text;
        return this;
    };
    Output.prototype.withText = function (text) {
        this.text = text;
        return this;
    };
    Output.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Output.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Output.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Output.prototype.getRevision = function () {
        return this.revision;
    };
    Output.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Output.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Output.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Output()
            .withOutputId(data["outputId"])
            .withName(data["name"])
            .withText(data["text"])
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    };
    Output.prototype.toDict = function () {
        return {
            "outputId": this.getOutputId(),
            "name": this.getName(),
            "text": this.getText(),
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Output;
}());
exports.default = Output;
//# sourceMappingURL=Output.js.map