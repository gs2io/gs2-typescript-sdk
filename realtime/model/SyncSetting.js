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
var SyncSetting = /** @class */ (function () {
    function SyncSetting() {
        this.objectCatalog = null;
    }
    SyncSetting.prototype.getObjectCatalog = function () {
        return this.objectCatalog;
    };
    SyncSetting.prototype.setObjectCatalog = function (objectCatalog) {
        this.objectCatalog = objectCatalog;
        return this;
    };
    SyncSetting.prototype.withObjectCatalog = function (objectCatalog) {
        this.objectCatalog = objectCatalog;
        return this;
    };
    SyncSetting.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SyncSetting()
            .withObjectCatalog(data["objectCatalog"]);
    };
    SyncSetting.prototype.toDict = function () {
        return {
            "objectCatalog": this.getObjectCatalog(),
        };
    };
    return SyncSetting;
}());
exports.default = SyncSetting;
//# sourceMappingURL=SyncSetting.js.map