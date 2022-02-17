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
var CurrentShowcaseMaster = /** @class */ (function () {
    function CurrentShowcaseMaster() {
        this.namespaceId = null;
        this.settings = null;
    }
    CurrentShowcaseMaster.prototype.getNamespaceId = function () {
        return this.namespaceId;
    };
    CurrentShowcaseMaster.prototype.setNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    CurrentShowcaseMaster.prototype.withNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    CurrentShowcaseMaster.prototype.getSettings = function () {
        return this.settings;
    };
    CurrentShowcaseMaster.prototype.setSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    CurrentShowcaseMaster.prototype.withSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    CurrentShowcaseMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new CurrentShowcaseMaster()
            .withNamespaceId(data["namespaceId"])
            .withSettings(data["settings"]);
    };
    CurrentShowcaseMaster.prototype.toDict = function () {
        return {
            "namespaceId": this.getNamespaceId(),
            "settings": this.getSettings(),
        };
    };
    return CurrentShowcaseMaster;
}());
export default CurrentShowcaseMaster;
//# sourceMappingURL=CurrentShowcaseMaster.js.map