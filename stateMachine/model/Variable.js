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
var Variable = /** @class */ (function () {
    function Variable() {
        this.stateMachineName = null;
        this.value = null;
    }
    Variable.prototype.getStateMachineName = function () {
        return this.stateMachineName;
    };
    Variable.prototype.setStateMachineName = function (stateMachineName) {
        this.stateMachineName = stateMachineName;
        return this;
    };
    Variable.prototype.withStateMachineName = function (stateMachineName) {
        this.stateMachineName = stateMachineName;
        return this;
    };
    Variable.prototype.getValue = function () {
        return this.value;
    };
    Variable.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    Variable.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    Variable.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Variable()
            .withStateMachineName(data["stateMachineName"])
            .withValue(data["value"]);
    };
    Variable.prototype.toDict = function () {
        return {
            "stateMachineName": this.getStateMachineName(),
            "value": this.getValue(),
        };
    };
    return Variable;
}());
exports.default = Variable;
//# sourceMappingURL=Variable.js.map