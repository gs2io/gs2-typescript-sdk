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
var Gs2StateMachine = tslib_1.__importStar(require("../../stateMachine/model"));
var Event = /** @class */ (function () {
    function Event() {
        this.eventType = null;
        this.changeStateEvent = null;
        this.emitEvent = null;
    }
    Event.prototype.getEventType = function () {
        return this.eventType;
    };
    Event.prototype.setEventType = function (eventType) {
        this.eventType = eventType;
        return this;
    };
    Event.prototype.withEventType = function (eventType) {
        this.eventType = eventType;
        return this;
    };
    Event.prototype.getChangeStateEvent = function () {
        return this.changeStateEvent;
    };
    Event.prototype.setChangeStateEvent = function (changeStateEvent) {
        this.changeStateEvent = changeStateEvent;
        return this;
    };
    Event.prototype.withChangeStateEvent = function (changeStateEvent) {
        this.changeStateEvent = changeStateEvent;
        return this;
    };
    Event.prototype.getEmitEvent = function () {
        return this.emitEvent;
    };
    Event.prototype.setEmitEvent = function (emitEvent) {
        this.emitEvent = emitEvent;
        return this;
    };
    Event.prototype.withEmitEvent = function (emitEvent) {
        this.emitEvent = emitEvent;
        return this;
    };
    Event.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Event()
            .withEventType(data["eventType"])
            .withChangeStateEvent(Gs2StateMachine.ChangeStateEvent.fromDict(data["changeStateEvent"]))
            .withEmitEvent(Gs2StateMachine.EmitEvent.fromDict(data["emitEvent"]));
    };
    Event.prototype.toDict = function () {
        var _a, _b;
        return {
            "eventType": this.getEventType(),
            "changeStateEvent": (_a = this.getChangeStateEvent()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "emitEvent": (_b = this.getEmitEvent()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return Event;
}());
exports.default = Event;
//# sourceMappingURL=Event.js.map