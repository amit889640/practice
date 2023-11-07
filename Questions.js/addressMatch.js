/* a  = [
{name:"Amit",Designation:"Se"},
{a:"asdf"},
{name:""}
]

t = ""

console.log(a.find(b=>b.name==t))
 */

      trips=
            {
                "invoiceNumber": "1281412340",
                "tripLegId": "289493100",
                "tripLegStatus": "1",
                "status": "Cancelled/Combined",
                "lastModified": "01/15/2023 14:35:00",
                "daysUntilAttestationOverdue": "20",
                "vendorAttestation": "1",
                "tripLegSequence": "1",
                "timesDaysApproved": "1",
                "quantTripsApproved": "1",
                "medicaidNumber": "BZ65910T",
                "medicaidCountyNumber": "31",
                "medicaidCountyName": "Onondaga",
                "medProviderNPI": "1417278912",
                "medCompanyName": "Hegland Erika Marie",
                "firstName": "Debbie",
                "lastName": "Cyrus",
                "middleInitial": "",
                "gender": "F",
                "DOB": "03/02/1962",
                "recipientPhone": "6802162320",
                "recipientPhoneAlternate": "",
                "callerName": "debbie",
                "callerPhone": "3158706923",
                "vendorExported": "Yes",
                "wheelchairService": "No",
                "primaryProcedureCode": "A0100",
                "primaryProcedureCodeModifier": "",
                "pickupDate": "01/07/2023",
                "pickupTime": "0800",
                "pickupAddress": {
                    "addressId": "4531710",
                    "addressDetailId": "25061791",
                    "address": "600 James St",
                    "address2": "506",
                    "city": "Syracuse",
                    "state": "NY",
                    "zip": "13203",
                    "detail": "",
                    "lat": "43.054141600000001",
                    "lon": "-76.144086099999996"
                },
                "dropoffDate": "01/07/2023",
                "dropoffTime": "0900",
                "dropoffAddress": {
                    "addressId": "638819",
                    "addressDetailId": "4411153",
                    "address": "301 Prospect Ave",
                    "address2": "",
                    "city": "Syracuse",
                    "state": "NY",
                    "zip": "13203",
                    "detail": "",
                    "lat": "43.055958500000003",
                    "lon": "-76.149504399999998"
                },
                "GPS": {
                    "TrackingStatus": "Complete",
                    "dispatchTimestamp": "01/07/2023 08:01:25",
                    "dispatchLat": "43.100259999999999",
                    "dispatchLon": "-76.083039999999997",
                    "pickupTimestamp": "01/07/2023 08:17:39",
                    "pickupLat": "43.054412999999997",
                    "pickupLon": "-76.144409999999993",
                    "startTimestamp": "01/07/2023 08:20:12",
                    "startLat": "43.054366999999999",
                    "startLon": "-76.144300000000001",
                    "dropoffTimestamp": "01/07/2023 08:21:48",
                    "dropoffLat": "43.057740000000003",
                    "dropoffLon": "-76.149540000000002",
                    "endTimestamp": "01/07/2023 08:31:48",
                    "endLat": "43.055219999999998",
                    "endLon": "-76.147544999999994",
                    "noshowTimestamp": "",
                    "noshowLat": "",
                    "noshowLon": ""
                },
                "primaryRate": "3.01",
                "primaryBaseAmount": "",
                "primaryProcedureCode": "A0100",
                "primaryProcedureCodeModifier": "",
                "calculatedTripMileage": ".4",
                "totalTripCost": "4.3800",
                "legMileage": ".4",
                "legCost": "3.0100",
                "transportType": "Taxi-Onondaga",
                "serviceType": "Taxi/Livery",
                "changedSinceLastViewed": "0",
                "vehicleId": "17731LY",
                "driverId": "404282559",
                "refusalTimeStamp": "",
                "refusalReasonId": "",
                "refusalFirstName": "",
                "refusalLastName": "",
                "need_drivers_and_vehicles": true,
                "isStandingOrderTrip": false,
                "standingOrderEndDate": null,
                "availableActions": [
                    "invoiceDetail",
                    "editCorrection",
                    "deleteCorrection",
                    "correctionDetails"
                ],
                "existingActions": {
                    "openCorrection": "1",
                    "attested": "1",
                    "priorAuthorizationNumber": ""
                },
                "secondary_services": [
                    {
                        "service_name": "Mileage-Taxi Onondaga",
                        "service_procedure_code": "S0215",
                        "service_procedure_code_modifier": "",
                        "service_rate": "3.40",
                        "service_leg_id": "289493100",
                        "service_quantity": ".4"
                    },
                    {
                        "service_name": "Taxi-Upstate Fuel AddOn",
                        "service_procedure_code": "A0170",
                        "service_procedure_code_modifier": "HC",
                        "service_rate": ".03",
                        "service_leg_id": "289493100",
                        "service_quantity": ".4"
                    }
                ],
                "instructions": {
                    "additionalRiders": false,
                    "carSeats": false,
                    "serviceAnimal": false,
                    "enrolleeMobility": null,
                    "enrolleeWeight": null,
                    "uponArrival": null,
                    "stairsOverLimit": null,
                    "wheelchairType": null,
                    "enrolleeOnOxygen": false,
                    "enrolleeOnVentilator": null,
                    "vendorSuppliesOxygen": null,
                    "ambulanceNotes": null,
                    "orthoCushion": null,
                    "legLift": null
                }
            }
        
        
        booking = [
        {
        PickUpAddress:"600 James St",
       DropOffAddress: "301 Prospect Ave"
        }
        ]


function   getBookingOfMatchedAddress(trip, bookings) {
        return bookings.find(b => {
            const pickUpAddressArr = b.PickUpAddress?.split(' ');
            const pickUpAddressBrokerArr = trip.pickupAddress.address.split(' ');
            const dropOffAddressArr = b.DropOffAddress?.split(' ');
            const dropOffAddressBrokerArr = trip.dropoffAddress.address.split(' ');
            if (pickUpAddressArr && pickUpAddressBrokerArr && (pickUpAddressArr[0] == pickUpAddressBrokerArr[0]) && (pickUpAddressArr[1] == pickUpAddressBrokerArr[1])
                && dropOffAddressArr && dropOffAddressBrokerArr && (dropOffAddressArr[0] == dropOffAddressBrokerArr[0]) && (dropOffAddressArr[1] == dropOffAddressBrokerArr[1])) {
                return true;
            }
        });
    }
    
  console.log(getBookingOfMatchedAddress(trips,booking))
