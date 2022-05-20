export default () => ({
    open: false,
    init() {},
    trigger: {
      ["@click"]() {
        this.open = !this.open;
      }
    },
    menu: {
      ["x-show"]() {
        return this.open;
      },

      ["@keydown.escape.window"]() {
        this.open = false;
      },
      ["@click.away"]() {
        this.open = false;
      },
      ["x-transition:enter"]() {
        return "transition ease-[cubic-bezier(.3,2.3,.6,1)] duration-100";
      },
      ["x-transition:enter-start"]() {
        return "opacity-0 -translate-y-1";
      },
      ["x-transition:enter-end"]() {
        return "opacity-1 translate-y-0";
      },
      ["x-transition:leave"]() {
        return "transition ease-out duration-100";
      },
      ["x-transition:leave-start"]() {
        return "opacity-1 translate-y-0";
      },
      ["x-transition:leave-end"]() {
        return "opacity-0 -translate-y-1";
      }
    }
  })