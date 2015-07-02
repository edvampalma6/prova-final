var Listservice = {
	list: [],
	getList: function(){
		Listservice.buscaNoLocalStorage();
		return ListService.list;
	},
	calcular: function (nota){
		var total = 0;
		media = (test1 + test2 + exercises + homework/100);
		
		return media;
	},
	salvarNoLocalStorage: function(){
		var jsonText = JSON.stringify(Listservice.list);
		window.localStorage.setItem('listaNota',jsonText);
	},
	buscaNoLocalStorage: function(){
		var jsonText = window.localStorage.getItem('listaNota');
		if(jsonText){
			Listservice.list = JSON.parse(jsonText);
		}
	}
};
	