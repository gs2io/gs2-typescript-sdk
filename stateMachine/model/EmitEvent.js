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
var EmitEvent = /** @class */ (function () {
    function EmitEvent() {
        this.event = null;
        this.parameters = null;
        this.timestamp = null;
    }
    EmitEvent.prototype.getEvent = function () {
        return this.event;
    };
    EmitEvent.prototype.setEvent = function (event) {
        this.event = event;
        return this;
    };
    EmitEvent.prototype.withEvent = function (event) {
        this.event = event;
        return this;
    };
    EmitEvent.prototype.getParameters = function () {
        return this.parameters;
    };
    EmitEvent.prototype.setParameters = function (parameters) {
        this.parameters = parameters;
        return this;
    };
    EmitEvent.prototype.withParameters = function (parameters) {
        this.parameters = parameters;
        return this;
    };
    EmitEvent.prototype.getTimestamp = function () {
        return this.timestamp;
    };
    EmitEvent.prototype.setTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    EmitEvent.prototype.withTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    EmitEvent.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new EmitEvent()
            .withEvent(data["event"])
            .withParameters(data["parameters"])
            .withTimestamp(data["timestamp"]);
    };
    EmitEvent.prototype.toDict = function () {
        return {
            "event": this.getEvent(),
            "parameters": this.getParameters(),
            "timestamp": this.getTimestamp(),
        };
    };
    return EmitEvent;
}());
exports.default = EmitEvent;
//# sourceMappingURL=EmitEvent.js.map