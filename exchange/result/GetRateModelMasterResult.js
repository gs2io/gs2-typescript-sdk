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
import * as Gs2Exchange from '../model';
var GetRateModelMasterResult = /** @class */ (function () {
    function GetRateModelMasterResult() {
        this.item = null;
    }
    GetRateModelMasterResult.prototype.getItem = function () {
        return this.item;
    };
    GetRateModelMasterResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetRateModelMasterResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetRateModelMasterResult.fromDict = function (data) {
        return new GetRateModelMasterResult()
            .withItem(Gs2Exchange.RateModelMaster.fromDict(data["item"]));
    };
    GetRateModelMasterResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return GetRateModelMasterResult;
}());
export default GetRateModelMasterResult;
//# sourceMappingURL=GetRateModelMasterResult.js.map