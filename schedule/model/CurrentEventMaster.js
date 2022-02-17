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
var CurrentEventMaster = /** @class */ (function () {
    function CurrentEventMaster() {
        this.namespaceId = null;
        this.settings = null;
    }
    CurrentEventMaster.prototype.getNamespaceId = function () {
        return this.namespaceId;
    };
    CurrentEventMaster.prototype.setNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    CurrentEventMaster.prototype.withNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    CurrentEventMaster.prototype.getSettings = function () {
        return this.settings;
    };
    CurrentEventMaster.prototype.setSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    CurrentEventMaster.prototype.withSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    CurrentEventMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new CurrentEventMaster()
            .withNamespaceId(data["namespaceId"])
            .withSettings(data["settings"]);
    };
    CurrentEventMaster.prototype.toDict = function () {
        return {
            "namespaceId": this.getNamespaceId(),
            "settings": this.getSettings(),
        };
    };
    return CurrentEventMaster;
}());
export default CurrentEventMaster;
//# sourceMappingURL=CurrentEventMaster.js.map