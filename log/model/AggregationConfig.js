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
var AggregationConfig = /** @class */ (function () {
    function AggregationConfig() {
        this.type = null;
        this.field = null;
    }
    AggregationConfig.prototype.getType = function () {
        return this.type;
    };
    AggregationConfig.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    AggregationConfig.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    AggregationConfig.prototype.getField = function () {
        return this.field;
    };
    AggregationConfig.prototype.setField = function (field) {
        this.field = field;
        return this;
    };
    AggregationConfig.prototype.withField = function (field) {
        this.field = field;
        return this;
    };
    AggregationConfig.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AggregationConfig()
            .withType(data["type"])
            .withField(data["field"]);
    };
    AggregationConfig.prototype.toDict = function () {
        return {
            "type": this.getType(),
            "field": this.getField(),
        };
    };
    return AggregationConfig;
}());
exports.default = AggregationConfig;
//# sourceMappingURL=AggregationConfig.js.map