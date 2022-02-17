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
var Threshold = /** @class */ (function () {
    function Threshold() {
        this.metadata = null;
        this.values = null;
    }
    Threshold.prototype.getMetadata = function () {
        return this.metadata;
    };
    Threshold.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    Threshold.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    Threshold.prototype.getValues = function () {
        return this.values;
    };
    Threshold.prototype.setValues = function (values) {
        this.values = values;
        return this;
    };
    Threshold.prototype.withValues = function (values) {
        this.values = values;
        return this;
    };
    Threshold.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Threshold()
            .withMetadata(data["metadata"])
            .withValues(data.values ?
            data.values.map(function (item) {
                return item;
            }) : []);
    };
    Threshold.prototype.toDict = function () {
        return {
            "metadata": this.getMetadata(),
            "values": this.getValues() ?
                this.getValues().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return Threshold;
}());
export default Threshold;
//# sourceMappingURL=Threshold.js.map