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
var DictionaryNamespaceStatistics = /** @class */ (function () {
    function DictionaryNamespaceStatistics() {
        this.register = null;
    }
    DictionaryNamespaceStatistics.prototype.getRegister = function () {
        return this.register;
    };
    DictionaryNamespaceStatistics.prototype.setRegister = function (register) {
        this.register = register;
        return this;
    };
    DictionaryNamespaceStatistics.prototype.withRegister = function (register) {
        this.register = register;
        return this;
    };
    DictionaryNamespaceStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DictionaryNamespaceStatistics()
            .withRegister(data["register"]);
    };
    DictionaryNamespaceStatistics.prototype.toDict = function () {
        return {
            "register": this.getRegister(),
        };
    };
    return DictionaryNamespaceStatistics;
}());
exports.default = DictionaryNamespaceStatistics;
//# sourceMappingURL=DictionaryNamespaceStatistics.js.map