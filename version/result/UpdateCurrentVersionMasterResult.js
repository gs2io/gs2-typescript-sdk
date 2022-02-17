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
import * as Gs2Version from '../model';
var UpdateCurrentVersionMasterResult = /** @class */ (function () {
    function UpdateCurrentVersionMasterResult() {
        this.item = null;
    }
    UpdateCurrentVersionMasterResult.prototype.getItem = function () {
        return this.item;
    };
    UpdateCurrentVersionMasterResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    UpdateCurrentVersionMasterResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    UpdateCurrentVersionMasterResult.fromDict = function (data) {
        return new UpdateCurrentVersionMasterResult()
            .withItem(Gs2Version.CurrentVersionMaster.fromDict(data["item"]));
    };
    UpdateCurrentVersionMasterResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return UpdateCurrentVersionMasterResult;
}());
export default UpdateCurrentVersionMasterResult;
//# sourceMappingURL=UpdateCurrentVersionMasterResult.js.map