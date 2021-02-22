<template>
    <div class="am-tabs-tab-bar-wrap" style="position:fixed;left:0;bottom:0;width:100%;z-index:99">
        <div class="am-tab-bar-bar bottom">
            <div class="am-tab-bar-tab" @click="toIndex" :class="index == 1?'current':''">
                <div class="am-tab-bar-tab-icon">
                    <div class="IndexNavBar__BadgeWrapper-zp8p8u-1 fXTpFr"><i
                        class="icon am-icon am-icon-homepage am-icon-s"></i></div>
                </div>
                <p class="am-tab-bar-tab-title">首页</p>
            </div>
            <div class="am-tab-bar-tab"  @click="tocalendar" :class="index == 2?'current':''">
                <div class="am-tab-bar-tab-icon">
                    <div class="IndexNavBar__BadgeWrapper-zp8p8u-1 fXTpFr"><i
                        class="icon am-icon am-icon-timetable am-icon-s"></i></div>
                </div>
                <p class="am-tab-bar-tab-title">课表</p>
            </div>
            <div class="am-tab-bar-tab" @click="toyuyue" :class="index == 3?'current':''">
                <div class="am-tab-bar-tab-icon">
                    <div class="IndexNavBar__BadgeWrapper-zp8p8u-1 fXTpFr"><i
                        class="icon am-icon am-icon-appointment am-icon-s"></i></div>
                </div>
                <p class="am-tab-bar-tab-title">已约</p>
            </div>
            <div class="am-tab-bar-tab" @click="tomy" :class="index == 4?'current':''">
                <div class="am-tab-bar-tab-icon">
                    <div class="IndexNavBar__BadgeWrapper-zp8p8u-1 fXTpFr"><i
                        class="icon am-icon am-icon-me am-icon-s"></i></div>
                </div>
                <p class="am-tab-bar-tab-title">我的</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { getLocal,getStore,setStore } from '@/config/mUtils';

	export default {
		components: {},
		data() {
			return {
            }
		},
        props:['index'],
		created() {
		},

		destroyed() {

		},

		mounted() {
            jQuery('.am-tabs-default-bar-tab').click(function() { TabSelect(".am-tabs-default-bar-tab", "div.lists", "am-tabs-default-bar-tab-active", jQuery(this)) });
            jQuery('.am-tabs-default-bar-tab').eq(0).trigger("click");
            function TabSelect(tab,con,addClass,obj) {
                var jQuery_self = obj;
                var jQuery_nav = jQuery(tab);

                jQuery_nav.removeClass(addClass),
                    jQuery_self.addClass(addClass);

                var jQuery_index = jQuery_nav.index(jQuery_self);
                var jQuery_con = jQuery(con);
                jQuery_con.hide(),
                    jQuery_con.eq(jQuery_index).show();
            };
		},
		computed: {},
		methods: {
            toIndex(){
                this.$router.push({path:'/',query:{storesid:getStore('storesid'),openid:getStore('openid')}})
            },
            tocalendar(){
                this.$router.push({path:'/calendar',query:{storesid:getStore('storesid'),openid:getStore('openid')}})
            },
            toyuyue(){
                this.$router.push({path:'/yuyue',query:{storesid:getStore('storesid'),openid:getStore('openid')}})
            },
            tomy(){
                this.$router.push({path:'/my',query:{storesid:getStore('storesid'),openid:getStore('openid')}})
            },

        }
	}

</script>

<style lang="less" scoped>

</style>
