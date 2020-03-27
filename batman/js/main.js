$(document).ready(function() {
	let tabsItem = $(".main-content-tabs__link");

	tabsItem.on("click", function(event) {
		event.preventDefault();
		let activeContent = $(this).attr("href");
		$(".main-content-tabs__link_active").toggleClass(
			"main-content-tabs__link_active",
		);
		$(this).toggleClass("main-content-tabs__link_active");

		$(".main-content_visible").toggleClass("main-content_visible");
		$(activeContent).toggleClass("main-content_visible");
	});
});
