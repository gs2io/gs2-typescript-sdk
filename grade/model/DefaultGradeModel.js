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
var DefaultGradeModel = /** @class */ (function () {
    function DefaultGradeModel() {
        this.propertyIdRegex = null;
        this.defaultGradeValue = null;
    }
    DefaultGradeModel.prototype.getPropertyIdRegex = function () {
        return this.propertyIdRegex;
    };
    DefaultGradeModel.prototype.setPropertyIdRegex = function (propertyIdRegex) {
        this.propertyIdRegex = propertyIdRegex;
        return this;
    };
    DefaultGradeModel.prototype.withPropertyIdRegex = function (propertyIdRegex) {
        this.propertyIdRegex = propertyIdRegex;
        return this;
    };
    DefaultGradeModel.prototype.getDefaultGradeValue = function () {
        return this.defaultGradeValue;
    };
    DefaultGradeModel.prototype.setDefaultGradeValue = function (defaultGradeValue) {
        this.defaultGradeValue = defaultGradeValue;
        return this;
    };
    DefaultGradeModel.prototype.withDefaultGradeValue = function (defaultGradeValue) {
        this.defaultGradeValue = defaultGradeValue;
        return this;
    };
    DefaultGradeModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DefaultGradeModel()
            .withPropertyIdRegex(data["propertyIdRegex"])
            .withDefaultGradeValue(data["defaultGradeValue"]);
    };
    DefaultGradeModel.prototype.toDict = function () {
        return {
            "propertyIdRegex": this.getPropertyIdRegex(),
            "defaultGradeValue": this.getDefaultGradeValue(),
        };
    };
    return DefaultGradeModel;
}());
exports.default = DefaultGradeModel;
//# sourceMappingURL=DefaultGradeModel.js.map