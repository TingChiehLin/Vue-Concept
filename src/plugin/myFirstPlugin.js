import ClickCounter from "../components/ClickCounter";

export default {
    install: (app, option) => {

        app.component('click-counter', ClickCounter);

        app.directive('color', ((el, binding) => {
            let color = 'blue';
            switch (binding.arg) {
                case "red":
                    color = option.color.red;
                    break
                case "yellow":
                    color = option.color.yellow;
                    break
                default:
                    color = option.color.purple
                    break;
            }
            el.style.color = color;
        }));

        const sayHi = () => {
            console.log('Hi How is going?')
        }

        app.provide('sayHiFC', sayHi)
    }
}
