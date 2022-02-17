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
import * as Gs2Stamina from '../model';
var GetRecoverValueTableMasterResult = /** @class */ (function () {
    function GetRecoverValueTableMasterResult() {
        this.item = null;
    }
    GetRecoverValueTableMasterResult.prototype.getItem = function () {
        return this.item;
    };
    GetRecoverValueTableMasterResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetRecoverValueTableMasterResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetRecoverValueTableMasterResult.fromDict = function (data) {
        return new GetRecoverValueTableMasterResult()
            .withItem(Gs2Stamina.RecoverValueTableMaster.fromDict(data["item"]));
    };
    GetRecoverValueTableMasterResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return GetRecoverValueTableMasterResult;
}());
export default GetRecoverValueTableMasterResult;
//# sourceMappingURL=GetRecoverValueTableMasterResult.js.map