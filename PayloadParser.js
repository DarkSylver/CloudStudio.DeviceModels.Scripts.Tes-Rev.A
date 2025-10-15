function parseUplink(device, payload)
{
    //{"address":"9724600",
    //"description":"Test sensor",
    //"endpoints":{"count":0,"deviceID":10170645,"facilityID":632}}

    //{"Battery":3.5639998912811279,
    //"DevEUI":"9724600",
    //"GatewayID":"24e124fffefdc3d2",
    // "Point":"temp1",
    // "RSSI":-96,
    // "SNR":1.5,
    // "Time":1757713558633473000,
    // "Value":-22.1}

    var js = payload.asJsonObject();

    var bat = parseFloat(js.Battery);
    device.updateDeviceBattery({ voltage: bat });

    if (js.Point == "temp1") {
        var temperatureSensor = device.endpoints.byAddress("2");
        if (temperatureSensor != null) 
        {
            temperatureSensor.updateTemperatureSensorStatus(js.Value); 
        }
    }

	 // Parse and store humidity 
    if (js.Point == "humidity") {
        var humiditySensor = device.endpoints.byAddress("1");
        if (humiditySensor != null) 
        {
            humiditySensor.updateHumiditySensorStatus(js.Value); 
        }	 
    }

	 // Parse and store humidity 
    if (js.Point == "status1") {
        var statusSensor = device.endpoints.byAddress("3");
        if (statusSensor != null) 
        {
            statusSensor.updateApplianceStatus(parseInt(js.Value)); 
        }	 
    }
}

function buildDownlink(device, endpoint, command, payload) 
{ 


}