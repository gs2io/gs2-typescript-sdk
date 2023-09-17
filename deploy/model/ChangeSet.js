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
var ChangeSet = /** @class */ (function () {
    function ChangeSet() {
        this.resourceName = null;
        this.resourceType = null;
        this.operation = null;
    }
    ChangeSet.prototype.getResourceName = function () {
        return this.resourceName;
    };
    ChangeSet.prototype.setResourceName = function (resourceName) {
        this.resourceName = resourceName;
        return this;
    };
    ChangeSet.prototype.withResourceName = function (resourceName) {
        this.resourceName = resourceName;
        return this;
    };
    ChangeSet.prototype.getResourceType = function () {
        return this.resourceType;
    };
    ChangeSet.prototype.setResourceType = function (resourceType) {
        this.resourceType = resourceType;
        return this;
    };
    ChangeSet.prototype.withResourceType = function (resourceType) {
        this.resourceType = resourceType;
        return this;
    };
    ChangeSet.prototype.getOperation = function () {
        return this.operation;
    };
    ChangeSet.prototype.setOperation = function (operation) {
        this.operation = operation;
        return this;
    };
    ChangeSet.prototype.withOperation = function (operation) {
        this.operation = operation;
        return this;
    };
    ChangeSet.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ChangeSet()
            .withResourceName(data["resourceName"])
            .withResourceType(data["resourceType"])
            .withOperation(data["operation"]);
    };
    ChangeSet.prototype.toDict = function () {
        return {
            "resourceName": this.getResourceName(),
            "resourceType": this.getResourceType(),
            "operation": this.getOperation(),
        };
    };
    return ChangeSet;
}());
exports.default = ChangeSet;
//# sourceMappingURL=ChangeSet.js.map