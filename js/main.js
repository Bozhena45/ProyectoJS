$(document).ready(() =>
{

	// Slider
	$('.bxslider').bxSlider({
	    mode: 'fade',
	    captions: true,
	    slideWidth: 1200,
	    pager: false,
	    auto: true
  	});

  	// Posts
  	var posts = [
  		{
  			title: "Titulo 1",
  			date: new Date(),
  			content: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis rem, enim eius quam, aliquid repellat doloremque vitae eaque aperiam, voluptas omnis officiis reiciendis praesentium nemo quo. Adipisci assumenda perspiciatis quia.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nemo nesciunt accusantium necessitatibus, alias enim incidunt, aperiam illum blanditiis excepturi repudiandae recusandae doloremque inventore magni laborum sequi facere distinctio temporibus."
  		},
  		{
  			title: "Titulo 2",
  			date: new Date(),
  			content: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis rem, enim eius quam, aliquid repellat doloremque vitae eaque aperiam, voluptas omnis officiis reiciendis praesentium nemo quo. Adipisci assumenda perspiciatis quia.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nemo nesciunt accusantium necessitatibus, alias enim incidunt, aperiam illum blanditiis excepturi repudiandae recusandae doloremque inventore magni laborum sequi facere distinctio temporibus."
  		},
  		{
  			title: "Titulo 3",
  			date: new Date(),
  			content: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis rem, enim eius quam, aliquid repellat doloremque vitae eaque aperiam, voluptas omnis officiis reiciendis praesentium nemo quo. Adipisci assumenda perspiciatis quia.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nemo nesciunt accusantium necessitatibus, alias enim incidunt, aperiam illum blanditiis excepturi repudiandae recusandae doloremque inventore magni laborum sequi facere distinctio temporibus."
  		},
  		{
  			title: "Titulo 4",
  			date: new Date(),
  			content: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis rem, enim eius quam, aliquid repellat doloremque vitae eaque aperiam, voluptas omnis officiis reiciendis praesentium nemo quo. Adipisci assumenda perspiciatis quia.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nemo nesciunt accusantium necessitatibus, alias enim incidunt, aperiam illum blanditiis excepturi repudiandae recusandae doloremque inventore magni laborum sequi facere distinctio temporibus."
  		}
  	];

  	posts.forEach((item, index) =>
  	{

  		var post = `
			<article class="post">
					
				<h2>${item.title}</h2>

				<span class="date">${item.date}</span>

				<p>${item.content}</p>

				<a href="#" class="button-more">Leer más</a>

			</article>
  		`

  		$("#posts").append(post);

  	});

  	// Selector tema
  	var theme = $("#theme");

  	$("#to-green").click(function()
  	{
  		theme.attr("href", "css/green.css");
  	});

  	$("#to-red").click(function()
  	{
  		theme.attr("href", "css/red.css");
  	});

  	$("#to-blue").click(function()
  	{
  		theme.attr("href", "css/blue.css");
  	});

  	// Scroll arriba de la web
  	$(".subir").click(function(e)
  	{

  		e.preventDefault();

  		$("html, body").animate(
  			{
  				scrollTop: 0
  			}, 500
  		);

  		return false;

  	});

  	// Login
  	$("#login form").submit(function()
  	{

  		var nombre = $("#form_name").val();
  		var email = $("#form_email").val();
  		var pass = $("#form_password").val();

  		
  		if(nombre != "" && email != "" && pass != "")
  		{
  			
  			var usuario = {
  				nombre: nombre,
  				email: email,
  				password: pass
  			};

  			localStorage.setItem("usuario", JSON.stringify(usuario));

  		}
  		else
  		{
  			alert("Debes rellenar todos los datos");
  			return false;
  		}

  	});

  	var usuario = JSON.parse(localStorage.getItem("usuario"));

  	if(usuario != null)
  	{

  		$("#login form").hide();

  		var login = `
			<h3>Bienvenido ${usuario.nombre}</h3>
			<p>Su email es: ${usuario.email}</p>
			<a href="#" id="logout">Salir</a>
  		`;

  		$("#login").append(login);

  	}

  	$("#logout").click(function()
  	{

  		localStorage.removeItem("usuario");
  		location.reload();

  	});

  	// Acordeon
  	if(window.location.href.indexOf("about") > -1)
  	{

  		$("#acordeon").accordion();

  	}

  	// Validación
  	if(window.location.href.indexOf("contact") > -1)
  	{

  		$("form input[name = 'date']").datepicker(
  		{
  			dateFormat: "dd-mm-yy"
  		});

  		$.validate({
		    lang: 'es'
		});
  	}
  	

});































