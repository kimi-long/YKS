<template>
    <div id="app" class="fillcontain">
		    <router-view></router-view>
    </div>
</template>

<script>
    import { getLocal,getStore,setStore } from '@/config/mUtils';
    export default {
    	created() {
            // var style = localStorage.getItem("style");
            // if(style){
            //     document.getElementById('changeOne').setAttribute("href",style); //实现将主题保存在内存中刷新浏览器不改变
            // };

        },
        mounted() {

        },
        methods:{
            change:function () {
                console.log(this.$route.query.templatetype);
                setStore('templatetype',this.$route.query.templatetype)
                // let num = 1;
                // let UrlStr = window.location.href.toString();
                // console.log(UrlStr);
                // let index = UrlStr.indexOf('templateType');
                // console.log(index);
                // if(index != -1){
                //     num = UrlStr.charAt(index+13)
                // };

                if(getStore('templatetype') == '1'){
                    console.log(1111);
                    document.getElementById('changeOne').setAttribute("href","../static/css/bluestyle.css");
                    localStorage.setItem("style","../static/css/bluestyle.css");
                }else if(getStore('templatetype') == '2'){
                    console.log(2222);
                    document.getElementById('changeOne').setAttribute("href","../static/css/redstyle.css");
                    localStorage.setItem("style","../static/css/redstyle.css");
                }else if(getStore('templatetype') == '3'){
                    console.log(3333);
                    document.getElementById('changeOne').setAttribute("href","../static/css/blackstyle.css");
                    localStorage.setItem("style","../static/css/blackstyle.css");
                }else {
                    console.log(4444);
                    document.getElementById('changeOne').setAttribute("href","../static/css/darkgreenstyle.css");
                    localStorage.setItem("style","../static/css/darkgreenstyle.css");
                }
            }
        }
    }
</script>

<style lang="less">
	@import './style/common';
</style>
