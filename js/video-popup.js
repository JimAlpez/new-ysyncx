$(document).ready(function () {
	$("#videoBtn").on("click", function () {
		var videoUrl = "https://www.youtube.com/embed/b9jO5xKaWpo?autoplay=1";
		var popupHtml =
			'<div class="video-popup-overlay"><div class="video-popup"><iframe width="560" height="315" src="' +
			videoUrl +
			'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><button class="video-popup-close">&times;</button></div></div>';
		$("body").append(popupHtml);

		$(".video-popup-close").click(function () {
			$(".video-popup-overlay").remove();
		});
	});
});
