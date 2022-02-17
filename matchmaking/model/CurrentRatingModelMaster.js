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
var CurrentRatingModelMaster = /** @class */ (function () {
    function CurrentRatingModelMaster() {
        this.namespaceId = null;
        this.settings = null;
    }
    CurrentRatingModelMaster.prototype.getNamespaceId = function () {
        return this.namespaceId;
    };
    CurrentRatingModelMaster.prototype.setNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    CurrentRatingModelMaster.prototype.withNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    CurrentRatingModelMaster.prototype.getSettings = function () {
        return this.settings;
    };
    CurrentRatingModelMaster.prototype.setSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    CurrentRatingModelMaster.prototype.withSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    CurrentRatingModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new CurrentRatingModelMaster()
            .withNamespaceId(data["namespaceId"])
            .withSettings(data["settings"]);
    };
    CurrentRatingModelMaster.prototype.toDict = function () {
        return {
            "namespaceId": this.getNamespaceId(),
            "settings": this.getSettings(),
        };
    };
    return CurrentRatingModelMaster;
}());
export default CurrentRatingModelMaster;
//# sourceMappingURL=CurrentRatingModelMaster.js.map