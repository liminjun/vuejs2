<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>

            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <p>Custom Directives</p>
                <p v-highlight:background.delayed="'red'">hello world.</p>

                <p v-local-highlight:background.delayed.blink="'red'">hello world.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind(el, binding, vnode) {
                    // el.style.backgroundColor="green";
                    // el.style.backgroundColor=binding.value;
                    var delay = 0;
                    if (binding.modifiers['delayed']) {
                        delay = 3000;
                    }
                    if (binding.modifiers['blink']) {
                        let mainColor = binding.value;
                        let secondColor = "blue";
                        let currentColor = mainColor;
                        setTimeout(() => {
                            setInterval(() => {
                                currentColor === secondColor ? currentColor = mainColor : currentColor = secondColor;
                                el.style.backgroundColor = currentColor;
                            }, 1000);

                            

                        }, delay);
                    } else {
                        setTimeout(() => {
                            if (binding.arg === 'background') {
                                el.style.backgroundColor = binding.value;
                            } else {
                                el.style.color = binding.value;
                            }
                        }, delay);
                    }


                }
            }
        }
    }
</script>

<style>

</style>