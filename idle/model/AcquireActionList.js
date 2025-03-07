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
var Gs2Idle = tslib_1.__importStar(require("../../idle/model"));
var AcquireActionList = /** @class */ (function () {
    function AcquireActionList() {
        this.acquireActions = null;
    }
    AcquireActionList.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    AcquireActionList.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    AcquireActionList.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    AcquireActionList.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AcquireActionList()
            .withAcquireActions(data.acquireActions ?
            data.acquireActions.map(function (item) {
                return Gs2Idle.AcquireAction.fromDict(item);
            }) : null);
    };
    AcquireActionList.prototype.toDict = function () {
        return {
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return AcquireActionList;
}());
exports.default = AcquireActionList;
//# sourceMappingURL=AcquireActionList.js.map