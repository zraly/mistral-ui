export default () => ({
	open: false,
	originalBodyPaddingRight: null,
	originalBodyOverflow: null,
	style: {
		background: "fixed top-0 left-0 flex w-screen h-screen max-w-full bg-neutral-500/50 z-50 overflow-y-auto",
		dialog: "h-auto p-6 m-auto relative w-full max-w-md bg-white rounded-lg shadow-xl m-3",
	  },
	init() {
		const style = this.style;
		const backgroundElement = this.$el.querySelector("[x-bind=background]");
		const dialogElement = this.$el.querySelector("[x-bind=dialog]");
		backgroundElement.className = style.background;
		dialogElement.className = style.dialog;

		this.$watch('open', value => {
			if (value === true) {
				this.originalBodyOverfow = window.getComputedStyle(document.body).overflow;
				this.originalPaddingRight = document.body.style.paddingRight;
				const originalComputedPaddingRight = window.getComputedStyle(document.body).paddingRight;
				const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
				document.body.classList.add('overflow-hidden')
				document.body.style.paddingRight = `${scrollBarWidth + parseFloat(originalComputedPaddingRight || 0)}px`;

			} else {
				setTimeout(() => {
					document.body.classList.remove('overflow-hidden')
					document.body.style.paddingRight = this.originalBodyPaddingRight || null;
					document.body.style.overflow = this.originalBodyOverflow;
				}, 300);
			}
		})
	},
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
		["x-trap"]() {
			return this.open;
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