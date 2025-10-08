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
var BalanceParameterValueModel = /** @class */ (function () {
    function BalanceParameterValueModel() {
        this.name = null;
        this.metadata = null;
    }
    BalanceParameterValueModel.prototype.getName = function () {
        return this.name;
    };
    BalanceParameterValueModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    BalanceParameterValueModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    BalanceParameterValueModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    BalanceParameterValueModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    BalanceParameterValueModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    BalanceParameterValueModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new BalanceParameterValueModel()
            .withName(data["name"])
            .withMetadata(data["metadata"]);
    };
    BalanceParameterValueModel.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "metadata": this.getMetadata(),
        };
    };
    return BalanceParameterValueModel;
}());
exports.default = BalanceParameterValueModel;
//# sourceMappingURL=BalanceParameterValueModel.js.map