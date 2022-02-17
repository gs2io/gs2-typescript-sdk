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
var RecoverStaminaByStampSheetResult = /** @class */ (function () {
    function RecoverStaminaByStampSheetResult() {
        this.item = null;
        this.staminaModel = null;
        this.overflowValue = null;
    }
    RecoverStaminaByStampSheetResult.prototype.getItem = function () {
        return this.item;
    };
    RecoverStaminaByStampSheetResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    RecoverStaminaByStampSheetResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    RecoverStaminaByStampSheetResult.prototype.getStaminaModel = function () {
        return this.staminaModel;
    };
    RecoverStaminaByStampSheetResult.prototype.setStaminaModel = function (staminaModel) {
        this.staminaModel = staminaModel;
        return this;
    };
    RecoverStaminaByStampSheetResult.prototype.withStaminaModel = function (staminaModel) {
        this.staminaModel = staminaModel;
        return this;
    };
    RecoverStaminaByStampSheetResult.prototype.getOverflowValue = function () {
        return this.overflowValue;
    };
    RecoverStaminaByStampSheetResult.prototype.setOverflowValue = function (overflowValue) {
        this.overflowValue = overflowValue;
        return this;
    };
    RecoverStaminaByStampSheetResult.prototype.withOverflowValue = function (overflowValue) {
        this.overflowValue = overflowValue;
        return this;
    };
    RecoverStaminaByStampSheetResult.fromDict = function (data) {
        return new RecoverStaminaByStampSheetResult()
            .withItem(Gs2Stamina.Stamina.fromDict(data["item"]))
            .withStaminaModel(Gs2Stamina.StaminaModel.fromDict(data["staminaModel"]))
            .withOverflowValue(data["overflowValue"]);
    };
    RecoverStaminaByStampSheetResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "staminaModel": (_b = this.getStaminaModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "overflowValue": this.getOverflowValue(),
        };
    };
    return RecoverStaminaByStampSheetResult;
}());
export default RecoverStaminaByStampSheetResult;
//# sourceMappingURL=RecoverStaminaByStampSheetResult.js.map