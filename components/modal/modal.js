export default () => ({
	open: false,

	modalTrigger: {
		['@click']() {
			this.open = ! this.open
		},
	},
	modalBackground: {
		['x-show']() {
			return this.open
		},
		['x-transition:enter']() {
			return 'transition duration-300';
		},
		['x-transition:enter-start']() {
			return 'opacity-0';
		},
		['x-transition:enter-end']() {
			return 'opacity-1';
		},
		['x-transition:leave']() {
			return 'transition duration-300';
		},
		['x-transition:leave-start']() {
			return 'opacity-1';
		},
		['x-transition:leave-end']() {
			return 'opacity-0';
		}
	},
	modalDialog: {
		['x-show']() {
			return this.open
		},

		['@keydown.escape.window']() {
			this.open = false;
		},
		['@click.away']() {
			this.open = false;
		},
		['x-transition:enter']() {
            return 'transition ease-[cubic-bezier(.46,1.56,.8,1)] duration-300';
        },
        ['x-transition:enter-start']() {
            return 'opacity-0 -translate-y-12';
        },
        ['x-transition:enter-end']() {
            return 'opacity-1 translate-y-0';
        },
		['x-transition:leave']() {
			return 'transition ease-out duration-300';
		},
		['x-transition:leave-start']() {
			return 'opacity-1 translate-y-0';
		},
		['x-transition:leave-end']() {
			return 'opacity-0 -translate-y-12';
		}

	}
})