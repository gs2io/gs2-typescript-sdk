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
var AdMob = /** @class */ (function () {
    function AdMob() {
        this.allowAdUnitIds = null;
    }
    AdMob.prototype.getAllowAdUnitIds = function () {
        return this.allowAdUnitIds;
    };
    AdMob.prototype.setAllowAdUnitIds = function (allowAdUnitIds) {
        this.allowAdUnitIds = allowAdUnitIds;
        return this;
    };
    AdMob.prototype.withAllowAdUnitIds = function (allowAdUnitIds) {
        this.allowAdUnitIds = allowAdUnitIds;
        return this;
    };
    AdMob.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AdMob()
            .withAllowAdUnitIds(data.allowAdUnitIds ?
            data.allowAdUnitIds.map(function (item) {
                return item;
            }) : []);
    };
    AdMob.prototype.toDict = function () {
        return {
            "allowAdUnitIds": this.getAllowAdUnitIds() ?
                this.getAllowAdUnitIds().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return AdMob;
}());
exports.default = AdMob;
//# sourceMappingURL=AdMob.js.map