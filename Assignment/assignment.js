// put your javascript code here
var categories_template, animals_template, animal_template;

var current_category = animals_data.categories[0];
var current_photo = current_category.image1

function showTemplate(template, data){
	var html = template(data);
	$('#content').html(html);
}

$(document).ready(function(){

	var source = $("#categories-template").html();
	categories_template = Handlebars.compile(source);
	
	source = $("#animals-template").html();
	animals_template = Handlebars.compile(source);
	
	source = $("#animal-template").html();
	animal_template = Handlebars.compile(source);

	$("#categories-tab").click(function () {
		showTemplate(categories_template, animals_data);

		$(".navbar-nav li.active").removeClass("active");
		$("#categories-tab").addClass("active");

		$(".category-thumbnail").click(function () {
			var index = $(this).data("id");

			current_category = animals_data.categories[index];
			showTemplate(animals_template, current_category);

			$(".breadcrumb li.active").text(current_category.name);

			$(".animal-thumbnail").click(function () {
				var index = $(this).data("id");

				current_photo = current_category.animals[index];
				showTemplate(animal_template, current_photo);
				$(".breadcrumb li.category-js a").text(current_category.name);
				$(".breadcrumb li.active").text(current_photo.name);
			});
		});
	});
	$("#categories-tab").click();
});