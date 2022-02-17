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
var Config_1 = (0, tslib_1.__importDefault)(require("./Config"));
var AcquireActionConfig = /** @class */ (function () {
    function AcquireActionConfig() {
        this.name = null;
        this.config = null;
    }
    AcquireActionConfig.prototype.getName = function () {
        return this.name;
    };
    AcquireActionConfig.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    AcquireActionConfig.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    AcquireActionConfig.prototype.getConfig = function () {
        return this.config;
    };
    AcquireActionConfig.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    AcquireActionConfig.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    AcquireActionConfig.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AcquireActionConfig()
            .withName(data["name"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Config_1.default.fromDict(item);
            }) : []);
    };
    AcquireActionConfig.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return AcquireActionConfig;
}());
exports.default = AcquireActionConfig;
//# sourceMappingURL=AcquireActionConfig.js.map