class Header extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
            <header class="p-6 bg-cover bg-no-repeat bg-center bg-[url('https://imagedelivery.net/6JkaVsfAvbV7M0nIAmm2-g/e9dcc63b-fda7-45fd-4444-99da9c174600/public')]">
                <div class="w-24 absolute left-0 top-0 mt-3 ml-3">
                    <a href="/">
                        <img class="mx-auto" src="https://imagedelivery.net/6JkaVsfAvbV7M0nIAmm2-g/0caab423-077a-401e-4d43-32be986e6e00/public" alt="Logo">
                    </a>
                </div>
                <div class="relative selectize-float h-12 z-10 max-w-3xl w-full mx-auto pb-2">
                    <label for="yxSearch" class="cursor-pointer absolute top-0 right-0 z-10 text-md text-gray-500 grid place-content-center h-11 w-10"><i class='bx bx-search'></i></label>
                    <input type="text" id="yxSearch">
                </div>
                <div class="max-w-3xl mx-auto grid sm:grid-cols-2 pt-4 px-6 text-[13px] space-y-2 sm:space-y-0">
                    <div class="sm:col-span-1 text-center sm:text-left">
                        <button type="button" class="bg-white px-2 h-6 rounded hover:bg-[#65a0c8] hover:text-white">Library</button>
                    </div>
                    <div class="sm:col-span-1 flex item-center">
                        <label for="searchType" class="text-white text-base">Search</label>
                        <select name="searchType" id="searchType" class="w-full ml-2 rounded-full h-6 outline-none">
                            <option selected value="Tag">1) X Tags (search topics)</option>
                            <option value="Thread">2) Y Thread Containers (search books, articles, podcasts, and videos)</option>
                            <option value="Post">3) Ask YSyncX a Question (responds with answer and excerpts)</option>
                        </select>
                    </div>
                </div>
            </header>
        `;
	}
}

customElements.define("header-component", Header);
