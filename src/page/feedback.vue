<template>
    <div id="root">
        <div>
            <div class="ThemedWrapper-jd76ve-0 hnMLRX slide pop-enter-done">
                <div class="FeedBackNew__TextareaWrapper-sc-1f5a9qy-0 fbReKg">
                    <p class="tips">扫码联系人工客服反馈</p><img :src="imgUrl" alt="客服微信"><button
                    class="CustomButton__InnerContactButton-sc-1u03hwt-4 fBKmKv" id="telBu">着急？直接咨询客服</button>
                </div>
            </div>
        </div>
        <div class="Navigation__NavigationWrapper-sc-163do31-0 heqysv react-draggable">
            <div class="Navigation__PageRedirectWrapper-sc-163do31-1 begceX">
                <div class="back" onclick="javascript:history.go(-1)"><i class="icon am-icon am-icon-index-goback am-icon-s"></i></div>
            </div>
            <div class="Navigation__PageRedirectWrapper-sc-163do31-1 begceX">
                <div class="home" @click="toIndex"><i class="icon am-icon am-icon-index-home am-icon-s"></i></div>
            </div>
        </div>
        <div class="am-modal-mask " id="telbox" style="display:none"><div class="am-modal-wrap " role="dialog"><div role="document" class="am-modal am-modal-transparent"><div class="am-modal-content"><div class="am-modal-body"><div><p>即将拨打:</p><br><h3>{{StoresPhone}}</h3></div></div><div class="am-modal-footer"><div class="am-modal-button-group-h am-modal-button-group-normal" role="group"><a class="am-modal-button" role="button">取消</a><a class="am-modal-button" role="button"  :href="phone">确认</a></div></div></div></div></div>
        </div>
    </div>
</template>

<script>

    import { getLocal,getStore,setStore } from '@/config/mUtils';
	export default {
		components: {},
		data() {
			return {
			    imgUrl:getStore('KFQrCode'),
                StoresPhone:getStore('Phone'),
                phone:'tel:'+getStore('Phone'),
            }
		},

		created() {
		},

		destroyed() {

		},

		mounted() {
            $('#telBu,#telbox .am-modal-button-group-h .am-modal-button').click(function(){
                $('#telbox').toggle();
            });
		},
		computed: {},
		methods: {
            toIndex(){
                this.$router.push({path:'/',query:{storesid:getStore('storesid'),openid:getStore('openid')}})
            },
        }
	}

</script>

<style lang="less" scoped>

</style>
