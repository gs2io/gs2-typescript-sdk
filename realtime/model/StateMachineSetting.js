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
var StateMachineSetting = /** @class */ (function () {
    function StateMachineSetting() {
        this.namespaceId = null;
        this.version = null;
    }
    StateMachineSetting.prototype.getNamespaceId = function () {
        return this.namespaceId;
    };
    StateMachineSetting.prototype.setNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    StateMachineSetting.prototype.withNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    StateMachineSetting.prototype.getVersion = function () {
        return this.version;
    };
    StateMachineSetting.prototype.setVersion = function (version) {
        this.version = version;
        return this;
    };
    StateMachineSetting.prototype.withVersion = function (version) {
        this.version = version;
        return this;
    };
    StateMachineSetting.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new StateMachineSetting()
            .withNamespaceId(data["namespaceId"])
            .withVersion(data["version"]);
    };
    StateMachineSetting.prototype.toDict = function () {
        return {
            "namespaceId": this.getNamespaceId(),
            "version": this.getVersion(),
        };
    };
    return StateMachineSetting;
}());
exports.default = StateMachineSetting;
//# sourceMappingURL=StateMachineSetting.js.map