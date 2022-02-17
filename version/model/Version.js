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
var Version = /** @class */ (function () {
    function Version() {
        this.major = null;
        this.minor = null;
        this.micro = null;
    }
    Version.prototype.getMajor = function () {
        return this.major;
    };
    Version.prototype.setMajor = function (major) {
        this.major = major;
        return this;
    };
    Version.prototype.withMajor = function (major) {
        this.major = major;
        return this;
    };
    Version.prototype.getMinor = function () {
        return this.minor;
    };
    Version.prototype.setMinor = function (minor) {
        this.minor = minor;
        return this;
    };
    Version.prototype.withMinor = function (minor) {
        this.minor = minor;
        return this;
    };
    Version.prototype.getMicro = function () {
        return this.micro;
    };
    Version.prototype.setMicro = function (micro) {
        this.micro = micro;
        return this;
    };
    Version.prototype.withMicro = function (micro) {
        this.micro = micro;
        return this;
    };
    Version.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Version()
            .withMajor(data["major"])
            .withMinor(data["minor"])
            .withMicro(data["micro"]);
    };
    Version.prototype.toDict = function () {
        return {
            "major": this.getMajor(),
            "minor": this.getMinor(),
            "micro": this.getMicro(),
        };
    };
    return Version;
}());
export default Version;
//# sourceMappingURL=Version.js.map