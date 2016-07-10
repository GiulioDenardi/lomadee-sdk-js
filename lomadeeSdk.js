var $http = require('http');
var querystring = require('querystring');

module.exports = {
	SERVICES: {
		//Relacionados a ofertas
		offers: {
			list: 'findOfferList',
			top: 'v2/topOffers',
			lomadeezator: 'createLinks'
		},

		//Relacionados a produtos
		products: {
			list: 'findProductList',
			top: 'v2/topProducts',
			details: 'viewProductDetails',
			rating: 'viewUserRatings'
		},

		//Relacionados a categorias
		categories: {
			list: 'findCategoryList',
			top: 'v2/topCategories'
		},

		//Relacionados a cupons
		coupons: {
			list: 'coupons'
		},

		//Relacionados ao anunciante
		advertiser: {
			list: 'sellers',
			details: 'viewSellerDetails'
		}
	},

	get: function (service, callback, params) {
		params = params !== undefined ? params : {};
		params.format = 'json';

		options.path = options.path.replace('{service}', service) + querystring.stringify(params);

		var result;

		$http.get(options, function (response) {
			response.on('data', function (chunk) {
				result += chunk;
			});

			response.on('end', function() {
				result = JSON.parse(result.replace('undefined', ''));
				callback(result);
			});
		});
	}
}

var ENVIRONMENTS = {
	sandbox: 'sandbox',
	production: 'bws'
}

var environment = ENVIRONMENTS.sandbox;
var appToken = '37325038444c556c30546f3d';

var options = {
	host: environment + '.buscape.com.br',
	path: '/service/{service}/lomadee/' + appToken + '/BR/?'
}