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
import DrawnPrize from './DrawnPrize';
var Probability = /** @class */ (function () {
    function Probability() {
        this.prize = null;
        this.rate = null;
    }
    Probability.prototype.getPrize = function () {
        return this.prize;
    };
    Probability.prototype.setPrize = function (prize) {
        this.prize = prize;
        return this;
    };
    Probability.prototype.withPrize = function (prize) {
        this.prize = prize;
        return this;
    };
    Probability.prototype.getRate = function () {
        return this.rate;
    };
    Probability.prototype.setRate = function (rate) {
        this.rate = rate;
        return this;
    };
    Probability.prototype.withRate = function (rate) {
        this.rate = rate;
        return this;
    };
    Probability.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Probability()
            .withPrize(DrawnPrize.fromDict(data["prize"]))
            .withRate(data["rate"]);
    };
    Probability.prototype.toDict = function () {
        var _a;
        return {
            "prize": (_a = this.getPrize()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "rate": this.getRate(),
        };
    };
    return Probability;
}());
export default Probability;
//# sourceMappingURL=Probability.js.map