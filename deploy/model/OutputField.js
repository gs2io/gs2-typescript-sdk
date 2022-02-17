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
exports.OutputField = void 0;
var OutputField = /** @class */ (function () {
    function OutputField() {
        this.name = null;
        this.fieldName = null;
    }
    OutputField.prototype.getName = function () {
        return this.name;
    };
    OutputField.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    OutputField.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    OutputField.prototype.getFieldName = function () {
        return this.fieldName;
    };
    OutputField.prototype.setFieldName = function (fieldName) {
        this.fieldName = fieldName;
        return this;
    };
    OutputField.prototype.withFieldName = function (fieldName) {
        this.fieldName = fieldName;
        return this;
    };
    OutputField.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new OutputField()
            .withName(data["name"])
            .withFieldName(data["fieldName"]);
    };
    OutputField.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "fieldName": this.getFieldName(),
        };
    };
    return OutputField;
}());
exports.OutputField = OutputField;
//# sourceMappingURL=OutputField.js.map