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
var CurrentDistributorMaster = /** @class */ (function () {
    function CurrentDistributorMaster() {
        this.namespaceId = null;
        this.settings = null;
    }
    CurrentDistributorMaster.prototype.getNamespaceId = function () {
        return this.namespaceId;
    };
    CurrentDistributorMaster.prototype.setNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    CurrentDistributorMaster.prototype.withNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    CurrentDistributorMaster.prototype.getSettings = function () {
        return this.settings;
    };
    CurrentDistributorMaster.prototype.setSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    CurrentDistributorMaster.prototype.withSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    CurrentDistributorMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new CurrentDistributorMaster()
            .withNamespaceId(data["namespaceId"])
            .withSettings(data["settings"]);
    };
    CurrentDistributorMaster.prototype.toDict = function () {
        return {
            "namespaceId": this.getNamespaceId(),
            "settings": this.getSettings(),
        };
    };
    return CurrentDistributorMaster;
}());
export default CurrentDistributorMaster;
//# sourceMappingURL=CurrentDistributorMaster.js.map