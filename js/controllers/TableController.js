(function() {
    'use strict';

    angular
        .module('shopular')
        .controller('TableController', function(API) {

        	const vm = this;

        	// Get all our data
        	const getWeather = API.getDahWeather();
        	const getJoke = API.getDasJokes();
        	vm.data = API.getData();

        	// Set constants
        	vm.tax = 1.0575;

     		// Getting all our apis
        	getWeather
        	.then(res => {
        		vm.weather = res.data;
        	})

        	getJoke
        	.then(res => {
        		vm.joke = res.data.value.joke;
        	})

            
            // All our event listeners 
			vm.changeQuantity = function(item,add){
				if(add) {
					item.quantity++;
                    API.update(item,'add');
				} else {
					item.quantity--;
                    API.update(item,'subtract');
				}
			}

			vm.getPrice = function(item){
				return ((item.price-item.discount) * vm.tax)*item.quantity
			}

			vm.submitForm = function(valid){
				if(valid){

					const newItem = Object.assign({},vm.item);
                    newItem.id = Date.now();
                    vm.items = API.saveData(newItem);


				} else {
					alert("INVALID FORM");
				}
			}
        });
     
})();