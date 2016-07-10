#**Lomadee's Javascript SDK**

This SDK helps you to integrate with the Lomadee SDK to search for nice offers, coupons, products and product categories.

###**How to import it:**
> 1. Clone this project into your workspace.
> 2. In the downloaded file, set the variables "environment" and "appToken" according to your preferences.
> 2.1 **Environment**: 'sandbox' or 'bws'.
> 2.2 **appToken**: your appToken generated at [Developer].(http://developer.buscape.com.br/portal/developer/)
> 3. Import the js file into your project: require('path/to/sdk/lomadeeSdk.js');
> 4. Start using it!

###**Documentation:**
> Runs a lomadee **service** and use the resulting **object** as a parameter to the callback function.
> > **get(service, callback, [, params]).**
> 
> Parameters:
> > **String service:** the Lomadee's service. You can use the object *SERVICES* from the sdk to get the possible values.
> **function callback(Object result):** a callback function that will run right after the Lomadee API executes.
> **[Optional] Object params:** an object of the choosen service's parameters. You can find the parameters for each service at [Lomadee's REST API documentation](http://developer.buscape.com.br/portal/developer/documentacao/apis-afiliados/api-lomadee/api-de-ofertas/).

###Example code (NodeJs):

    //import the SDK as the variable $api.
    var $api = require('./hello.js');

	//The created callback function to run after the API call finishes.
    var test = function (json) {
	    console.log(json);
    }

	//A request to the Lomadee's Top Offers Service.
    $api.get($api.SERVICES.offers.top, test);

###Future developments:

 - Inject your appToken during your import.
 - Automatically choose your environment according to your appToken.
 - Add for each service the param objects, to make easier to use the sdk.