var ListController ={
	init: function(){
		ListController.setForm();
		ListController.ListNota();
	},
	setForm: function(){
		var form = document.querySelector('form');
		form.addEventListener('submit',function(event){
			ListController.addNota(form);
			event.preventDefault();
		});
	},
	addItem: function(form){
		var nota ={
			nota : form.nota.value,
			name: form.name.value,
			description: form.lista.value
		};
		listService.addNotaNoHtml(nota);
		ListController.addNotaNoHtml(nota);
	},
	calcular: function(){
		var valor = document.getElementById('nota');
		var nota = parsefloat(valor.value),
		var media = 0;
		total = parseFloat(Listservice.calcular(nota));
         ListController.mostrarResultado(resultado);
	},
    mostrarResultado: function (resultado){
		var result = document.getElementById('resultado');
		result.innerHTML = resultado;
	},
		
	ListItem: function(){
		var notas = listService.getList();
		itens.forEach(function(nota){
			ListController.addItemNotaNoHtml(nota);
		});
	},
	addNotaNoHtml: function(nota){
		var 
		section = document.getElementById('ListaItem'),
			dl = document.createElement('dl'),
			ddNota = ListController.criarDDItem(item.item, 'nota'),
			ddNota = ListController.criarDDPrice(item.price,'notas'),
			ddDesc = ListController.criarDDDesc(item.description,'lista')
		
		
		dl.appendChild(dt);
		dl.appendChild(ddNota);
		
		dl.appendChild(ddDesc);
		
		section.appendChild(dl);
		
		
	},
	criarDD: function (value, className){
		var dd = document.createElement('dd');
		
		dd.className = className;
		dd.innerHTML = value;
		
		return dd;
	
	
};

ListController.init();