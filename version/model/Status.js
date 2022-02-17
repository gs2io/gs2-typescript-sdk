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
import Version from './Version';
import VersionModel from './VersionModel';
var Status = /** @class */ (function () {
    function Status() {
        this.versionModel = null;
        this.currentVersion = null;
    }
    Status.prototype.getVersionModel = function () {
        return this.versionModel;
    };
    Status.prototype.setVersionModel = function (versionModel) {
        this.versionModel = versionModel;
        return this;
    };
    Status.prototype.withVersionModel = function (versionModel) {
        this.versionModel = versionModel;
        return this;
    };
    Status.prototype.getCurrentVersion = function () {
        return this.currentVersion;
    };
    Status.prototype.setCurrentVersion = function (currentVersion) {
        this.currentVersion = currentVersion;
        return this;
    };
    Status.prototype.withCurrentVersion = function (currentVersion) {
        this.currentVersion = currentVersion;
        return this;
    };
    Status.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Status()
            .withVersionModel(VersionModel.fromDict(data["versionModel"]))
            .withCurrentVersion(Version.fromDict(data["currentVersion"]));
    };
    Status.prototype.toDict = function () {
        var _a, _b;
        return {
            "versionModel": (_a = this.getVersionModel()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "currentVersion": (_b = this.getCurrentVersion()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return Status;
}());
export default Status;
//# sourceMappingURL=Status.js.map