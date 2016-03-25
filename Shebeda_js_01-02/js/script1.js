alert('Введите имена:');

    var arr = [ ,  ,  ,  ,  ];
   
    for (var i = 0; i < 5; i++) {
    	
    	arr[i] = prompt('Имя '+(i+1));
     
}
	

 var admin = prompt('А теперь введите имя администратора:');

 var flag = false;

for (var i = 0; i < 5; i++) {
	if (admin == arr[i]) {
		flag = true;
	}
}

if (flag) { alert(admin + ', Вы успешно вошли')} 
else {alert(admin + ', Вам доступ запрещен')} 