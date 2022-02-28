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
var grnFormat = "grn:gs2:{region}:{ownerId}:deploy:{stackName}";
var Stack = /** @class */ (function () {
    function Stack() {
        this.stackId = null;
        this.name = null;
        this.description = null;
        this.template = null;
        this.status = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    Stack.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{stackName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Stack.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{stackName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Stack.getStackName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{stackName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Stack.isValid = function (grn) {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getStackName(grn) == null) {
            return false;
        }
        return true;
    };
    Stack.createGrn = function (region, ownerId, stackName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{stackName}', stackName !== null && stackName !== void 0 ? stackName : '');
    };
    Stack.prototype.getStackId = function () {
        return this.stackId;
    };
    Stack.prototype.setStackId = function (stackId) {
        this.stackId = stackId;
        return this;
    };
    Stack.prototype.withStackId = function (stackId) {
        this.stackId = stackId;
        return this;
    };
    Stack.prototype.getName = function () {
        return this.name;
    };
    Stack.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Stack.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Stack.prototype.getDescription = function () {
        return this.description;
    };
    Stack.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    Stack.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    Stack.prototype.getTemplate = function () {
        return this.template;
    };
    Stack.prototype.setTemplate = function (template) {
        this.template = template;
        return this;
    };
    Stack.prototype.withTemplate = function (template) {
        this.template = template;
        return this;
    };
    Stack.prototype.getStatus = function () {
        return this.status;
    };
    Stack.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    Stack.prototype.withStatus = function (status) {
        this.status = status;
        return this;
    };
    Stack.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Stack.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Stack.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Stack.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Stack.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Stack.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Stack.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Stack()
            .withStackId(data["stackId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withTemplate(data["template"])
            .withStatus(data["status"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Stack.prototype.toDict = function () {
        return {
            "stackId": this.getStackId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "template": this.getTemplate(),
            "status": this.getStatus(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Stack;
}());
exports.default = Stack;
//# sourceMappingURL=Stack.js.map