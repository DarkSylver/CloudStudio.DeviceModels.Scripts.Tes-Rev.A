function getConfiguration(config) 
{ 
    config.addressLabel = {en: "SensorID", es: "SensorID"};
}
 
function getEndpoints(deviceAddress, endpoints)
{
  endpoints.addEndpoint("1", "Humidity sensor", endpointType.humiditySensor);
  endpoints.addEndpoint("2", "Temperature sensor", endpointType.temperatureSensor);
  endpoints.addEndpoint("3", "Status sensor", endpointType.appliance);
  //endpoints.addEndpoint("4", "Status sensor", endpointType.);
}
 
function validateDeviceAddress(address, result)
{

}
 
function updateDeviceUIRules(device, rules)
{
  rules.canCreateEndpoints = true;
}
 
function updateEndpointUIRules(endpoint, rules)
{
  rules.canDelete = true;
  rules.canEditSubtype = true;
}
