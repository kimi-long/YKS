<template>
    <div id="root">
        <div v-loading="loading"   element-loading-custom-class="loading_color" element-loading-spinner="el-icon-loading">
            <div class="ThemedWrapper-jd76ve-0 iIQNKn slide pop-enter-done"  style="padding-bottom: 50px">
                <div class="CardTemplateShow__CardTemplateShowWrapper-sc-1qy38wc-0 kPdlzA">
                    <div class="CardTemplateShow__CardTemplateWrapper-sc-1qy38wc-1 coggWH">
                        <div class="CardTemplateComponent__CardWrapper-sc-1slov8k-0 gEySWP">
                            <section  v-if="cardDetail.CradImgURL == ''" class="NewCardTemplateComponent__Wrapper-sc-18n2c0i-0 cWMxiU default-cardTemplate"
                                     style=" background: url(../../static/images/redstyle/morenka.png) 0% 0% / cover;">
                                <div class="inner-wrapper">
                                    <div class="card-information">
                                        <div class="card-name fontBold">{{cardDetail.CardName}}</div>
                                        <div class="card-duration" v-if="cardDetail.CardType == '3' || cardDetail.CardType == '1' ">有效期：{{cardDetail.yxdays}}天</div>
                                        <div class="card-duration" v-else>有效期：不限期</div>
                                    </div>
                                    <div class="money-and-count"><span class="card-money">￥{{cardDetail.SellingPrice}}</span></div>
                                </div>
                            </section>
                            <section v-else class="NewCardTemplateComponent__Wrapper-sc-18n2c0i-0 cWMxiU default-cardTemplate"
                                     :style="{backgroundImage:'url(' + cardDetail.CradImgURL + ')', backgroundRepeat:'no-repeat'}">
                                <div class="inner-wrapper">
                                    <div class="card-information">
                                        <div class="card-name fontBold">{{cardDetail.CardName}}</div>
                                        <div class="card-duration" v-if="cardDetail.CardType == '3' || cardDetail.CardType == '1' ">有效期：{{cardDetail.yxdays}}天</div>
                                        <div class="card-duration" v-else>有效期：不限期</div>
                                    </div>
                                    <div class="money-and-count"><span class="card-money">￥{{cardDetail.SellingPrice}}</span></div>
                                </div>
                            </section>
                            <div class="CardTemplateComponent__CardTemplateTextWrapper-sc-1slov8k-2 jzSyzs">
                                <h3><span class="name multiLine line-2">{{cardDetail.CardName}}</span></h3>
                                <p v-if="cardDetail.CardType == '3' || cardDetail.CardType == '1' ">有效期：{{cardDetail.yxdays}}天</p>
                                <div class="card-duration" v-else>有效期：不限期</div>
                                <span class="CardTemplateComponent__CardTemplatePrice-sc-1slov8k-1 dkRCIX">￥{{cardDetail.SellingPrice}}</span>
                            </div>

                        </div>
                    </div>
                    <section style="padding: 3px 0px; width: 100%;"></section>
                    <div class="DisplayCard-bf03i4-0 hFQfnW without-radius">
                        <div class="DisplayCard__DisplayCardHeader-bf03i4-1 gAtRbL">
                            <div class="main">购买须知</div>
                        </div>
                        <div class="CardTemplateShow__Readme-sc-1qy38wc-2 cbKiju">{{cardDetail.Info}}</div>
                    </div>
                    <div class="DisplayCard-bf03i4-0 hFQfnW without-radius">
                        <div class="DisplayCard__DisplayCardHeader-bf03i4-1 gAtRbL">
                            <div class="main">适用课程</div>
                        </div>
                        <div>
                            <div class="sliderList">
                                <div v-for="(item,index) in cardDetail.listCourse" class="ShopCourse__CourseWrapper-sc-1fokges-0 eQuHvg" @click="tocourses_detail(item.ID)">
                                    <div class="CdnImage__ImageWithBackground-sc-1pzwnhb-0  image"
                                         :style="{backgroundImage:'url('+item.HeadUrl+')'}"></div>
                                    <div class="text">
                                        <div class="name multiLine line-2">{{item.CourseName}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="CardTemplateShow__PromotionWrapper-sc-1qy38wc-3 jvchHq" v-if="cardDetail.isBuy == '1'">
                        <div
                            class="am-list-item am-checkbox-item CustomCheckBoxItem-sc-1kyeuly-0 dlXGBB am-list-item-middle">
                            <div class="am-list-thumb"><label class="am-checkbox-wrapper"><span
                                class="am-checkbox am-checkbox-checked"><input type="checkbox"
                                                                               class="am-checkbox-input" checked="" disabled><span
                                class="am-checkbox-inner"></span></span></label></div>
                            <div class="am-list-line">
                                <div class="am-list-content" v-if="cardDetail.preferentialType == '0'">无优惠</div>
                                <div class="am-list-content" v-if="cardDetail.preferentialType == '1'">减免{{cardDetail.preferentialvalue}}元</div>
                                <div class="am-list-content" v-if="cardDetail.preferentialType == '2'">折扣:{{cardDetail.preferentialvalue}}折</div>
                                <div class="am-list-extra"><span>￥{{cardDetail.preferentialAmount}}</span></div>
                            </div>
                            <div class="am-list-ripple" style="display: none;"></div>
                        </div>
                    </div>

                </div>
                <section style="padding: 3px 0px; width: 100%;"></section>
            </div>


            <div class="BottomActions__Wrapper-sc-1lhow6c-0 gMliAk">
                <div class="tips" v-if="cardDetail.isBuy == '1'">总价<span>￥{{cardDetail.preferentialAmount}}</span></div>
                <div class="actions"><a  class="tips" @click="showTelNow"><i
                    class="icon am-icon icon am-icon-consult am-icon-s"></i><span class="text">立即咨询</span></a></div>
                <!--<div class="actions"><a role="button"-->
                                        <!--class="am-button CustomButton__InnerButton-sc-1u03hwt-1 dhkNjs themed radius am-button-small"-->
                                        <!--aria-disabled="false"><span class="inner">立即下单</span></a></div>-->
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
        <div class="am-modal-mask " id="telbox" v-if="showTel"><div class="am-modal-wrap " role="dialog"><div role="document" class="am-modal am-modal-transparent"><div class="am-modal-content"><div class="am-modal-body"><div><p>即将拨打:</p><br><h3>{{StoresPhone}}</h3></div></div><div class="am-modal-footer"><div class="am-modal-button-group-h am-modal-button-group-normal" role="group"><a class="am-modal-button" role="button" @click="closeTel">取消</a><a class="am-modal-button" role="button" :href="phone" @click="closeTel">确认</a></div></div></div></div></div>
        </div>
    </div>
</template>

<script>
    import { getLocal,getStore,setStore } from '@/config/mUtils';
    import {getMemberCardDetail} from '../api/getData'
  export default {
    data() {
      return {
          cardDetail:{},
          loading:true,
          phone:'tel:'+getStore('Phone'),
          StoresPhone:getStore('Phone'),
          showTel: false,
      }
    },
    watch: {},
    methods: {
        showTelNow(){
            this.showTel = true;
        },
        closeTel(){
            this.showTel = false;
        },
        tocourses_detail(id){
            this.$router.push({path:'/courses_detail',query:{id:id}})
        },
        toIndex(){
                this.$router.push({path:'/',query:{storesid:getStore('storesid'),openid:getStore('openid')}})
        },
        async getMemberCardDetail() {
            // debugger;
            this.loading = true;
            const crs = await getMemberCardDetail({
                StoresID:getStore('storesid'),
                MemberCardID: this.$route.query.id
            })
            if (crs.orsuccess == "1") {
                this.loading = false;
                this.cardDetail = crs.data;
            } else {
                this.loading = false;
                this.$message({
                    message: crs.Msg,
                    type: 'error',
                    duration: 2000
                });
            }
        },
    },
    components: {},
    mounted() {
        $('.am-checkbox').click(function(){
            $(this).toggleClass('am-checkbox-checked')
        })
    },
    created() {
        this.getMemberCardDetail();
    },
    destroyed() {

    }
  }
</script>

<style scoped>

</style>
