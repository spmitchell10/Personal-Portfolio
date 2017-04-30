(function() {
    'use strict';

    angular
        .module('shopular')
        .factory('API', function($http){


        	let data = [
					  { "id": 2957, "name": "widget", "price": 32, "quantity": 203, "color": "red", "discount": 31 },
					  { "id": 89274, "name": "golf club", "price": 98, "quantity": 10, "color": "black", "discount": 0 },
					  { "id": 64, "name": "iPhone", "price": 499, "quantity": 2, "color": "white", "discount": 0 },
					  { "id": 87363, "name": "bonzai tree", "price": 76, "quantity": 2, "color": "green", "discount": 0 },
					  { "id": 1736, "name": "towel", "price": 55, "quantity": 30, "color": "brown", "discount": 10 },
					  { "id": 4836, "name": "dog bed", "price": 99, "quantity": 10, "color": "beige", "discount": 50 },
					  { "id": 829, "name": "waste basket", "price": 15, "quantity": 40, "color": "silver", "discount": 0 },
					  { "id": 46, "name": "guitar", "price": 899, "quantity": 0, "color": "blue", "discount": 150 },
					  { "id": 17456, "name": "matcha tea", "price": 42, "quantity": 4, "color": "green", "discount": 11 },
					  { "id": 3292, "name": "enlightenment", "price": 99999, "quantity": 1, "color": "red", "discount": 0 },
					  { "id": 533, "name": "eggs", "price": 5, "quantity": 12, "color": "brown", "discount": 1 },
					  { "id": 683, "name": "pillow", "price": 27, "quantity": 10, "color": "black", "discount": 12 }
					];

			return {
			    getDahWeather:()=>{
			    	return $http({
					  method: 'GET',
					  url: 'http://api.openweathermap.org/data/2.5/weather?zip=45202&units=imperial&APPID=d0458c4189cf033bf80c84d7a0d38ab0'
					});
			    },

			    getDasJokes:()=>{
			    	return $http({
			    		method:'GET',
			    		url:'http://api.icndb.com/jokes/random?firstName=Jeff&lastName=Boeh',
			    	})
			    },

			    getData:() => {
			    	if(localStorage.getItem('item'))
			    	{
			    		data = JSON.parse(localStorage.getItem('item'));
			    		return JSON.parse(localStorage.getItem('item'));
			    	}
			    	return data;
			    },

			    saveData:(item) => {
			    	data.push(item);
			    	localStorage.setItem('item',JSON.stringify(data));
			    	return data;
			    },

			    update:(item,math) => {
			    	let newData = data.map((singleItem)=>{
			    		if(singleItem.id===item.id)
			    		{
			    			if(math==="add")
			    			{
			    				singleItem.quantity++;
			    			}
			    			else
			    			{
			    				singleItem.quantity--;
			    			}
			    		}
			    		return singleItem;
			    	});

			    	localStorage.setItem('item',JSON.stringify(newData));
			    	return newData;
			    }
		  	};
        });

})();