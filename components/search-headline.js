export class SearchHeadline extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = this.getAttribute('title') || "";
    const targetId = this.getAttribute('target-id') || "";
    const borderColor = this.getAttribute('border-color') || "#b3ffae";

    this.innerHTML = `
      <div class="space-y-4 h-full p-4 sm:p-6 border-x-[3px] border-solid border-[${borderColor}]" style="box-shadow:-1px 0px 0px 0px #000, 1px 0px 0px 0px #000, inset -1px 0px 0px #000, inset 1px 0px 0px #000;">
        <div class="flex items-center gap-5">
          <h4 class="text-gray-400 font-bold text-lg">${title}</h4>
          <button type="button" data-target="${targetId}" class="toggle-btn bg-white rounded border border-solid border-gray-300 text-sm text-gray-400 px-2 py-0.5">Add +</button>
        </div>
        <div id="${targetId}" class="hidden relative selectize-float h-12 z-10 max-w-4xl w-full mx-auto pb-2">
          <label for="${targetId}_input" class="cursor-pointer absolute top-0 left-0 z-10 text-md text-gray-500 grid place-content-center h-11 w-10"><i class='bx bx-search'></i></label>
          <input type="text" id="${targetId}_input">
        </div>
      </div>
    `;

    const toggleBtn = this.querySelector('.toggle-btn');
    toggleBtn.addEventListener('click', () => {
      const targetEl = $('#' + targetId);
      targetEl.slideToggle();
      const btnText = toggleBtn.textContent;
      toggleBtn.textContent = btnText === 'Add +' ? 'Remove -' : 'Add +';
    });
  }
}

customElements.define('yx-search-headline', SearchHeadline);