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
var CurrentMessageMaster = /** @class */ (function () {
    function CurrentMessageMaster() {
        this.namespaceId = null;
        this.settings = null;
    }
    CurrentMessageMaster.prototype.getNamespaceId = function () {
        return this.namespaceId;
    };
    CurrentMessageMaster.prototype.setNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    CurrentMessageMaster.prototype.withNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    CurrentMessageMaster.prototype.getSettings = function () {
        return this.settings;
    };
    CurrentMessageMaster.prototype.setSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    CurrentMessageMaster.prototype.withSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    CurrentMessageMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new CurrentMessageMaster()
            .withNamespaceId(data["namespaceId"])
            .withSettings(data["settings"]);
    };
    CurrentMessageMaster.prototype.toDict = function () {
        return {
            "namespaceId": this.getNamespaceId(),
            "settings": this.getSettings(),
        };
    };
    return CurrentMessageMaster;
}());
export default CurrentMessageMaster;
//# sourceMappingURL=CurrentMessageMaster.js.map