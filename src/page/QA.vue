<template>
    <div id="root">
        <div v-loading="loading"   element-loading-custom-class="loading_color" element-loading-spinner="el-icon-loading">
            <div class="ThemedWrapper-jd76ve-0 iIQNKn slide push-enter-done">
                <div class="WhiteBackground-dfe6q2-0 hMZFoN">
                    <div class="am-accordion QuestionAndAnswer__CustomAccordionWrapper-hrzhyv-0 fAkwtR">
                        <div class="am-accordion my-accordion">
                            <div class="am-accordion-item  pad" v-for="(item,index) in QAList" :class="item.zhankai?'am-accordion-item-active':''" @click="zk(item.zhankai,index)">
                                <div class="am-accordion-header"><i
                                    class="arrow"></i>{{item.QTitle}}</div>
                                <div class="am-accordion-content am-accordion-content-active">
                                    <div class="am-accordion-content-box">
                                        <div>{{item.Qinfo}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
    </div>
</template>

<script>
    import {getListQuestions} from '../api/getData'
    import {getStore} from '@/config/mUtils';
	export default {
		components: {},
		data() {
			return {
                loading:true,
                QAList:[]
            }
		},

		created() {
		    this.getListQuestions();
		},
        ready: function () {
            $(function(){
                $('.am-accordion-item').click(function(){
                    $(this).toggleClass('am-accordion-item-active')
                })
            })
        },
		destroyed() {

		},

		mounted() {

		},
		computed: {},
		methods: {
            zk(B,index){
                if(B) {
                   this.QAList[index].zhankai = false;
               }else {
                   this.QAList[index].zhankai = true;
               }
                this.$forceUpdate();
            },
            async getListQuestions(data) {
                this.loading = true;
                const crs = await getListQuestions({
                    StoresID:getStore('storesid'),
                })
                if (crs.orsuccess == "1") {
                    this.loading = false;
                    this.QAList = crs.data;
                    this.QAList.forEach((item,index)=>{
                        if(index == 0){
                            item.zhankai = true;
                        }else {
                            item.zhankai = false;
                        }
                    })
                } else {
                    this.loading = false;
                    this.$message({
                        message: crs.Msg,
                        type: 'error',
                        duration: 2000
                    });
                }

            },
            toIndex(){
                this.$router.push({path:'/',query:{storesid:getStore('storesid'),openid:getStore('openid')}})
            },
        }
	}

</script>

<style lang="less" scoped>

</style>
