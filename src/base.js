export default {
    methods: {
        back() {
            this.$router.go(-1);
        },
        onClickLeft() {
			this.$router.go(-1);
        },
        onClickRight(url) {
            this.$router.push({name: url})
        },
        go(url, params = {}) {
            let paramsKeyArr = Object.keys(params);
            if (paramsKeyArr.length) {
                paramsKeyArr.forEach((key) => {
                    this.setItem(key, params[key]);
                })
            }
            this.$router.push({name: url, params});
        },
        setItem(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        },
        getItem(key) {
            return JSON.parse(localStorage.getItem(key));
        },
        removeItem(key) {
            localStorage.removeItem(key);
        }
    }
}