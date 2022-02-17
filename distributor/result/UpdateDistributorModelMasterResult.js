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
import * as Gs2Distributor from '../model';
var UpdateDistributorModelMasterResult = /** @class */ (function () {
    function UpdateDistributorModelMasterResult() {
        this.item = null;
    }
    UpdateDistributorModelMasterResult.prototype.getItem = function () {
        return this.item;
    };
    UpdateDistributorModelMasterResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    UpdateDistributorModelMasterResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    UpdateDistributorModelMasterResult.fromDict = function (data) {
        return new UpdateDistributorModelMasterResult()
            .withItem(Gs2Distributor.DistributorModelMaster.fromDict(data["item"]));
    };
    UpdateDistributorModelMasterResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return UpdateDistributorModelMasterResult;
}());
export default UpdateDistributorModelMasterResult;
//# sourceMappingURL=UpdateDistributorModelMasterResult.js.map