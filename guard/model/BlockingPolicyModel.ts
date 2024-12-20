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

import IModel from '../../core/interface/IModel';

import * as Gs2Guard from '../../guard/model'

export default class BlockingPolicyModel implements IModel {
    private passServices: string[]|null = null;
    private defaultRestriction: string|null = null;
    private locationDetection: string|null = null;
    private locations: string[]|null = null;
    private locationRestriction: string|null = null;
    private anonymousIpDetection: string|null = null;
    private anonymousIpRestriction: string|null = null;
    private hostingProviderIpDetection: string|null = null;
    private hostingProviderIpRestriction: string|null = null;
    private reputationIpDetection: string|null = null;
    private reputationIpRestriction: string|null = null;
    private ipAddressesDetection: string|null = null;
    private ipAddresses: string[]|null = null;
    private ipAddressRestriction: string|null = null;
    public getPassServices(): string[]|null {
        return this.passServices;
    }
    public setPassServices(passServices: string[]|null) {
        this.passServices = passServices;
        return this;
    }
    public withPassServices(passServices: string[]|null): this {
        this.passServices = passServices;
        return this;
    }
    public getDefaultRestriction(): string|null {
        return this.defaultRestriction;
    }
    public setDefaultRestriction(defaultRestriction: string|null) {
        this.defaultRestriction = defaultRestriction;
        return this;
    }
    public withDefaultRestriction(defaultRestriction: string|null): this {
        this.defaultRestriction = defaultRestriction;
        return this;
    }
    public getLocationDetection(): string|null {
        return this.locationDetection;
    }
    public setLocationDetection(locationDetection: string|null) {
        this.locationDetection = locationDetection;
        return this;
    }
    public withLocationDetection(locationDetection: string|null): this {
        this.locationDetection = locationDetection;
        return this;
    }
    public getLocations(): string[]|null {
        return this.locations;
    }
    public setLocations(locations: string[]|null) {
        this.locations = locations;
        return this;
    }
    public withLocations(locations: string[]|null): this {
        this.locations = locations;
        return this;
    }
    public getLocationRestriction(): string|null {
        return this.locationRestriction;
    }
    public setLocationRestriction(locationRestriction: string|null) {
        this.locationRestriction = locationRestriction;
        return this;
    }
    public withLocationRestriction(locationRestriction: string|null): this {
        this.locationRestriction = locationRestriction;
        return this;
    }
    public getAnonymousIpDetection(): string|null {
        return this.anonymousIpDetection;
    }
    public setAnonymousIpDetection(anonymousIpDetection: string|null) {
        this.anonymousIpDetection = anonymousIpDetection;
        return this;
    }
    public withAnonymousIpDetection(anonymousIpDetection: string|null): this {
        this.anonymousIpDetection = anonymousIpDetection;
        return this;
    }
    public getAnonymousIpRestriction(): string|null {
        return this.anonymousIpRestriction;
    }
    public setAnonymousIpRestriction(anonymousIpRestriction: string|null) {
        this.anonymousIpRestriction = anonymousIpRestriction;
        return this;
    }
    public withAnonymousIpRestriction(anonymousIpRestriction: string|null): this {
        this.anonymousIpRestriction = anonymousIpRestriction;
        return this;
    }
    public getHostingProviderIpDetection(): string|null {
        return this.hostingProviderIpDetection;
    }
    public setHostingProviderIpDetection(hostingProviderIpDetection: string|null) {
        this.hostingProviderIpDetection = hostingProviderIpDetection;
        return this;
    }
    public withHostingProviderIpDetection(hostingProviderIpDetection: string|null): this {
        this.hostingProviderIpDetection = hostingProviderIpDetection;
        return this;
    }
    public getHostingProviderIpRestriction(): string|null {
        return this.hostingProviderIpRestriction;
    }
    public setHostingProviderIpRestriction(hostingProviderIpRestriction: string|null) {
        this.hostingProviderIpRestriction = hostingProviderIpRestriction;
        return this;
    }
    public withHostingProviderIpRestriction(hostingProviderIpRestriction: string|null): this {
        this.hostingProviderIpRestriction = hostingProviderIpRestriction;
        return this;
    }
    public getReputationIpDetection(): string|null {
        return this.reputationIpDetection;
    }
    public setReputationIpDetection(reputationIpDetection: string|null) {
        this.reputationIpDetection = reputationIpDetection;
        return this;
    }
    public withReputationIpDetection(reputationIpDetection: string|null): this {
        this.reputationIpDetection = reputationIpDetection;
        return this;
    }
    public getReputationIpRestriction(): string|null {
        return this.reputationIpRestriction;
    }
    public setReputationIpRestriction(reputationIpRestriction: string|null) {
        this.reputationIpRestriction = reputationIpRestriction;
        return this;
    }
    public withReputationIpRestriction(reputationIpRestriction: string|null): this {
        this.reputationIpRestriction = reputationIpRestriction;
        return this;
    }
    public getIpAddressesDetection(): string|null {
        return this.ipAddressesDetection;
    }
    public setIpAddressesDetection(ipAddressesDetection: string|null) {
        this.ipAddressesDetection = ipAddressesDetection;
        return this;
    }
    public withIpAddressesDetection(ipAddressesDetection: string|null): this {
        this.ipAddressesDetection = ipAddressesDetection;
        return this;
    }
    public getIpAddresses(): string[]|null {
        return this.ipAddresses;
    }
    public setIpAddresses(ipAddresses: string[]|null) {
        this.ipAddresses = ipAddresses;
        return this;
    }
    public withIpAddresses(ipAddresses: string[]|null): this {
        this.ipAddresses = ipAddresses;
        return this;
    }
    public getIpAddressRestriction(): string|null {
        return this.ipAddressRestriction;
    }
    public setIpAddressRestriction(ipAddressRestriction: string|null) {
        this.ipAddressRestriction = ipAddressRestriction;
        return this;
    }
    public withIpAddressRestriction(ipAddressRestriction: string|null): this {
        this.ipAddressRestriction = ipAddressRestriction;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): BlockingPolicyModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new BlockingPolicyModel()
            .withPassServices(data.passServices ?
                data.passServices.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null)
            .withDefaultRestriction(data["defaultRestriction"])
            .withLocationDetection(data["locationDetection"])
            .withLocations(data.locations ?
                data.locations.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null)
            .withLocationRestriction(data["locationRestriction"])
            .withAnonymousIpDetection(data["anonymousIpDetection"])
            .withAnonymousIpRestriction(data["anonymousIpRestriction"])
            .withHostingProviderIpDetection(data["hostingProviderIpDetection"])
            .withHostingProviderIpRestriction(data["hostingProviderIpRestriction"])
            .withReputationIpDetection(data["reputationIpDetection"])
            .withReputationIpRestriction(data["reputationIpRestriction"])
            .withIpAddressesDetection(data["ipAddressesDetection"])
            .withIpAddresses(data.ipAddresses ?
                data.ipAddresses.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null)
            .withIpAddressRestriction(data["ipAddressRestriction"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "passServices": this.getPassServices() ?
                this.getPassServices()!.map((item: string) => {
                    return item;
                }
            ) : null,
            "defaultRestriction": this.getDefaultRestriction(),
            "locationDetection": this.getLocationDetection(),
            "locations": this.getLocations() ?
                this.getLocations()!.map((item: string) => {
                    return item;
                }
            ) : null,
            "locationRestriction": this.getLocationRestriction(),
            "anonymousIpDetection": this.getAnonymousIpDetection(),
            "anonymousIpRestriction": this.getAnonymousIpRestriction(),
            "hostingProviderIpDetection": this.getHostingProviderIpDetection(),
            "hostingProviderIpRestriction": this.getHostingProviderIpRestriction(),
            "reputationIpDetection": this.getReputationIpDetection(),
            "reputationIpRestriction": this.getReputationIpRestriction(),
            "ipAddressesDetection": this.getIpAddressesDetection(),
            "ipAddresses": this.getIpAddresses() ?
                this.getIpAddresses()!.map((item: string) => {
                    return item;
                }
            ) : null,
            "ipAddressRestriction": this.getIpAddressRestriction(),
        };
    }
}
