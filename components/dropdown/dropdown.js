export default () => ({
  style: {
    wrapper: "relative",
    menu: {
      bottom: "absolute bg-white rounded-lg shadow-lg py-3 w-max mt-3",
      top:
        "absolute bg-white rounded-lg shadow-lg py-3 w-max -translate-y-full -mt-3 top-0"
    },
    menuItem: "px-4 py-2 flex gap-2 items-center outline-0 focus:bg-neutral-100 hover:bg-neutral-100 whitespace-nowrap",
  },
  position: "bottom",
  open: false,
  init() {
    const style = this.style;
    const wrapper = this.$el;
    this.position = wrapper.dataset.position === "top" ? "top" : "bottom";
    wrapper.className = style.wrapper;
    const triggerElement = this.$el.querySelector("[x-bind=trigger]");
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
      return "ease-[cubic-bezier(.3,2.3,.6,1)] duration-200";
    },
    ["x-transition:enter-start"]() {
      return this.position === "bottom" ? "!opacity-0 mt-0" : "!opacity-0 mt-0";
    },
    ["x-transition:enter-end"]() {
      return this.position === "bottom"
        ? "!opacity-1 !mt-3"
        : "!opacity-1 !-mt-3";
    },
    ["x-transition:leave"]() {
      return "margin ease-out duration-200";
    },
    ["x-transition:leave-start"]() {
      return this.position === "bottom"
        ? "!opacity-1 !mt-3"
        : "!opacity-1 !-mt-3";
    },
    ["x-transition:leave-end"]() {
      return this.position === "bottom" ? "opacity-0 mt-0" : "opacity-0 mt-0";
    }
  }
});
