$.ajaxSetup({
  async: false,
});
var jsonData;
$.getJSON("data/tags.json", {}, function (json) {
  jsonData = json;
});

$(document).ready(function () {
  jsonData.sort(function (a, b) {
    var valueA = a.value.toLowerCase();
    var valueB = b.value.toLowerCase();
    if (valueA < valueB) {
      return -1;
    }
    if (valueA > valueB) {
      return 1;
    }
    return 0;
  });

  $("#yxSearch, #yxSearch3_input").selectize({
    searchField: ["value", "descriptions", "img", "date"],
    sortField: {
      field: "text",
      direction: "asc",
    },
    persist: false,
    openOnFocus: false,
    maxItems: 1,
    options: jsonData.filter((option) => option.category === "Tag"),
    render: {
      item: function (item, escape) {
        window.location.href = "page.html?id=" + item.id;

        return (
          "<div class='flex items-start gap-4'><img src='" +
          (item.img ? escape(item.img) : "") +
          "' width='45' alt='" +
          (item.value ? escape(item.value) : "") +
          "'><div>" +
          "<h5 class='text-base text-blue-700 font-bold'>" +
          (item.value ? escape(item.value) : "") +
          "</h5>" +
          "<p class='text-[13px] mb-1'>" +
          (item.description ? escape(item.description) : "") +
          "</p>" +
          "<p class='text-[13px] text-gray-500'>" +
          (item.date ? escape(item.date) : "") +
          "</p>" +
          "</div></div>"
        );
      },
      option: function (item, escape) {
        var descriptionHTML = "";
        if (item.descriptions && item.descriptions.length > 0) {
          for (var i = 0; i < item.descriptions.length; i++) {
            var description = item.descriptions[i];
            if (typeof description === "string") {
              description = description
                .replace(/(\W|^)[123]\)/g, "$1<strong>$&</strong>")
                .replace(/ < /g, "<span style='color: blue'>&lt;</span>");
            }
            descriptionHTML +=
              "<p class='text-[13px] mb-1'>" + description + "</p>";
          }
        }
        return (
          "<div class='flex items-start gap-4 py-4 px-1'><img src='" +
          (item.img ? escape(item.img) : "") +
          "' width='45' alt='" +
          (item.value ? escape(item.value) : "") +
          "'><div>" +
          "<h5 class='text-base text-blue-700 font-bold' style='color:" +
          (item.textColor ? escape(item.textColor) : "") +
          ";'>" +
          (item.value ? escape(item.value) : "") +
          "</h5>" +
          descriptionHTML +
          "<p class='text-[13px] text-gray-500'>" +
          (item.date ? escape(item.date) : "") +
          "</p>" +
          "</div></div>"
        );
      },
    },
    onDropdownOpen: function ($dropdown) {
      $(".logo_big").width(200);
    },
    onDropdownClose: function ($dropdown) {
      if ($(window).width() < 640) {
        $(".logo_big").width(200);
      } else {
        $(".logo_big").width(320);
      }
    },
  });
  $("#yxSearch2_input").selectize({
    searchField: ["value", "descriptions", "img", "date"],
    sortField: {
      field: "text",
      direction: "asc",
    },
    persist: false,
    openOnFocus: false,
    maxItems: 1,
    options: jsonData.filter((option) => option.category === "Thread"),
    render: {
      item: function (item, escape) {
        window.location.href = "page.html?id=" + item.id;

        return (
          "<div class='flex items-start gap-4'><img src='" +
          (item.img ? escape(item.img) : "") +
          "' width='45' alt='" +
          (item.value ? escape(item.value) : "") +
          "'><div>" +
          "<h5 class='text-base text-blue-700 font-bold'>" +
          (item.value ? escape(item.value) : "") +
          "</h5>" +
          "<p class='text-[13px] mb-1'>" +
          (item.description ? escape(item.description) : "") +
          "</p>" +
          "<p class='text-[13px] text-gray-500'>" +
          (item.date ? escape(item.date) : "") +
          "</p>" +
          "</div></div>"
        );
      },
      option: function (item, escape) {
        var descriptionHTML = "";
        if (item.descriptions && item.descriptions.length > 0) {
          for (var i = 0; i < item.descriptions.length; i++) {
            var description = item.descriptions[i];
            if (typeof description === "string") {
              description = description
                .replace(/(\W|^)[123]\)/g, "$1<strong>$&</strong>")
                .replace(/ < /g, "<span style='color: blue'>&lt;</span>");
            }
            descriptionHTML +=
              "<p class='text-[13px] mb-1'>" + description + "</p>";
          }
        }
        return (
          "<div class='flex items-start gap-4 py-4 px-1'><img src='" +
          (item.img ? escape(item.img) : "") +
          "' width='45' alt='" +
          (item.value ? escape(item.value) : "") +
          "'><div>" +
          "<h5 class='text-base text-blue-700 font-bold' style='color:" +
          (item.textColor ? escape(item.textColor) : "") +
          ";'>" +
          (item.value ? escape(item.value) : "") +
          "</h5>" +
          descriptionHTML +
          "<p class='text-[13px] text-gray-500'>" +
          (item.date ? escape(item.date) : "") +
          "</p>" +
          "</div></div>"
        );
      },
    },
    onDropdownOpen: function ($dropdown) {
      $(".logo_big").width(200);
    },
    onDropdownClose: function ($dropdown) {
      if ($(window).width() < 640) {
        $(".logo_big").width(200);
      } else {
        $(".logo_big").width(320);
      }
    },
  });

  $("#searchType").on("change", function () {
    const selectize = $("#yxSearch").data("selectize");
    const selectedValue = $(this).val();

    selectize.clearOptions();

    if (selectedValue === "Thread") {
      jsonData.forEach((option) => {
        if (option.category === "Thread" || option.category2 === "Thread") {
          selectize.addOption(option);
        }
      });
    } else if (selectedValue === "Post") {
      jsonData.forEach((option) => {
        if (option.category === "Post" || option.category2 === "Post") {
          selectize.addOption(option);
        }
      });
    } else {
      jsonData.forEach((option) => {
        if (option.category === "Tag" || option.category2 === "Tag") {
          selectize.addOption(option);
        }
      });
    }
  });
});
