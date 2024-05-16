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
var AppLovinMax = /** @class */ (function () {
    function AppLovinMax() {
        this.allowAdUnitId = null;
        this.eventKey = null;
    }
    AppLovinMax.prototype.getAllowAdUnitId = function () {
        return this.allowAdUnitId;
    };
    AppLovinMax.prototype.setAllowAdUnitId = function (allowAdUnitId) {
        this.allowAdUnitId = allowAdUnitId;
        return this;
    };
    AppLovinMax.prototype.withAllowAdUnitId = function (allowAdUnitId) {
        this.allowAdUnitId = allowAdUnitId;
        return this;
    };
    AppLovinMax.prototype.getEventKey = function () {
        return this.eventKey;
    };
    AppLovinMax.prototype.setEventKey = function (eventKey) {
        this.eventKey = eventKey;
        return this;
    };
    AppLovinMax.prototype.withEventKey = function (eventKey) {
        this.eventKey = eventKey;
        return this;
    };
    AppLovinMax.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AppLovinMax()
            .withAllowAdUnitId(data["allowAdUnitId"])
            .withEventKey(data["eventKey"]);
    };
    AppLovinMax.prototype.toDict = function () {
        return {
            "allowAdUnitId": this.getAllowAdUnitId(),
            "eventKey": this.getEventKey(),
        };
    };
    return AppLovinMax;
}());
exports.default = AppLovinMax;
//# sourceMappingURL=AppLovinMax.js.map