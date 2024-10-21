"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var BlockingPolicyModel = /** @class */ (function () {
    function BlockingPolicyModel() {
        this.passServices = null;
        this.defaultRestriction = null;
        this.locationDetection = null;
        this.locations = null;
        this.locationRestriction = null;
        this.anonymousIpDetection = null;
        this.anonymousIpRestriction = null;
        this.hostingProviderIpDetection = null;
        this.hostingProviderIpRestriction = null;
        this.reputationIpDetection = null;
        this.reputationIpRestriction = null;
        this.ipAddressesDetection = null;
        this.ipAddresses = null;
        this.ipAddressRestriction = null;
    }
    BlockingPolicyModel.prototype.getPassServices = function () {
        return this.passServices;
    };
    BlockingPolicyModel.prototype.setPassServices = function (passServices) {
        this.passServices = passServices;
        return this;
    };
    BlockingPolicyModel.prototype.withPassServices = function (passServices) {
        this.passServices = passServices;
        return this;
    };
    BlockingPolicyModel.prototype.getDefaultRestriction = function () {
        return this.defaultRestriction;
    };
    BlockingPolicyModel.prototype.setDefaultRestriction = function (defaultRestriction) {
        this.defaultRestriction = defaultRestriction;
        return this;
    };
    BlockingPolicyModel.prototype.withDefaultRestriction = function (defaultRestriction) {
        this.defaultRestriction = defaultRestriction;
        return this;
    };
    BlockingPolicyModel.prototype.getLocationDetection = function () {
        return this.locationDetection;
    };
    BlockingPolicyModel.prototype.setLocationDetection = function (locationDetection) {
        this.locationDetection = locationDetection;
        return this;
    };
    BlockingPolicyModel.prototype.withLocationDetection = function (locationDetection) {
        this.locationDetection = locationDetection;
        return this;
    };
    BlockingPolicyModel.prototype.getLocations = function () {
        return this.locations;
    };
    BlockingPolicyModel.prototype.setLocations = function (locations) {
        this.locations = locations;
        return this;
    };
    BlockingPolicyModel.prototype.withLocations = function (locations) {
        this.locations = locations;
        return this;
    };
    BlockingPolicyModel.prototype.getLocationRestriction = function () {
        return this.locationRestriction;
    };
    BlockingPolicyModel.prototype.setLocationRestriction = function (locationRestriction) {
        this.locationRestriction = locationRestriction;
        return this;
    };
    BlockingPolicyModel.prototype.withLocationRestriction = function (locationRestriction) {
        this.locationRestriction = locationRestriction;
        return this;
    };
    BlockingPolicyModel.prototype.getAnonymousIpDetection = function () {
        return this.anonymousIpDetection;
    };
    BlockingPolicyModel.prototype.setAnonymousIpDetection = function (anonymousIpDetection) {
        this.anonymousIpDetection = anonymousIpDetection;
        return this;
    };
    BlockingPolicyModel.prototype.withAnonymousIpDetection = function (anonymousIpDetection) {
        this.anonymousIpDetection = anonymousIpDetection;
        return this;
    };
    BlockingPolicyModel.prototype.getAnonymousIpRestriction = function () {
        return this.anonymousIpRestriction;
    };
    BlockingPolicyModel.prototype.setAnonymousIpRestriction = function (anonymousIpRestriction) {
        this.anonymousIpRestriction = anonymousIpRestriction;
        return this;
    };
    BlockingPolicyModel.prototype.withAnonymousIpRestriction = function (anonymousIpRestriction) {
        this.anonymousIpRestriction = anonymousIpRestriction;
        return this;
    };
    BlockingPolicyModel.prototype.getHostingProviderIpDetection = function () {
        return this.hostingProviderIpDetection;
    };
    BlockingPolicyModel.prototype.setHostingProviderIpDetection = function (hostingProviderIpDetection) {
        this.hostingProviderIpDetection = hostingProviderIpDetection;
        return this;
    };
    BlockingPolicyModel.prototype.withHostingProviderIpDetection = function (hostingProviderIpDetection) {
        this.hostingProviderIpDetection = hostingProviderIpDetection;
        return this;
    };
    BlockingPolicyModel.prototype.getHostingProviderIpRestriction = function () {
        return this.hostingProviderIpRestriction;
    };
    BlockingPolicyModel.prototype.setHostingProviderIpRestriction = function (hostingProviderIpRestriction) {
        this.hostingProviderIpRestriction = hostingProviderIpRestriction;
        return this;
    };
    BlockingPolicyModel.prototype.withHostingProviderIpRestriction = function (hostingProviderIpRestriction) {
        this.hostingProviderIpRestriction = hostingProviderIpRestriction;
        return this;
    };
    BlockingPolicyModel.prototype.getReputationIpDetection = function () {
        return this.reputationIpDetection;
    };
    BlockingPolicyModel.prototype.setReputationIpDetection = function (reputationIpDetection) {
        this.reputationIpDetection = reputationIpDetection;
        return this;
    };
    BlockingPolicyModel.prototype.withReputationIpDetection = function (reputationIpDetection) {
        this.reputationIpDetection = reputationIpDetection;
        return this;
    };
    BlockingPolicyModel.prototype.getReputationIpRestriction = function () {
        return this.reputationIpRestriction;
    };
    BlockingPolicyModel.prototype.setReputationIpRestriction = function (reputationIpRestriction) {
        this.reputationIpRestriction = reputationIpRestriction;
        return this;
    };
    BlockingPolicyModel.prototype.withReputationIpRestriction = function (reputationIpRestriction) {
        this.reputationIpRestriction = reputationIpRestriction;
        return this;
    };
    BlockingPolicyModel.prototype.getIpAddressesDetection = function () {
        return this.ipAddressesDetection;
    };
    BlockingPolicyModel.prototype.setIpAddressesDetection = function (ipAddressesDetection) {
        this.ipAddressesDetection = ipAddressesDetection;
        return this;
    };
    BlockingPolicyModel.prototype.withIpAddressesDetection = function (ipAddressesDetection) {
        this.ipAddressesDetection = ipAddressesDetection;
        return this;
    };
    BlockingPolicyModel.prototype.getIpAddresses = function () {
        return this.ipAddresses;
    };
    BlockingPolicyModel.prototype.setIpAddresses = function (ipAddresses) {
        this.ipAddresses = ipAddresses;
        return this;
    };
    BlockingPolicyModel.prototype.withIpAddresses = function (ipAddresses) {
        this.ipAddresses = ipAddresses;
        return this;
    };
    BlockingPolicyModel.prototype.getIpAddressRestriction = function () {
        return this.ipAddressRestriction;
    };
    BlockingPolicyModel.prototype.setIpAddressRestriction = function (ipAddressRestriction) {
        this.ipAddressRestriction = ipAddressRestriction;
        return this;
    };
    BlockingPolicyModel.prototype.withIpAddressRestriction = function (ipAddressRestriction) {
        this.ipAddressRestriction = ipAddressRestriction;
        return this;
    };
    BlockingPolicyModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new BlockingPolicyModel()
            .withPassServices(data.passServices ?
            data.passServices.map(function (item) {
                return item;
            }) : [])
            .withDefaultRestriction(data["defaultRestriction"])
            .withLocationDetection(data["locationDetection"])
            .withLocations(data.locations ?
            data.locations.map(function (item) {
                return item;
            }) : [])
            .withLocationRestriction(data["locationRestriction"])
            .withAnonymousIpDetection(data["anonymousIpDetection"])
            .withAnonymousIpRestriction(data["anonymousIpRestriction"])
            .withHostingProviderIpDetection(data["hostingProviderIpDetection"])
            .withHostingProviderIpRestriction(data["hostingProviderIpRestriction"])
            .withReputationIpDetection(data["reputationIpDetection"])
            .withReputationIpRestriction(data["reputationIpRestriction"])
            .withIpAddressesDetection(data["ipAddressesDetection"])
            .withIpAddresses(data.ipAddresses ?
            data.ipAddresses.map(function (item) {
                return item;
            }) : [])
            .withIpAddressRestriction(data["ipAddressRestriction"]);
    };
    BlockingPolicyModel.prototype.toDict = function () {
        return {
            "passServices": this.getPassServices() ?
                this.getPassServices().map(function (item) {
                    return item;
                }) : [],
            "defaultRestriction": this.getDefaultRestriction(),
            "locationDetection": this.getLocationDetection(),
            "locations": this.getLocations() ?
                this.getLocations().map(function (item) {
                    return item;
                }) : [],
            "locationRestriction": this.getLocationRestriction(),
            "anonymousIpDetection": this.getAnonymousIpDetection(),
            "anonymousIpRestriction": this.getAnonymousIpRestriction(),
            "hostingProviderIpDetection": this.getHostingProviderIpDetection(),
            "hostingProviderIpRestriction": this.getHostingProviderIpRestriction(),
            "reputationIpDetection": this.getReputationIpDetection(),
            "reputationIpRestriction": this.getReputationIpRestriction(),
            "ipAddressesDetection": this.getIpAddressesDetection(),
            "ipAddresses": this.getIpAddresses() ?
                this.getIpAddresses().map(function (item) {
                    return item;
                }) : [],
            "ipAddressRestriction": this.getIpAddressRestriction(),
        };
    };
    return BlockingPolicyModel;
}());
exports.default = BlockingPolicyModel;
//# sourceMappingURL=BlockingPolicyModel.js.map