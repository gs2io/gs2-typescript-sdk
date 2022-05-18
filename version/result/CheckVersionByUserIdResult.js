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
var CheckVersionByUserIdResult = /** @class */ (function () {
    function CheckVersionByUserIdResult() {
        this.projectToken = null;
        this.warnings = null;
        this.errors = null;
    }
    CheckVersionByUserIdResult.prototype.getProjectToken = function () {
        return this.projectToken;
    };
    CheckVersionByUserIdResult.prototype.setProjectToken = function (projectToken) {
        this.projectToken = projectToken;
        return this;
    };
    CheckVersionByUserIdResult.prototype.withProjectToken = function (projectToken) {
        this.projectToken = projectToken;
        return this;
    };
    CheckVersionByUserIdResult.prototype.getWarnings = function () {
        return this.warnings;
    };
    CheckVersionByUserIdResult.prototype.setWarnings = function (warnings) {
        this.warnings = warnings;
        return this;
    };
    CheckVersionByUserIdResult.prototype.withWarnings = function (warnings) {
        this.warnings = warnings;
        return this;
    };
    CheckVersionByUserIdResult.prototype.getErrors = function () {
        return this.errors;
    };
    CheckVersionByUserIdResult.prototype.setErrors = function (errors) {
        this.errors = errors;
        return this;
    };
    CheckVersionByUserIdResult.prototype.withErrors = function (errors) {
        this.errors = errors;
        return this;
    };
    CheckVersionByUserIdResult.fromDict = function (data) {
        return new CheckVersionByUserIdResult()
            .withProjectToken(data["projectToken"])
            .withWarnings(data.warnings ?
            data.warnings.map(function (item) {
                return Gs2Version.Status.fromDict(item);
            }) : [])
            .withErrors(data.errors ?
            data.errors.map(function (item) {
                return Gs2Version.Status.fromDict(item);
            }) : []);
    };
    CheckVersionByUserIdResult.prototype.toDict = function () {
        return {
            "projectToken": this.getProjectToken(),
            "warnings": this.getWarnings() ?
                this.getWarnings().map(function (item) {
                    return item.toDict();
                }) : [],
            "errors": this.getErrors() ?
                this.getErrors().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return CheckVersionByUserIdResult;
}());
exports.default = CheckVersionByUserIdResult;
//# sourceMappingURL=CheckVersionByUserIdResult.js.map