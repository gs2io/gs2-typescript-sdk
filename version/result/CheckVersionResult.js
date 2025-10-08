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
var Gs2Version = tslib_1.__importStar(require("../model"));
var CheckVersionResult = /** @class */ (function () {
    function CheckVersionResult() {
        this.projectToken = null;
        this.warnings = null;
        this.errors = null;
    }
    CheckVersionResult.prototype.getProjectToken = function () {
        return this.projectToken;
    };
    CheckVersionResult.prototype.setProjectToken = function (projectToken) {
        this.projectToken = projectToken;
        return this;
    };
    CheckVersionResult.prototype.withProjectToken = function (projectToken) {
        this.projectToken = projectToken;
        return this;
    };
    CheckVersionResult.prototype.getWarnings = function () {
        return this.warnings;
    };
    CheckVersionResult.prototype.setWarnings = function (warnings) {
        this.warnings = warnings;
        return this;
    };
    CheckVersionResult.prototype.withWarnings = function (warnings) {
        this.warnings = warnings;
        return this;
    };
    CheckVersionResult.prototype.getErrors = function () {
        return this.errors;
    };
    CheckVersionResult.prototype.setErrors = function (errors) {
        this.errors = errors;
        return this;
    };
    CheckVersionResult.prototype.withErrors = function (errors) {
        this.errors = errors;
        return this;
    };
    CheckVersionResult.fromDict = function (data) {
        return new CheckVersionResult()
            .withProjectToken(data["projectToken"])
            .withWarnings(data.warnings ?
            data.warnings.map(function (item) {
                return Gs2Version.Status.fromDict(item);
            }) : null)
            .withErrors(data.errors ?
            data.errors.map(function (item) {
                return Gs2Version.Status.fromDict(item);
            }) : null);
    };
    CheckVersionResult.prototype.toDict = function () {
        return {
            "projectToken": this.getProjectToken(),
            "warnings": this.getWarnings() ?
                this.getWarnings().map(function (item) {
                    return item.toDict();
                }) : null,
            "errors": this.getErrors() ?
                this.getErrors().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return CheckVersionResult;
}());
exports.default = CheckVersionResult;
//# sourceMappingURL=CheckVersionResult.js.map