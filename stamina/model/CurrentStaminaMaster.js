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
var CurrentStaminaMaster = /** @class */ (function () {
    function CurrentStaminaMaster() {
        this.namespaceId = null;
        this.settings = null;
    }
    CurrentStaminaMaster.prototype.getNamespaceId = function () {
        return this.namespaceId;
    };
    CurrentStaminaMaster.prototype.setNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    CurrentStaminaMaster.prototype.withNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    CurrentStaminaMaster.prototype.getSettings = function () {
        return this.settings;
    };
    CurrentStaminaMaster.prototype.setSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    CurrentStaminaMaster.prototype.withSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    CurrentStaminaMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new CurrentStaminaMaster()
            .withNamespaceId(data["namespaceId"])
            .withSettings(data["settings"]);
    };
    CurrentStaminaMaster.prototype.toDict = function () {
        return {
            "namespaceId": this.getNamespaceId(),
            "settings": this.getSettings(),
        };
    };
    return CurrentStaminaMaster;
}());
export default CurrentStaminaMaster;
//# sourceMappingURL=CurrentStaminaMaster.js.map