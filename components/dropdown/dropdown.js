export default () => ({
  style: {
    wrapper: "relative",
    menu: {
      bottom: "absolute bg-white rounded-lg shadow-lg py-3 w-max mt-3",
      top:
        "absolute bg-white rounded-lg shadow-lg py-3 w-max -translate-y-full -mt-3 top-0"
    },
    menuItem: "px-4 py-2 block outline-0 focus:bg-neutral-100 hover:bg-neutral-100 whitespace-nowrap",
    icon: {
      bottom:
        '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path  stroke-linecap="round" stroke-width="2" d="M5 10l7 7 7-7"/></svg>',
      top:
        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-5 h-5 inline ml-1"><path xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14l7-7 7 7"/></svg>'
    }
  },
  position: "bottom",
  open: false,
  init() {
    const style = this.style;
    const wrapper = this.$el;
    this.position = wrapper.dataset.position === "top" ? "top" : "bottom";
    wrapper.className = style.wrapper;
    const triggerElement = this.$el.querySelector("[x-bind=trigger]");
    triggerElement.innerHTML += style.icon[this.position];
    const menuElement = this.$el.querySelector("[x-bind=menu]");
    menuElement.className = style.menu[this.position];
    const menuItems = this.$el.querySelectorAll("[x-bind=menu] > li > a");
    menuItems.forEach((element) => {
      element.className = style.menuItem;
    });
  },
  trigger: {
    ["@click.prevent"]() {
      this.open = !this.open;
    }
  },
  menu: {
    ["x-show"]() {
      return this.open;
    },
    ["x-trap"]() {
      return this.open;
    },
    ["@keydown.escape.window"]() {
      this.open = false;
    },
    ["@click.away"]() {
      this.open = false;
    },
    ["@keydown.prevent.down"]() {
      this.$focus.wrap().next();
    },
    ["@keydown.prevent.up"]() {
      this.$focus.wrap().previous();
    },
    ["x-transition:enter"]() {
      return "margin ease-[cubic-bezier(.3,2.3,.6,1)] duration-200";
    },
    ["x-transition:enter-start"]() {
      return this.position === "bottom" ? "opacity-0 mt-0" : "opacity-0 mt-0";
    },
    ["x-transition:enter-end"]() {
      return this.position === "bottom"
        ? "opacity-1 mt-3"
        : "opacity-1 -mt-3";
    },
    ["x-transition:leave"]() {
      return "margin ease-out duration-200";
    },
    ["x-transition:leave-start"]() {
      return this.position === "bottom"
        ? "opacity-1 mt-3"
        : "opacity-1 -mt-3";
    },
    ["x-transition:leave-end"]() {
      return this.position === "bottom" ? "opacity-0 mt-0" : "opacity-0 mt-0";
    }
  }
});
