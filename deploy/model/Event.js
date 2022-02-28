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
var grnFormat = "grn:gs2:{region}:{ownerId}:deploy:{stackName}:event:{eventName}";
var Event = /** @class */ (function () {
    function Event() {
        this.eventId = null;
        this.name = null;
        this.resourceName = null;
        this.type = null;
        this.message = null;
        this.eventAt = null;
    }
    Event.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{stackName}', '.*')
            .replace('{eventName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Event.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{stackName}', '.*')
            .replace('{eventName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Event.getStackName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{stackName}', '(.*)')
            .replace('{eventName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Event.getEventName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{stackName}', '.*')
            .replace('{eventName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Event.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getStackName(grn) == null || this.getStackName(grn) === '') {
            return false;
        }
        if (this.getEventName(grn) == null || this.getEventName(grn) === '') {
            return false;
        }
        return true;
    };
    Event.createGrn = function (region, ownerId, stackName, eventName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{stackName}', stackName !== null && stackName !== void 0 ? stackName : '')
            .replace('{eventName}', eventName !== null && eventName !== void 0 ? eventName : '');
    };
    Event.prototype.getEventId = function () {
        return this.eventId;
    };
    Event.prototype.setEventId = function (eventId) {
        this.eventId = eventId;
        return this;
    };
    Event.prototype.withEventId = function (eventId) {
        this.eventId = eventId;
        return this;
    };
    Event.prototype.getName = function () {
        return this.name;
    };
    Event.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Event.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Event.prototype.getResourceName = function () {
        return this.resourceName;
    };
    Event.prototype.setResourceName = function (resourceName) {
        this.resourceName = resourceName;
        return this;
    };
    Event.prototype.withResourceName = function (resourceName) {
        this.resourceName = resourceName;
        return this;
    };
    Event.prototype.getType = function () {
        return this.type;
    };
    Event.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    Event.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    Event.prototype.getMessage = function () {
        return this.message;
    };
    Event.prototype.setMessage = function (message) {
        this.message = message;
        return this;
    };
    Event.prototype.withMessage = function (message) {
        this.message = message;
        return this;
    };
    Event.prototype.getEventAt = function () {
        return this.eventAt;
    };
    Event.prototype.setEventAt = function (eventAt) {
        this.eventAt = eventAt;
        return this;
    };
    Event.prototype.withEventAt = function (eventAt) {
        this.eventAt = eventAt;
        return this;
    };
    Event.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Event()
            .withEventId(data["eventId"])
            .withName(data["name"])
            .withResourceName(data["resourceName"])
            .withType(data["type"])
            .withMessage(data["message"])
            .withEventAt(data["eventAt"]);
    };
    Event.prototype.toDict = function () {
        return {
            "eventId": this.getEventId(),
            "name": this.getName(),
            "resourceName": this.getResourceName(),
            "type": this.getType(),
            "message": this.getMessage(),
            "eventAt": this.getEventAt(),
        };
    };
    return Event;
}());
exports.default = Event;
//# sourceMappingURL=Event.js.map