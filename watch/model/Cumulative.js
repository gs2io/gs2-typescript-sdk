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
var Cumulative = /** @class */ (function () {
    function Cumulative() {
        this.cumulativeId = null;
        this.resourceGrn = null;
        this.name = null;
        this.value = null;
        this.updatedAt = null;
    }
    Cumulative.prototype.getCumulativeId = function () {
        return this.cumulativeId;
    };
    Cumulative.prototype.setCumulativeId = function (cumulativeId) {
        this.cumulativeId = cumulativeId;
        return this;
    };
    Cumulative.prototype.withCumulativeId = function (cumulativeId) {
        this.cumulativeId = cumulativeId;
        return this;
    };
    Cumulative.prototype.getResourceGrn = function () {
        return this.resourceGrn;
    };
    Cumulative.prototype.setResourceGrn = function (resourceGrn) {
        this.resourceGrn = resourceGrn;
        return this;
    };
    Cumulative.prototype.withResourceGrn = function (resourceGrn) {
        this.resourceGrn = resourceGrn;
        return this;
    };
    Cumulative.prototype.getName = function () {
        return this.name;
    };
    Cumulative.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Cumulative.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Cumulative.prototype.getValue = function () {
        return this.value;
    };
    Cumulative.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    Cumulative.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    Cumulative.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Cumulative.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Cumulative.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Cumulative.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Cumulative()
            .withCumulativeId(data["cumulativeId"])
            .withResourceGrn(data["resourceGrn"])
            .withName(data["name"])
            .withValue(data["value"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Cumulative.prototype.toDict = function () {
        return {
            "cumulativeId": this.getCumulativeId(),
            "resourceGrn": this.getResourceGrn(),
            "name": this.getName(),
            "value": this.getValue(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Cumulative;
}());
export { Cumulative };
//# sourceMappingURL=Cumulative.js.map