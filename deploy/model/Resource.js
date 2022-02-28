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
var OutputField_1 = (0, tslib_1.__importDefault)(require("./OutputField"));
var grnFormat = "grn:gs2:{region}:{ownerId}:deploy:{stackName}:resource:{resourceName}";
var Resource = /** @class */ (function () {
    function Resource() {
        this.resourceId = null;
        this.type = null;
        this.name = null;
        this.request = null;
        this.response = null;
        this.rollbackContext = null;
        this.rollbackRequest = null;
        this.rollbackAfter = null;
        this.outputFields = null;
        this.workId = null;
        this.createdAt = null;
    }
    Resource.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{stackName}', '.*')
            .replace('{resourceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Resource.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{stackName}', '.*')
            .replace('{resourceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Resource.getStackName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{stackName}', '(.*)')
            .replace('{resourceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Resource.getResourceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{stackName}', '.*')
            .replace('{resourceName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Resource.isValid = function (grn) {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getStackName(grn) == null) {
            return false;
        }
        if (this.getResourceName(grn) == null) {
            return false;
        }
        return true;
    };
    Resource.createGrn = function (region, ownerId, stackName, resourceName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{stackName}', stackName !== null && stackName !== void 0 ? stackName : '')
            .replace('{resourceName}', resourceName !== null && resourceName !== void 0 ? resourceName : '');
    };
    Resource.prototype.getResourceId = function () {
        return this.resourceId;
    };
    Resource.prototype.setResourceId = function (resourceId) {
        this.resourceId = resourceId;
        return this;
    };
    Resource.prototype.withResourceId = function (resourceId) {
        this.resourceId = resourceId;
        return this;
    };
    Resource.prototype.getType = function () {
        return this.type;
    };
    Resource.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    Resource.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    Resource.prototype.getName = function () {
        return this.name;
    };
    Resource.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Resource.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Resource.prototype.getRequest = function () {
        return this.request;
    };
    Resource.prototype.setRequest = function (request) {
        this.request = request;
        return this;
    };
    Resource.prototype.withRequest = function (request) {
        this.request = request;
        return this;
    };
    Resource.prototype.getResponse = function () {
        return this.response;
    };
    Resource.prototype.setResponse = function (response) {
        this.response = response;
        return this;
    };
    Resource.prototype.withResponse = function (response) {
        this.response = response;
        return this;
    };
    Resource.prototype.getRollbackContext = function () {
        return this.rollbackContext;
    };
    Resource.prototype.setRollbackContext = function (rollbackContext) {
        this.rollbackContext = rollbackContext;
        return this;
    };
    Resource.prototype.withRollbackContext = function (rollbackContext) {
        this.rollbackContext = rollbackContext;
        return this;
    };
    Resource.prototype.getRollbackRequest = function () {
        return this.rollbackRequest;
    };
    Resource.prototype.setRollbackRequest = function (rollbackRequest) {
        this.rollbackRequest = rollbackRequest;
        return this;
    };
    Resource.prototype.withRollbackRequest = function (rollbackRequest) {
        this.rollbackRequest = rollbackRequest;
        return this;
    };
    Resource.prototype.getRollbackAfter = function () {
        return this.rollbackAfter;
    };
    Resource.prototype.setRollbackAfter = function (rollbackAfter) {
        this.rollbackAfter = rollbackAfter;
        return this;
    };
    Resource.prototype.withRollbackAfter = function (rollbackAfter) {
        this.rollbackAfter = rollbackAfter;
        return this;
    };
    Resource.prototype.getOutputFields = function () {
        return this.outputFields;
    };
    Resource.prototype.setOutputFields = function (outputFields) {
        this.outputFields = outputFields;
        return this;
    };
    Resource.prototype.withOutputFields = function (outputFields) {
        this.outputFields = outputFields;
        return this;
    };
    Resource.prototype.getWorkId = function () {
        return this.workId;
    };
    Resource.prototype.setWorkId = function (workId) {
        this.workId = workId;
        return this;
    };
    Resource.prototype.withWorkId = function (workId) {
        this.workId = workId;
        return this;
    };
    Resource.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Resource.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Resource.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Resource.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Resource()
            .withResourceId(data["resourceId"])
            .withType(data["type"])
            .withName(data["name"])
            .withRequest(data["request"])
            .withResponse(data["response"])
            .withRollbackContext(data["rollbackContext"])
            .withRollbackRequest(data["rollbackRequest"])
            .withRollbackAfter(data.rollbackAfter ?
            data.rollbackAfter.map(function (item) {
                return item;
            }) : [])
            .withOutputFields(data.outputFields ?
            data.outputFields.map(function (item) {
                return OutputField_1.default.fromDict(item);
            }) : [])
            .withWorkId(data["workId"])
            .withCreatedAt(data["createdAt"]);
    };
    Resource.prototype.toDict = function () {
        return {
            "resourceId": this.getResourceId(),
            "type": this.getType(),
            "name": this.getName(),
            "request": this.getRequest(),
            "response": this.getResponse(),
            "rollbackContext": this.getRollbackContext(),
            "rollbackRequest": this.getRollbackRequest(),
            "rollbackAfter": this.getRollbackAfter() ?
                this.getRollbackAfter().map(function (item) {
                    return item;
                }) : [],
            "outputFields": this.getOutputFields() ?
                this.getOutputFields().map(function (item) {
                    return item.toDict();
                }) : [],
            "workId": this.getWorkId(),
            "createdAt": this.getCreatedAt(),
        };
    };
    return Resource;
}());
exports.default = Resource;
//# sourceMappingURL=Resource.js.map