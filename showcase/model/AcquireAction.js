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
var AcquireAction = /** @class */ (function () {
    function AcquireAction() {
        this.action = null;
        this.request = null;
    }
    AcquireAction.prototype.getAction = function () {
        return this.action;
    };
    AcquireAction.prototype.setAction = function (action) {
        this.action = action;
        return this;
    };
    AcquireAction.prototype.withAction = function (action) {
        this.action = action;
        return this;
    };
    AcquireAction.prototype.getRequest = function () {
        return this.request;
    };
    AcquireAction.prototype.setRequest = function (request) {
        this.request = request;
        return this;
    };
    AcquireAction.prototype.withRequest = function (request) {
        this.request = request;
        return this;
    };
    AcquireAction.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AcquireAction()
            .withAction(data["action"])
            .withRequest(data["request"]);
    };
    AcquireAction.prototype.toDict = function () {
        return {
            "action": this.getAction(),
            "request": this.getRequest(),
        };
    };
    return AcquireAction;
}());
exports.default = AcquireAction;
//# sourceMappingURL=AcquireAction.js.map