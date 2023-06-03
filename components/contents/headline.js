class Headline extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const targetId = this.getAttribute("target-id") || "block-details";
		const threadContainer = this.getAttribute("thread-container") || "N/A";
		const postContainer = this.getAttribute("post-container") || "N/A";
		const blockType = this.getAttribute("block-type") || "N/A";

		this.innerHTML = `
			<style>
				.template-container {
					position: relative;
				}		
			</style>

			<div class="flex items-center justify-between py-2 px-4">
				<div class="line-v flex items-center gap-4">
					<button type="button" class="flex items-center gap-1 relative block-toggle" data-target="#${targetId}">Block Details <i class='bx bx-chevron-down text-xl h-5 leading-4'></i></button>
					<button type="button" class="relative" id="questions-button">Questions</button>
					<button type="button" class="relative">Thread</button>
				</div>
				<div class="flex items-center gap-1">
					<button class="text-lg text-blue-600 grid place-items-center" type="button">
						<i class='bx bx-folder'></i>
					</button>
					<button class="text-xl text-blue-600 grid place-items-center" type="button">
						<i class='bx bx-dots-vertical-rounded'></i>
					</button>
				</div>
			</div>
			<div id="${targetId}" class="px-6 py-2 space-y-3" style="display: none;">
				<ul>
					<li><strong>Thread Container:</strong> ${threadContainer}</li>
					<li><strong>Post Container:</strong> ${postContainer}</li>
				</ul>
				<ul>
					<li><strong>Block Type:</strong> ${blockType}</li>
					<li><strong>Writing Contributor(s):</strong> <span class="text-blue-700">SystemsThinkerE</span></li>
					<li><strong>Curator(s):</strong> <span class="text-blue-700">MikeNorwood</span></li>
					<li class="flex items-center gap-1"><strong>Additional Block Tags:</strong> <i class='bx bx-chevron-down text-xl h-5 leading-4'></i></li>
				</ul>
			</div>
		`;

		const questionsButton = this.querySelector("#questions-button");
		const templateContainer = document.createElement("div");
		templateContainer.classList.add("template-container");
		templateContainer.innerHTML = `
			<div class="arrow z-10 absolute top-0 left-[20px] w-0 h-0 border-[12px] border-solid border-b-gray-300 border-l-transparent border-r-transparent border-t-0"></div>
			<div class="template w-[450px] absolute top-[calc(100%+10px)] left-0 border border-solid border-black shadow-lg z-10 rounded-[26px] overflow-hidden">
				<div class="bg-[#e0edff] flex gap-2 p-4">
					<img src="https://imagedelivery.net/6JkaVsfAvbV7M0nIAmm2-g/80e8dd58-835b-4ed6-45b8-f7027d245100/sign" alt="Questions" width="40">
					<h3 class="text-lg text-blue-700 font-bold">Questions</h3>
				</div>
				<div class="bg-white text-left p-4">
					<p>Coming soon</p>
				</div>
			</div>
		`;

		questionsButton.addEventListener("mouseenter", () => {
			questionsButton.appendChild(templateContainer);
		});

		questionsButton.addEventListener("mouseleave", () => {
			templateContainer.remove();
		});
	}
}

customElements.define("headline-component", Headline);
